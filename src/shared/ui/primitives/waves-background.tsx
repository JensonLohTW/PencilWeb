'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface WavesBackgroundProps {
    className?: string
}

export function WavesBackground({ className }: WavesBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // 2. Configuration Object
        const params = {
            gap: 1.11,
            speed: 0.0033,
            waveHeight: 0.60,
            frequencyX: 0.27,
            frequencyZ: 0.52,
            chaosScale: 2.30,
            dotSize: 0.20,
            dotOpacity: 0.99,
            lineLength: 6.24,
            lineOpacity: 0.22,
            lineGrowth: true,
            colorStart: '#5ff785',
            colorEnd: '#004cff',
            camX: 14.4,
            camY: 1.0,
            camZ: 37.9,
            fogColor: '#000000',
            fogDensity: 0.01
        }

        // 1. Scene Initialization
        const scene = new THREE.Scene()
        scene.fog = new THREE.FogExp2(params.fogColor, params.fogDensity)
        // Remove fixed background color to allow transparency if needed, 
        // or keep it to match the design. For now, match the demo but make it adaptable.
        // scene.background = new THREE.Color(params.fogColor); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(params.camX, params.camY, params.camZ)
        camera.lookAt(0, 0, 0)

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        containerRef.current.appendChild(renderer.domElement)

        // 3. Geometry Generation
        const ROWS = 50
        const COLS = 100
        const particleCount = ROWS * COLS

        function createCircleTexture() {
            const canvas = document.createElement('canvas')
            canvas.width = 32
            canvas.height = 32
            const ctx = canvas.getContext('2d')
            if (!ctx) return new THREE.CanvasTexture(canvas)

            const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
            grad.addColorStop(0, 'rgba(255,255,255,1)')
            grad.addColorStop(1, 'rgba(255,255,255,0)')
            ctx.fillStyle = grad
            ctx.fillRect(0, 0, 32, 32)
            return new THREE.CanvasTexture(canvas)
        }

        const particlesGeometry = new THREE.BufferGeometry()
        const particlePositions = new Float32Array(particleCount * 3)
        const particleColors = new Float32Array(particleCount * 3)

        const linesGeometry = new THREE.BufferGeometry()
        const linePositions = new Float32Array(particleCount * 2 * 3)
        const lineColors = new Float32Array(particleCount * 2 * 3)

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
        linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
        linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

        function updateLayout() {
            const offsetX = (COLS * params.gap) / 2
            const offsetZ = (ROWS * params.gap) / 2

            let i = 0
            let lineIndex = 0

            for (let x = 0; x < COLS; x++) {
                for (let z = 0; z < ROWS; z++) {
                    const px = x * params.gap - offsetX
                    const pz = z * params.gap - offsetZ

                    // Dots X/Z
                    particlePositions[i * 3] = px
                    particlePositions[i * 3 + 2] = pz

                    // Lines X/Z
                    linePositions[lineIndex * 3] = px
                    linePositions[lineIndex * 3 + 2] = pz

                    linePositions[(lineIndex + 1) * 3] = px
                    linePositions[(lineIndex + 1) * 3 + 2] = pz

                    i++
                    lineIndex += 2
                }
            }

            particlesGeometry.attributes.position.needsUpdate = true
            linesGeometry.attributes.position.needsUpdate = true
        }

        function updateColors() {
            const c1 = new THREE.Color(params.colorStart)
            const c2 = new THREE.Color(params.colorEnd)

            const pColors = particlesGeometry.attributes.color.array as Float32Array
            const lColors = linesGeometry.attributes.color.array as Float32Array

            let j = 0
            let l = 0

            for (let x = 0; x < COLS; x++) {
                const mixRatio = x / COLS
                const mixedColor = c1.clone().lerp(c2, mixRatio)

                for (let z = 0; z < ROWS; z++) {
                    // Dot Color
                    pColors[j * 3] = mixedColor.r
                    pColors[j * 3 + 1] = mixedColor.g
                    pColors[j * 3 + 2] = mixedColor.b

                    // Line Color (Top)
                    lColors[l * 3] = mixedColor.r
                    lColors[l * 3 + 1] = mixedColor.g
                    lColors[l * 3 + 2] = mixedColor.b

                    // Line Color (Bottom) - dimmer
                    lColors[(l + 1) * 3] = mixedColor.r * 0.3
                    lColors[(l + 1) * 3 + 1] = mixedColor.g * 0.3
                    lColors[(l + 1) * 3 + 2] = mixedColor.b * 0.3

                    j++
                    l += 2
                }
            }
            particlesGeometry.attributes.color.needsUpdate = true
            linesGeometry.attributes.color.needsUpdate = true
        }

        updateLayout()
        updateColors()

        const particlesMaterial = new THREE.PointsMaterial({
            size: params.dotSize,
            map: createCircleTexture(),
            vertexColors: true,
            transparent: true,
            opacity: params.dotOpacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })

        const linesMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: params.lineOpacity,
            blending: THREE.AdditiveBlending
        })

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)

        scene.add(particlesMesh)
        scene.add(linesMesh)

        // Animation Loop
        let time = 0
        let animationFrameId: number

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            time += params.speed

            const pPos = particlesGeometry.attributes.position.array as Float32Array
            const lPos = linesGeometry.attributes.position.array as Float32Array

            let i = 0
            let lineIdx = 0

            const floorLevel = -5.0

            for (let x = 0; x < COLS; x++) {
                for (let z = 0; z < ROWS; z++) {
                    const px = pPos[i * 3]
                    const pz = pPos[i * 3 + 2]

                    const py = Math.sin(px * params.frequencyX + time) * params.waveHeight +
                        Math.cos(pz * params.frequencyZ + time * 0.5) * params.waveHeight +
                        Math.sin((px + pz) * 0.1 + time) * params.chaosScale

                    // Update Dot Y
                    pPos[i * 3 + 1] = py

                    // Update Line Y
                    if (params.lineGrowth) {
                        lPos[lineIdx * 3 + 1] = py
                        lPos[(lineIdx + 1) * 3 + 1] = floorLevel
                    } else {
                        lPos[lineIdx * 3 + 1] = py
                        lPos[(lineIdx + 1) * 3 + 1] = py - params.lineLength
                    }

                    i++
                    lineIdx += 2
                }
            }

            particlesGeometry.attributes.position.needsUpdate = true
            linesGeometry.attributes.position.needsUpdate = true

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement)
            }
            particlesGeometry.dispose()
            linesGeometry.dispose()
            particlesMaterial.dispose()
            linesMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return <div ref={containerRef} className={className} />
}
