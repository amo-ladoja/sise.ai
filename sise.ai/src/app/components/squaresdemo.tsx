"use client"

import { Squares } from "@/app/components/ui/squares-background"

export function SquaresDemo() {
  return (
    <div className="space-y-8">
      <div className="relative h-[800px] rounded-lg overflow-hidden bg-[#060606]">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#4F894F" 
          hoverFillColor="#475047"
        />
      </div>
    </div>
  )
}