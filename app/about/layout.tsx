import type React from "react"
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="bg-black">{children}</div>
}
