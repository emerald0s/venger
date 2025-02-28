import type React from "react"
import "./globals.css"
import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ["hebrew"] })

export const metadata = {
  title: "Asaf Venger's Digital Footprint",
  description: "Personal gallery website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}

