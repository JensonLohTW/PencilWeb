'use client'

import { useEffect, useRef } from 'react'

type RGB = { r: number; g: number; b: number }
type Side = 'left' | 'right'
type NodeKind = 'green' | 'gray'

const GREEN: RGB = { r: 0, g: 186, b: 98 }
const GREEN_SOFT: RGB = { r: 22, g: 130, b: 82 }
const GRAY: RGB = { r: 166, g: 174, b: 188 }
const rgba = (c: RGB, a: number) => `rgba(${c.r},${c.g},${c.b},${a})`

const LEFT_PORT_COUNT = 6
const RIGHT_PORT_COUNT = 4

interface GridDot {
    x: number
    y: number
    size: number
    alpha: number
}

interface SphereNode {
    theta: number
    phi: number
    phase: number
    size: number
    kind: NodeKind
}

interface ProjectedNode {
    index: number
    x: number
    y: number
    z: number
    alpha: number
    size: number
    kind: NodeKind
    phase: number
}

interface Flow {
    side: Side
    portIndex: number
    targetIndex: number
    startAt: number
    duration: number
    bend: number
    width: number
}

interface AnchorLink {
    side: Side
    portIndex: number
    targetA: number
    targetB: number
    phase: number
    speed: number
    width: number
}

interface Layout {
    cx: number
    cy: number
    radius: number
    leftX: number
    rightX: number
    leftPorts: number[]
    rightPorts: number[]
}

interface PointerState {
    x: number
    y: number
    active: boolean
}

