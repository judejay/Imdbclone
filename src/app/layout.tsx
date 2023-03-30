import Header from '@/components/Header';
import './globals.css';
import  Providers from './Providers'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';


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
        <SearchBox></SearchBox>
        {children}
        <Footer></Footer>
        </Providers>
        </body>
    </html>
  )
}
