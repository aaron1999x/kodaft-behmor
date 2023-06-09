import React from 'react'
import {CiCoffeeBean} from 'react-icons/ci'

const EmailSidebarMobile = () => {
  return (
    <div className='lg:hidden flex items-center justify-center'>
      <div className=' h-[1px] w-[50px] bg-dullgold me-3'></div>
      <a className='flex items-center gap-2 text-dullgold tracking-wider' href="mailto:hello@kodaft.com"><CiCoffeeBean />hello@kodaft.com</a>
      <div className=' h-[1px] w-[50px] bg-dullgold ml-3'></div>
    </div>
  )
}

export default EmailSidebarMobile