export function SectorNetworkCanvas({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const rafRef = useRef(0)
    const startRef = useRef<number | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const reduceMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
        let prefersReducedMotion = reduceMotionMedia.matches

        let W = 0
        let H = 0
        let rng = createRng(1)
        let gridDots: GridDot[] = []
        let sphereNodes: SphereNode[] = []
        let nodeBoostUntil: number[] = []
        let anchorLinks: AnchorLink[] = []
        let flows: Flow[] = []
        let nextBoostAt = 0
        let nextFlowAt = 0
        let lastHoverBurstAt = -10

        const pointerTarget: PointerState = { x: 0, y: 0, active: false }
        const pointer: PointerState = { x: 0, y: 0, active: false }

        const buildScene = () => {
            rng = createRng(Math.round(W * 13 + H * 17))
            const step = clamp(Math.round(Math.min(W, H) * 0.05), 16, 26)

            gridDots = []
            for (let y = step / 2; y < H; y += step) {
                for (let x = step / 2; x < W; x += step) {
                    gridDots.push({
                        x: x + (rng() - 0.5) * 2,
                        y: y + (rng() - 0.5) * 2,
                        size: 0.75 + rng() * 1.15,
                        alpha: 0.08 + rng() * 0.14,
                    })
                }
            }

            sphereNodes = Array.from({ length: 98 }, () => {
                const u = rng() * 2 - 1
                const phi = Math.asin(u)
                const kind: NodeKind = rng() > 0.68 ? 'green' : 'gray'
                return {
                    theta: rng() * Math.PI * 2,
                    phi,
                    phase: rng() * Math.PI * 2,
                    size: kind === 'green' ? 1.9 + rng() * 2.3 : 1.2 + rng() * 2.6,
                    kind,
                }
            })

            nodeBoostUntil = sphereNodes.map(() => 0)
            anchorLinks = buildAnchorLinks(rng, sphereNodes.length)
            flows = []
            nextBoostAt = 0
            nextFlowAt = 0
            lastHoverBurstAt = -10
        }

        const resize = () => {
            const rect = canvas.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            W = rect.width
            H = rect.height
            canvas.width = W * dpr
            canvas.height = H * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            buildScene()
        }

        const onPointerMove = (event: PointerEvent) => {
            const rect = canvas.getBoundingClientRect()
            const x = (event.clientX - rect.left) / rect.width
            const y = (event.clientY - rect.top) / rect.height
            pointerTarget.x = clamp(x * 2 - 1, -1, 1)
            pointerTarget.y = clamp(y * 2 - 1, -1, 1)
            pointerTarget.active = true
        }

        const onPointerLeave = () => {
            pointerTarget.active = false
        }

        canvas.addEventListener('pointermove', onPointerMove)
        canvas.addEventListener('pointerleave', onPointerLeave)

        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        const draw = (ts: number) => {
            if (!startRef.current) startRef.current = ts
            const t = prefersReducedMotion ? 0 : (ts - startRef.current) / 1000
            const layout = getLayout(W, H)

            const targetX = pointerTarget.active ? pointerTarget.x : 0
            const targetY = pointerTarget.active ? pointerTarget.y : 0
            pointer.x += (targetX - pointer.x) * 0.08
            pointer.y += (targetY - pointer.y) * 0.08
            pointer.active = pointerTarget.active

            const rotY = t * 0.18 + pointer.x * 0.32
            const rotX = Math.sin(t * 0.3) * 0.1 + pointer.y * 0.24

            ctx.fillStyle = 'rgba(8,10,14,0.98)'
            ctx.fillRect(0, 0, W, H)

            const gridShiftX = pointer.x * 2.5
            const gridShiftY = pointer.y * 2.5
            gridDots.forEach((dot) => {
                ctx.beginPath()
                ctx.arc(dot.x + gridShiftX, dot.y + gridShiftY, dot.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(145,152,168,${dot.alpha})`
                ctx.fill()
            })

            const projected = sphereNodes.map((node, index) => {
                const projectedNode = projectSphereNode(node, layout, rotX, rotY)
                return {
                    index,
                    ...projectedNode,
                    kind: node.kind,
                    phase: node.phase,
                }
            })

            const pointerX = ((pointer.x + 1) * 0.5) * W
            const pointerY = ((pointer.y + 1) * 0.5) * H
            const hoveredIndex = pointer.active ? findHoveredNode(projected, pointerX, pointerY) : -1

            if (!prefersReducedMotion) {
                while (nextBoostAt <= t) {
                    const count = 2 + Math.floor(rng() * 4)
                    for (let i = 0; i < count; i += 1) {
                        const idx = Math.floor(rng() * nodeBoostUntil.length)
                        nodeBoostUntil[idx] = t + 0.6 + rng() * 1.1
                    }
                    nextBoostAt = t + 0.2 + rng() * 0.4
                }

                while (nextFlowAt <= t) {
                    const visible = projected.filter((node) => node.z > -0.35 && node.alpha > 0.35)
                    if (visible.length > 0) {
                        const target = visible[Math.floor(rng() * visible.length)]
                        const side: Side = rng() > 0.38 ? 'left' : 'right'
                        const portPool = side === 'left' ? layout.leftPorts : layout.rightPorts
                        flows.push({
                            side,
                            portIndex: Math.floor(rng() * portPool.length),
                            targetIndex: target.index,
                            startAt: t,
                            duration: 0.9 + rng() * 1.0,
                            bend: (rng() - 0.5) * layout.radius * 0.45,
                            width: 0.75 + rng() * 0.85,
                        })
                    }
                    nextFlowAt = t + 0.13 + rng() * 0.24
                }

                if (hoveredIndex >= 0 && t - lastHoverBurstAt > 0.16) {
                    const hovered = projected[hoveredIndex]
                    if (hovered) {
                        const leftPortIndex = closestPortIndex(layout.leftPorts, hovered.y)
                        const rightPortIndex = closestPortIndex(layout.rightPorts, hovered.y)
                        flows.push({
                            side: 'left',
                            portIndex: leftPortIndex,
                            targetIndex: hovered.index,
                            startAt: t,
                            duration: 0.72,
                            bend: -layout.radius * 0.18,
                            width: 1.25,
                        })
                        flows.push({
                            side: 'right',
                            portIndex: rightPortIndex,
                            targetIndex: hovered.index,
                            startAt: t,
                            duration: 0.72,
                            bend: layout.radius * 0.18,
                            width: 1.25,
                        })
                        nodeBoostUntil[hovered.index] = Math.max(nodeBoostUntil[hovered.index], t + 0.9)
                    }
                    lastHoverBurstAt = t
                }
            }

            flows = flows.filter((flow) => t - flow.startAt <= flow.duration)

            drawSphereMesh(ctx, layout, rotX, rotY, t)
            drawPorts(ctx, layout, t)
            drawAnchorLinks(ctx, anchorLinks, projected, layout, t, hoveredIndex)
            drawDataFlows(ctx, flows, projected, layout, t)
            drawNodes(ctx, projected, nodeBoostUntil, t, hoveredIndex)
            drawPointerHint(ctx, projected, hoveredIndex)

            rafRef.current = requestAnimationFrame(draw)
        }

        rafRef.current = requestAnimationFrame(draw)

        const onMotionChange = (event: MediaQueryListEvent) => {
            prefersReducedMotion = event.matches
        }
        reduceMotionMedia.addEventListener('change', onMotionChange)

        return () => {
            cancelAnimationFrame(rafRef.current)
            ro.disconnect()
            canvas.removeEventListener('pointermove', onPointerMove)
            canvas.removeEventListener('pointerleave', onPointerLeave)
            reduceMotionMedia.removeEventListener('change', onMotionChange)
        }
    }, [])

    return <canvas ref={canvasRef} className={className} aria-hidden style={{ width: '100%', height: '100%', display: 'block' }} />
}

function drawSphereMesh(ctx: CanvasRenderingContext2D, layout: Layout, rotX: number, rotY: number, t: number) {
    const latitudes = [-60, -40, -20, 0, 20, 40, 60]
    const longitudes = [0, 30, 60, 90, 120, 150]

    latitudes.forEach((deg) => {
        const phi = (deg * Math.PI) / 180
        drawSphereCurve(
            ctx,
            layout,
            rotX,
            rotY,
            (ratio) => ({ theta: ratio * Math.PI * 2, phi }),
            rgba(GRAY, deg === 0 ? 0.2 : 0.11),
            deg === 0 ? 1.05 : 0.65,
        )
    })

    longitudes.forEach((deg) => {
        const theta = (deg * Math.PI) / 180
        drawSphereCurve(
            ctx,
            layout,
            rotX,
            rotY,
            (ratio) => ({ theta, phi: -Math.PI / 2 + ratio * Math.PI }),
            rgba(GRAY, 0.1),
            0.58,
        )
    })

    const sweepTheta = (t * 0.26) % (Math.PI * 2)
    drawSphereCurve(
        ctx,
        layout,
        rotX,
        rotY,
        (ratio) => ({ theta: sweepTheta, phi: -Math.PI / 2 + ratio * Math.PI }),
        rgba(GREEN, 0.24),
        1.35,
    )
}

function drawSphereCurve(
    ctx: CanvasRenderingContext2D,
    layout: Layout,
    rotX: number,
    rotY: number,
    sample: (ratio: number) => { theta: number; phi: number },
    stroke: string,
    width: number,
) {
    const steps = 64
    ctx.beginPath()
    for (let i = 0; i <= steps; i += 1) {
        const ratio = i / steps
        const point = sample(ratio)
        const p = project(point.theta, point.phi, layout, rotX, rotY)
        if (i === 0) ctx.moveTo(p.x, p.y)
        else ctx.lineTo(p.x, p.y)
    }
    ctx.strokeStyle = stroke
    ctx.lineWidth = width
    ctx.stroke()
}

function drawPorts(ctx: CanvasRenderingContext2D, layout: Layout, t: number) {
    const drawSide = (side: Side, ys: number[]) => {
        const x = side === 'left' ? layout.leftX : layout.rightX
        ys.forEach((y, i) => {
            const pulse = 0.68 + 0.32 * Math.sin(t * 1.1 + i * 0.7)
            ctx.beginPath()
            ctx.arc(x, y, 4.2, 0, Math.PI * 2)
            ctx.fillStyle = rgba(GREEN, 0.55 + 0.28 * pulse)
            ctx.fill()

            for (let n = 1; n <= 3; n += 1) {
                const dx = n * 10
                ctx.beginPath()
                ctx.arc(side === 'left' ? x - dx : x + dx, y, 2.4, 0, Math.PI * 2)
                ctx.fillStyle = rgba(GRAY, 0.35 - n * 0.08)
                ctx.fill()
            }
        })
    }

    drawSide('left', layout.leftPorts)
    drawSide('right', layout.rightPorts)
}

function drawAnchorLinks(
    ctx: CanvasRenderingContext2D,
    links: AnchorLink[],
    projected: ProjectedNode[],
    layout: Layout,
    t: number,
    hoveredIndex: number,
) {
    links.forEach((link) => {
        const choice = Math.sin(t * link.speed + link.phase) > 0 ? link.targetA : link.targetB
        const target = projected[choice]
        if (!target) return

        const yPorts = link.side === 'left' ? layout.leftPorts : layout.rightPorts
        const startX = link.side === 'left' ? layout.leftX : layout.rightX
        const startY = yPorts[link.portIndex] ?? yPorts[0]
        const dir = link.side === 'left' ? 1 : -1

        const c1x = startX + dir * layout.radius * 0.48
        const c2x = target.x - dir * layout.radius * 0.28
        const c1y = startY + Math.sin(t * 0.9 + link.phase) * layout.radius * 0.12
        const c2y = target.y - Math.cos(t * 0.7 + link.phase) * layout.radius * 0.1

        const highlighted = hoveredIndex >= 0 && choice === hoveredIndex
        const alpha = highlighted ? 0.35 : 0.1 + target.alpha * 0.16

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, target.x, target.y)
        ctx.strokeStyle = rgba(GREEN_SOFT, alpha)
        ctx.lineWidth = highlighted ? link.width + 0.7 : link.width
        ctx.stroke()

        const p1 = (t * 0.26 + link.phase * 0.21) % 1
        const p2 = (p1 + 0.52) % 1
        drawFlowPacket(ctx, startX, startY, c1x, c1y, c2x, c2y, target.x, target.y, p1, highlighted)
        drawFlowPacket(ctx, startX, startY, c1x, c1y, c2x, c2y, target.x, target.y, p2, false)
    })
}

function drawDataFlows(
    ctx: CanvasRenderingContext2D,
    flows: Flow[],
    projected: ProjectedNode[],
    layout: Layout,
    t: number,
) {
    flows.forEach((flow) => {
        const target = projected[flow.targetIndex]
        if (!target) return

        const yPorts = flow.side === 'left' ? layout.leftPorts : layout.rightPorts
        const startX = flow.side === 'left' ? layout.leftX : layout.rightX
        const startY = yPorts[flow.portIndex] ?? yPorts[0]

        const c1x = flow.side === 'left' ? startX + layout.radius * 0.55 : startX - layout.radius * 0.55
        const c2x = flow.side === 'left' ? target.x - layout.radius * 0.33 : target.x + layout.radius * 0.33
        const c1y = startY + flow.bend
        const c2y = target.y - flow.bend * 0.32

        const life = clamp((t - flow.startAt) / flow.duration, 0, 1)
        const alpha = Math.sin(life * Math.PI)

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, target.x, target.y)
        ctx.strokeStyle = rgba(GREEN, 0.12 + alpha * 0.35)
        ctx.lineWidth = flow.width
        ctx.stroke()

        drawFlowPacket(ctx, startX, startY, c1x, c1y, c2x, c2y, target.x, target.y, life, true)
    })
}

function drawFlowPacket(
    ctx: CanvasRenderingContext2D,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    t: number,
    strong: boolean,
) {
    const p = cubicBezierPoint({ x: x0, y: y0 }, { x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, t)
    const glowRadius = strong ? 13 : 9
    const dotRadius = strong ? 2.6 : 1.8

    const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius)
    glow.addColorStop(0, rgba(GREEN, strong ? 0.88 : 0.62))
    glow.addColorStop(1, rgba(GREEN, 0))
    ctx.beginPath()
    ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
    ctx.fillStyle = glow
    ctx.fill()

    ctx.beginPath()
    ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2)
    ctx.fillStyle = rgba(GREEN, strong ? 0.96 : 0.82)
    ctx.fill()
}

function drawNodes(
    ctx: CanvasRenderingContext2D,
    projected: ProjectedNode[],
    nodeBoostUntil: number[],
    t: number,
    hoveredIndex: number,
) {
    projected
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((node) => {
            const boostRemaining = Math.max(0, nodeBoostUntil[node.index] - t)
            let boost = clamp(boostRemaining / 1.2, 0, 1)
            if (node.index === hoveredIndex) boost = Math.max(boost, 0.88)

            const flicker = 0.35 + 0.65 * Math.max(0, Math.sin(t * 1.22 + node.phase))
            const alphaBase = node.kind === 'green' ? 0.43 : 0.25
            const alpha = node.alpha * alphaBase * flicker + boost * 0.65
            if (alpha < 0.1) return

            const r = node.size * (1 + boost * 0.52)
            if (boost > 0.18) {
                const halo = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 5)
                halo.addColorStop(0, rgba(GREEN, 0.24 * boost))
                halo.addColorStop(1, rgba(GREEN, 0))
                ctx.beginPath()
                ctx.arc(node.x, node.y, r * 5, 0, Math.PI * 2)
                ctx.fillStyle = halo
                ctx.fill()
            }

            ctx.beginPath()
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
            ctx.fillStyle = node.kind === 'green' ? rgba(GREEN, alpha) : rgba(GRAY, alpha)
            ctx.fill()

            if (node.index === hoveredIndex) {
                ctx.beginPath()
                ctx.arc(node.x, node.y, r * 2.25, 0, Math.PI * 2)
                ctx.strokeStyle = rgba(GREEN, 0.65)
                ctx.lineWidth = 1.2
                ctx.stroke()
            }
        })
}

function drawPointerHint(ctx: CanvasRenderingContext2D, projected: ProjectedNode[], hoveredIndex: number) {
    if (hoveredIndex < 0) return
    const node = projected[hoveredIndex]
    if (!node) return
    ctx.beginPath()
    ctx.arc(node.x, node.y, 20, 0, Math.PI * 2)
    ctx.strokeStyle = rgba(GREEN, 0.22)
    ctx.lineWidth = 0.9
    ctx.setLineDash([4, 5])
    ctx.stroke()
    ctx.setLineDash([])
}

function projectSphereNode(node: SphereNode, layout: Layout, rotX: number, rotY: number) {
    const p = project(node.theta, node.phi, layout, rotX, rotY)
    return {
        x: p.x,
        y: p.y,
        z: p.z,
        alpha: 0.25 + ((p.z + 1) * 0.5) * 0.75,
        size: node.size * (0.74 + ((p.z + 1) * 0.5) * 0.7),
    }
}

function project(theta: number, phi: number, layout: Layout, rotX: number, rotY: number) {
    const th = theta + rotY
    const cosPhi = Math.cos(phi)
    const x = cosPhi * Math.cos(th)
    const y = Math.sin(phi)
    const z = cosPhi * Math.sin(th)

    const y2 = y * Math.cos(rotX) - z * Math.sin(rotX)
    const z2 = y * Math.sin(rotX) + z * Math.cos(rotX)
    const perspective = 1 + z2 * 0.33

    return {
        x: layout.cx + x * layout.radius * perspective,
        y: layout.cy + y2 * layout.radius * perspective,
        z: z2,
    }
}

function buildAnchorLinks(rng: () => number, nodeCount: number): AnchorLink[] {
    const links: AnchorLink[] = []

    for (let i = 0; i < LEFT_PORT_COUNT; i += 1) {
        links.push({
            side: 'left',
            portIndex: i,
            targetA: Math.floor(((i + 0.5) / LEFT_PORT_COUNT) * nodeCount * 0.75),
            targetB: Math.floor(rng() * nodeCount),
            phase: rng() * Math.PI * 2,
            speed: 0.18 + rng() * 0.2,
            width: 0.7 + rng() * 0.35,
        })
    }

    for (let i = 0; i < RIGHT_PORT_COUNT; i += 1) {
        links.push({
            side: 'right',
            portIndex: i,
            targetA: Math.floor(((i + 1) / (RIGHT_PORT_COUNT + 1)) * nodeCount),
            targetB: Math.floor(rng() * nodeCount),
            phase: rng() * Math.PI * 2,
            speed: 0.2 + rng() * 0.18,
            width: 0.75 + rng() * 0.35,
        })
    }

    return links
}

function findHoveredNode(nodes: ProjectedNode[], x: number, y: number) {
    let hovered = -1
    let minDist = 30
    nodes.forEach((node) => {
        const dx = node.x - x
        const dy = node.y - y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < minDist && node.alpha > 0.32) {
            hovered = node.index
            minDist = d
        }
    })
    return hovered
}

function closestPortIndex(ports: number[], y: number) {
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    ports.forEach((portY, i) => {
        const d = Math.abs(portY - y)
        if (d < bestDist) {
            best = i
            bestDist = d
        }
    })
    return best
}

function cubicBezierPoint(
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number },
    t: number,
) {
    const u = 1 - t
    const tt = t * t
    const uu = u * u
    const uuu = uu * u
    const ttt = tt * t
    return {
        x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
        y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
    }
}

function getLayout(W: number, H: number): Layout {
    const radius = Math.min(W * 0.29, H * 0.4)
    const cx = W * 0.5
    const cy = H * 0.52
    const leftX = Math.max(10, W * 0.03)
    const rightX = Math.min(W - 10, W * 0.97)
    const leftPorts = distributePorts(H * 0.16, H * 0.84, LEFT_PORT_COUNT)
    const rightPorts = distributePorts(H * 0.28, H * 0.72, RIGHT_PORT_COUNT)
    return { cx, cy, radius, leftX, rightX, leftPorts, rightPorts }
}

function distributePorts(from: number, to: number, count: number) {
    if (count <= 1) return [(from + to) / 2]
    const gap = (to - from) / (count - 1)
    return Array.from({ length: count }, (_, i) => from + i * gap)
}

function createRng(seed: number) {
    let s = seed >>> 0
    return () => {
        s = (s + 0x6d2b79f5) | 0
        let t = Math.imul(s ^ (s >>> 15), 1 | s)
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

function clamp(v: number, min: number, max: number) {
    return Math.max(min, Math.min(max, v))
}
