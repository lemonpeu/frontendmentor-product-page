import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/shared/Nav'
import ProductContainer from '@/components/containers/ProductContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={inter.className}
    >
     <Nav/>
     <ProductContainer/>
    </main>
  )
}
