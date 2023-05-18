import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {

  React.useEffect(()=>{
    window.location.href="/behmorcoffeeroaster"
  },[])

  return (
    <div className="h-screen flex items-center justify-center">
      <Player 
        src='https://assets10.lottiefiles.com/packages/lf20_4mu3hoco.json'
        className="player"
        loop
        autoplay
      />
    </div>
  )
}
