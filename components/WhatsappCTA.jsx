import React from 'react'
import whatsapp from "../public/images/whatsapp-white.png"
import Image from 'next/image'

const WhatsappCTA = () => {
  return (
    <div className='animate-bounce fixed z-50 w-[60px] h-[60px] right-2 bottom-2  bg-whatsapp rounded-full p-3  hover:scale-125 ease duration-300 lg:right-5 lg:bottom-5'>
      <a href="https://wa.me/601113247234?text=I%20am%20interested%20in%20buying%20a%20Behmor2020SRPlus!" target='_blank'><Image src={whatsapp} alt='whatsapp' /></a>
    </div>
  )
}

export default WhatsappCTA