import Header from '@/components/Header';
import './globals.css';
import  Providers from './Providers'
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'Imdb Clone',
  description: 'Next Js Demo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header></Header>
        <Navbar></Navbar>
        {children}
        </Providers>
        </body>
    </html>
  )
}
