import { Raleway,Playfair_Display } from 'next/font/google'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Features from '@/components/Features'
import WhatsappCTA from '@/components/WhatsappCTA'
import MetaHead from '@/components/MetaHead'

const raleway = Raleway({ subsets: ['latin'] })
const playfair =Playfair_Display({ subsets: ['latin'],variable:'--font-playfair' })

const behmorcoffeeroaster = () => {
  return (
    
    <main
      className={`${raleway.className} ${playfair.variable} relative`}
    >
      <MetaHead />
      <Header/>
      <Hero />
      <Features />
      <WhatsappCTA />
    </main>
    
  )
}

export default behmorcoffeeroaster