import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import behmorMachine from '../public/images/behmor-machine.png'
import {AiOutlineFilePdf} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='h-screen flex items-center bg-dullcream -mt-[36px]'>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-12 lg:items-center mx-6 lg:w-[800px] xl:w-[980px] lg:mx-auto '>
        <div className='lg:w-1/2'>
          <h1 className=' font-playfair text-5xl text-headerBrown lg:text-7xl italic'>
          <TypeAnimation
              sequence={[
                'Drink',
                1000, // Waits 1s
                'Brew', 
                1000, // Waits 1s
                'Roast',
                4500,
            
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
              className=''
            /> 
          </h1>
          <h1 className=' font-playfair text-5xl text-headerBrown lg:text-7xl'>
            like a pro at home.
          </h1>
          <p className='my-5 lg:text-lg'>
            Introducing <span className='text-dullgold font-semibold'>Behmor 2020SR Plus</span>, award-winning coffee roaster enables craft coffee roasting to be experienced at home with precision controls and smoke suppression.
          </p>
          <div className='flex justify-between'>
            <button className='p-3 bg-dullgold border text-white rounded-lg font-semibold capitalize hover:bg-transparent hover:border hover:border-dullgold hover:text-dullgold ease duration-200'>
              <a href="">Get it now</a>
            </button>
            <button className='flex flex-row items-center border border-dullgold rounded-lg text-dullgold p-2 hover:bg-dullgold hover:text-white'>
                <AiOutlineFilePdf size="2em"/>
                <a href="./220v_Operation_Manual_2020SR_V21_8.8.2020.pdf" target='_blank'>Product Manual</a>
            </button>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <Image src={behmorMachine} alt='Behmor 2020SR Plus'/>
        </div>
      </div>

    </section>
  )
}

export default Hero