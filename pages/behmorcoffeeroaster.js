import { Raleway,Playfair_Display } from 'next/font/google'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Features from '@/components/Features'
import WhatsappCTA from '@/components/WhatsappCTA'
import MetaHead from '@/components/MetaHead'
import Script from 'next/script'

const raleway = Raleway({ subsets: ['latin'] })
const playfair =Playfair_Display({ subsets: ['latin'],variable:'--font-playfair' })

const behmorcoffeeroaster = () => {
  return (
    
    <main
      className={`${raleway.className} ${playfair.variable} relative`}
    >
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-GQSDTSM775'
        strategy="afterInteractive"
        />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-GQSDTSM775');
        `}
      </Script>
      <MetaHead />
      <Header/>
      <Hero />
      <Features />
      <WhatsappCTA />
    </main>
    
  )
}

export default behmorcoffeeroaster