import Header from '@/components/Header';
import './globals.css';



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
        <Header></Header>
        {children}</body>
    </html>
  )
}
