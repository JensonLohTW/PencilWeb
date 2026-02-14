'use client'

import { useEffect, useRef } from 'react'
import TubesCursor from 'threejs-components/build/cursors/tubes1.min.js'

export function TubesEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const appRef = useRef<any>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        // Initialize TubesCursor
        // Based on reference:
        /*
          const app = TubesCursor(document.getElementById('canvas'), {
            tubes: {
              colors: ["#f967fb", "#53bc28", "#6958d5"],
              lights: {
                intensity: 200,
                colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
              }
            }
          })
        */
        try {
            appRef.current = TubesCursor(canvasRef.current, {
                tubes: {
                    colors: ['#f967fb', '#53bc28', '#6958d5'],
                    lights: {
                        intensity: 200,
                        colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
                    },
                },
            })
        } catch (error) {
            console.error('Failed to initialize TubesEffect:', error)
        }

        return () => {
            // Cleanup if the library supports it, or at least stop animation
            // The library might not expose a destroy method, so we just let it be GC'd if possible
            // or try to clear the canvas
            if (appRef.current && typeof appRef.current.destroy === 'function') {
                appRef.current.destroy()
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full opacity-80 mix-blend-multiply dark:mix-blend-screen dark:filter-none filter invert"
            style={{
                zIndex: 0,
                pointerEvents: 'none', // Ensure clicks pass through to text
            }}
        />
    )
}
