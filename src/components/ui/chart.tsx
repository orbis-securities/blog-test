"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

// Chart context and provider
const ChartContext = React.createContext<{
  config: Record<string, any>
} | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: Record<string, any>
    children: React.ComponentProps<"div">["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={id}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <div className="w-full">{children}</div>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartTooltip = ({ children }: { children?: React.ReactNode }) => {
  return <div className="rounded-lg border bg-card px-3 py-1.5">{children}</div>
}

const ChartTooltipContent = ({ 
  className,
  children 
}: { 
  className?: string
  children?: React.ReactNode 
}) => {
  return (
    <div className={cn("text-sm", className)}>
      {children}
    </div>
  )
}

const ChartLegend = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex items-center justify-center gap-4">{children}</div>
}

const ChartLegendContent = ({ 
  className,
  children 
}: { 
  className?: string
  children?: React.ReactNode 
}) => {
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      {children}
    </div>
  )
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
}