'use client'

import { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PointMaterial, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function BustParticles() {
    const pointsRef = useRef<THREE.Points>(null!)
    const { mouse } = useThree()
    const { scene } = useGLTF('/models/bust.glb')

    const [positions, colors] = useMemo(() => {
        let geo: THREE.BufferGeometry | null = null

        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && !geo) {
                geo = (child as THREE.Mesh).geometry
            }
        })

        if (!geo) return [new Float32Array(0), new Float32Array(0)]

        const geometry = geo as THREE.BufferGeometry
        const positionAttribute = geometry.getAttribute('position')
        const indexAttribute = geometry.getIndex()

        const particleCount = 60000
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        // High contrast colors
        const colorA = new THREE.Color("#ff6500") // CTA Orange
        const colorB = new THREE.Color("#0a0f1a") // Navy/Black

        geometry.computeBoundingBox()
        const minY = geometry.boundingBox?.min.y || -1
        const maxY = geometry.boundingBox?.max.y || 1
        const height = maxY - minY || 1

        const vA = new THREE.Vector3()
        const vB = new THREE.Vector3()
        const vC = new THREE.Vector3()

        for (let i = 0; i < particleCount; i++) {
            let a, b, c
            if (indexAttribute) {
                const triIndex = Math.floor(Math.random() * (indexAttribute.count / 3)) * 3
                a = indexAttribute.getX(triIndex)
                b = indexAttribute.getX(triIndex + 1)
                c = indexAttribute.getX(triIndex + 2)
            } else {
                const triIndex = Math.floor(Math.random() * (positionAttribute.count / 3)) * 3
                a = triIndex
                b = triIndex + 1
                c = triIndex + 2
            }

            vA.fromBufferAttribute(positionAttribute, a)
            vB.fromBufferAttribute(positionAttribute, b)
            vC.fromBufferAttribute(positionAttribute, c)

            let r1 = Math.random()
            let r2 = Math.random()
            if (r1 + r2 > 1) {
                r1 = 1 - r1
                r2 = 1 - r2
            }

            const x = vA.x + r1 * (vB.x - vA.x) + r2 * (vC.x - vA.x)
            const y = vA.y + r1 * (vB.y - vA.y) + r2 * (vC.y - vA.y)
            const z = vA.z + r1 * (vB.z - vA.z) + r2 * (vC.z - vA.z)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            const mixRatio = Math.max(0, Math.min(1, ((y - minY) / height) * 1.5))
            const mixedColor = colorB.clone().lerp(colorA, mixRatio)

            colors[i * 3] = mixedColor.r
            colors[i * 3 + 1] = mixedColor.g
            colors[i * 3 + 2] = mixedColor.b
        }

        return [positions, colors]
    }, [scene])

    const baseRotationY = useRef(0)
    const targetX = useRef(0)
    const targetY = useRef(0)

    useFrame((state, delta) => {
        if (!pointsRef.current) return
        baseRotationY.current += delta * 0.12
        targetX.current = mouse.y * 0.4
        targetY.current = baseRotationY.current + (mouse.x * 0.5)
        pointsRef.current.rotation.x += (targetX.current - pointsRef.current.rotation.x) * 0.05
        pointsRef.current.rotation.y += (targetY.current - pointsRef.current.rotation.y) * 0.05
    })

    return (
        <points ref={pointsRef} position={[0, -0.2, 0]} scale={0.8}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <PointMaterial transparent vertexColors size={0.012} sizeAttenuation={true} depthWrite={false} />
        </points>
    )
}

export function PointCloudBust() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        useGLTF.preload('/models/bust.glb')
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 pointer-events-none opacity-90 dark:opacity-75 transition-opacity duration-300">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <Suspense fallback={null}>
                    <BustParticles />
                </Suspense>
            </Canvas>
        </div>
    )
}
