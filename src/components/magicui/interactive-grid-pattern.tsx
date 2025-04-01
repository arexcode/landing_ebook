"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface InteractiveGridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  squares?: [number, number]
  squaresClassName?: string
}

export function InteractiveGridPattern({
  width = 20,
  height = 20,
  squares = [20, 20],
  squaresClassName,
  className,
  ...props
}: InteractiveGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [x, y] = squares

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const squareElements = containerRef.current.querySelectorAll("rect")

      squareElements.forEach((square) => {
        const squareX = Number.parseInt(square.getAttribute("x") || "0")
        const squareY = Number.parseInt(square.getAttribute("y") || "0")

        const distance = Math.sqrt(Math.pow(mouseX - squareX, 2) + Math.pow(mouseY - squareY, 2))

        const opacity = Math.max(0, Math.min(0.3, 1 - distance / 200))
        square.setAttribute("opacity", opacity.toString())
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0", className)} {...props}>
      <svg width="100%" height="100%">
        <g>
          {Array.from({ length: x }).map((_, i) =>
            Array.from({ length: y }).map((_, j) => (
              <rect
                key={`${i}-${j}`}
                x={i * width}
                y={j * height}
                width={width * 0.8}
                height={height * 0.8}
                rx={2}
                fill="currentColor"
                opacity="0.05"
                className={cn("transition-all duration-300", squaresClassName)}
              />
            )),
          )}
        </g>
      </svg>
    </div>
  )
}

