import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import behmorMachine from '../public/images/behmor-machine.png'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {FaRegHandPointer} from 'react-icons/fa'
import {motion} from 'framer-motion'
import EmailSidebarMobile from './EmailSidebarMobile'


const Hero = () => {

  function smoothScroll(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }

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
          <motion.p className='my-5 lg:text-lg'
            initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{duration:1,delay:0.2}}
          >
            Introducing <span className='text-dullgold font-semibold'>Behmor 2020SR Plus</span>, award-winning coffee roaster enables craft coffee roasting to be experienced at home with precision controls and smoke suppression.
          </motion.p>
          <div className='flex justify-between'>
            <motion.button className='p-3 bg-dullgold border text-white rounded-lg font-semibold capitalize hover:bg-transparent hover:border hover:border-dullgold hover:text-dullgold ease duration-200'
              initial={{y:20, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:1, delay:0.3}}
            >
              <a href="https://wa.me/601113247234?text=I%20am%20interested%20in%20buying%20a%20Behmor2020SRPlus!" target='_blank'>Get it now</a>
            </motion.button>
            <motion.button className='flex flex-row items-center border border-dullgold rounded-lg text-dullgold p-2 hover:bg-dullgold hover:text-white'
              initial={{y:20, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:1, delay:0.3}}
            >
                <AiOutlineFilePdf size="2em"/>
                <a href="./220v_Operation_Manual_2020SR_V21_8.8.2020.pdf" target='_blank'>Product Manual</a>
            </motion.button>
          </div>
        </div>
        <motion.div className='lg:w-1/2 relative'
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1,delay:1}}
        >
          <div className='flex justify-end'>
          <div className="absolute xl:top-[-28px] xl:right-[-4px] hover:scale-110 ease-in duration-150 lg:flex hidden ">
            <button href="#features" onClick={smoothScroll} className="xl:w-16 xl:h-16 h-14 w-14 bg-dullgray rounded-full text-white font-semibold relative  xl:leading-4 xl:text-base text-sm">Learn More
              <FaRegHandPointer className='absolute xl:top-[52px] right-0 w-8 h-8' />
            </button>
          </div>
          </div>
          <Image src={behmorMachine} alt='Behmor 2020SR Plus'/>
        </motion.div>

        <EmailSidebarMobile />
      </div>
    
    </section>
  )
}

export default Hero