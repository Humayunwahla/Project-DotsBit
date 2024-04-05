import React from 'react'
import pic1 from '../assets/team/pic1.png'
import pic2 from '../assets/team/pic2.png'
import Image from 'next/image'

function Team() {
  return (
    <div className='lg:mx-[126px] mx-[50px]'>
        <div className='flex flex-col lg:flex-row text-center mt-20'>
        <div className='w-1/6 text-left'><h1 className=' aboutH'><p className='font-cocosharp'>Our Team</p></h1></div>
        <div className='lg:w-5/6 text-left mt-6 lg:mt-0'>
            <p className='font-poppins text-xl'>We are a diverse creative bunch who are proud of our work, bringing projects to life, and enjoying the clients we work with.</p>
        </div>
     </div>
     <div className='gap-8'>
     <div className=' mt-10'>
        <div className='flex flex-col items-center lg:flex-row '>
            <div className='flex flex-col md:flex-row'>
            <div className='teamBox '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
            <div className='teamBox '>
                <Image src={pic1} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Kamilah Marie </h1>
                <p className='teamP mt-1 ml-[32px]'>Creative Manager</p>
            </div>
            </div>
            <div className='flex flex-col md:flex-row'>
            <div className='teamBox  '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
            <div className='teamBox '>
                <Image src={pic1} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Kamilah Marie </h1>
                <p className='teamP mt-1 ml-[32px]'>Creative Manager</p>
            </div>
            </div>
            <div className='teamBox md:hidden xl:block '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
        </div>
         </div>



        <div className=' mt-2'>
        <div className='flex flex-col items-center lg:flex-row'>
            <div className='flex flex-col md:flex-row'>
        <div className='teamBox '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
            <div className='teamBox '>
                <Image src={pic1} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Kamilah Marie </h1>
                <p className='teamP mt-1 ml-[32px]'>Creative Manager</p>
            </div>
            </div>
            <div className='flex flex-col md:flex-row'>
            <div className='teamBox '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
            <div className='teamBox '>
                <Image src={pic1} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Kamilah Marie </h1>
                <p className='teamP mt-1 ml-[32px]'>Creative Manager</p>
            </div>
            </div>
            <div className='teamBox md:hidden xl:block '>
                <Image src={pic2} alt=""  className='ml-[24px] mt-9'/>
                <h1 className='teamH mt-1 ml-[32px]'>Jamilah Delgado</h1>
                <p className='teamP mt-1 ml-[32px]'>Chief Operating Officer</p>
            </div>
        </div> 
        </div>
     </div>


    </div>
  )
}

export default Team