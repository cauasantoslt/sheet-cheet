import { useState } from "react"

export function Tabs({ defaultValue, value, onValueChange, children }) {
  return <div>{children}</div>
}

export function TabsList({ children, className }) {
  return <div className={`flex gap-2 flex-wrap ${className}`}>{children}</div>
}

export function TabsTrigger({ value, className, children }) {
  return <button className={`px-3 py-1 border rounded ${className}`}>{children}</button>
}

export function TabsContent({ value, className, children }) {
  return <div className={className}>{children}</div>
}
