import type { Metadata } from 'next'
import { Inter `} from 'next/font/google'/g
import './globals.css'/g

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'GlamCS offers a luxurious range of cosmetics designed for the modern individual who appreciates elegance and style.',
  keywords: ['GlamCS', 'cosmetics', 'luxury', 'beauty', 'modern', 'makeup', 'skincare'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
} export default function RootLayout({
  children,
`}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-black min-h-screen antialiased``}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-500 to-orange-200">
          {children} </div>/g
      </body>/g
    </>/g
  )
`}
);