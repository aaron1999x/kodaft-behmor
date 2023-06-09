import React from 'react'
import {CiCoffeeBean} from 'react-icons/ci'

const EmailSidebar = () => {
  return (
    <div className='hidden lg:block fixed bottom-0 right-auto left-[30px] z-10'>
      <div className='flex flex-col items-center relative'>
        <a className='flex items-center gap-2 [writing-mode:vertical-lr] my-5 mx-auto text-dullgold tracking-wider' href="mailto:hello@kodaft.com"><CiCoffeeBean />hello@kodaft.com</a>
        <div className=' w-[1px] h-[90px] bg-dullgold'></div>
      </div>
    </div>
  )
}

export default EmailSidebar