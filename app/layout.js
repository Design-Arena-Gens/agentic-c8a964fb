import './globals.css'

export const metadata = {
  title: 'Horse Content Browser',
  description: 'Browse beautiful horse content and information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
