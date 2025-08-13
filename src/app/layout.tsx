import type { Metadata } from "next"
import { Inter, Mona_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dania Kleinbaum-Labelle",
  description: "My personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${inter.variable} antialiased font-sans scroll-smooth`}
      >
        <div className="root">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
