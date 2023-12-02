import  Navbar from '@components/navbar/navbar.js'
import '@styles/globals.css'

export const metadata = {
  title: 'Andi Muhammad Sabar',
  description: 'D121211035 nuxt banner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
