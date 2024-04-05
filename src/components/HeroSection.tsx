


import { motion } from "framer-motion";

import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import pic1 from '@/assets/pic1.png'
import pic2 from '@/assets/pic2.png'
import pic3 from '@/assets/pic3.png'


function HeroSection() {
  return (
    <div className='flex flex-col lg:flex-row mt-8 mx-4 md:mx-0'>
    {/**   <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="cyan"
      />*/}
     
      {/** first dev*/}
      
      <div className='lg:w-1/4 lg:flex hidden lg:mt-48 mt-20 '>
        <div className='w-1/2 ml-32'>
          <div>
          <Image src={pic1} alt="" />
        </div>
        <div className='text-right'>
         <h1 className=' font-gattewaySignature  '>Usman D</h1>
         <p className=' font-poppins '>Frontend Developer</p>
        </div>
        </div>
        
      </div>

      {/** 2nd dev*/}
      <div className='  lg:w-2/4 text-center lg:py-20 md:py-10 '>
          <h1 className=' font-cocosharp text-center mt-8  lg:text-5xl text-xl sm:text-3xl '>An Trusted Partner With Unlimited Possibilities</h1>
<p className='font-poppins text-center homeP text-sm  mt-6'><span className="font-poppins">Elevating Ideas, Crafting Experiences: Where<br/> Design Meets Development!</span></p>
<button className='BtnHome mt-6 '><p className="font-poppins">Hire Us</p></button>
        </div>
     


       {/** 3rd dev*/}
      <div className='lg:w-1/4 w-auto flex lg:flex-col flex-row mx-auto sm:gap-10 gap-6  mb-5  '>
        <div className="items-center lg:ml-24 mt-8">
          <div className='lg:w-3/4 text-right'>
          <Image src={pic2} alt="" className='sm:w-[170px] w-[120px]' />
         <h1 className=' font-gattewaySignature '>Usman D</h1>
         <p className=' font-poppins'>Frontend Developer</p>
        </div>
        </div>

        <div className='lg:-ml-16 lg:mt-12 mt-8'>
          <div className='lg:w-[170px] sm:w-[170px] w-[120px] '>
          <Image src={pic3} alt="" className='lg:w-[170px] sm:w-[170px] w-[120px]' />
          <div className='text-right'>
         <h1 className=' font-gattewaySignature'>Usman D</h1>
         <p className='font-poppins'>Frontend Developer</p>
        </div>
        </div>
        </div>
      </div>  

    
   

    </div>



   /* <div className="text-center h-auto md:h-[40rem] w-full  rounded-md flex flex-col  justify-center 
    relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 w-full text-center relative z-10'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold
             bg-gradient-to-b from-neutral-50 to-neutral-400
             bg-clip-text text-transparent'>Master The Art Of Programing</h1>
            <p className='mt-4 font-normal text-base md:text-lg 
            text-neutral-300 max-w-lg mx-auto'>We are expert in programing web development
                 flutter app development and graphics designing and some other courses.
                 So for more details visit our website to make your self skilled. </p>
            <div className='mt-4'>
                <Link href={"courses"}>
                <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore more
      </Button>
                </Link>
            </div>
        </div>
        </div>*/
  )
}

export default HeroSection