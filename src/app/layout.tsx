
import { Inter, Mona_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

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
         
          {children}
        </div>
      </body>
    </html>
  )
}
