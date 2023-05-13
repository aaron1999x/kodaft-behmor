import Image from 'next/image'
import { Raleway,Playfair_Display } from 'next/font/google'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Features from '@/components/Features'

const raleway = Raleway({ subsets: ['latin'] })
const playfair =Playfair_Display({ subsets: ['latin'],variable:'--font-playfair' })

export default function Home() {
  return (
    <main
      className={`${raleway.className} ${playfair.variable}`}
    >
      <Header/>
      <Hero />
      <Features />
    </main>
  )
}
