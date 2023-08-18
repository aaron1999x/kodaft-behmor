import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';
import Script from "next/script";
import MetaHead from "@/components/MetaHead";

export default function Home() {

  React.useEffect(()=>{
    window.location.href="/behmorcoffeeroastermalaysia"
  },[])

  return (
    <>
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
      <div className="h-screen flex items-center justify-center">
        <Player 
          src='https://assets10.lottiefiles.com/packages/lf20_4mu3hoco.json'
          className="player"
          loop
          autoplay
        />
      </div>
    </>
  )
}
