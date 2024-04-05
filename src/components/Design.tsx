import React from 'react'
import Image from 'next/image'
import design from '../assets/design-1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'
import design4 from '../assets/design4.png'
import Link from 'next/link'

function Design() {
  return (
    <div className='bg-[#F5F6F8] mt-10  py-4 '>
        <div className='md:mx-[125px] sm:mx-[50px] mx-[10px]' >
            <div className=''>
                <h1 className='sm:designH  text-center lg:text-left md:text-6xl text-4xl'><p className='font-cocosharp mt-10'>Designing Dreams, <br/>Developing Realities</p></h1>
            </div>
            <div className='flex flex-col md:flex-row gap-[62px] mt-20'>
                <div>
                    <Image src={design} alt="" />
                    <h1 className='designH2'>Glazoo</h1>
                    <p className='designP'>The Pupillary Distance App for Quick and Accurate Eye Measurement</p>
                </div>
                <div>
                    <Image src={design2} alt=""  />
                    <h1 className='designH2'>Basically</h1>
                    <p className='designP'>Master Fluent and Direct Speech, Minus the Fillers. 
                    Enhance your communication skills effortlessly</p>
                </div>
            </div>



            <div className='flex flex-col md:flex-row gap-[62px] mt-10'>
                <div>
                    <Image src={design3} alt="" />
                    <h1 className='designH2'>Lifedata</h1>
                    <p className='designP'>Your simple, powerful tracking and visualization tool for measuring and monitoring what matters most</p>
                </div>
                <div>
                    <Image src={design4} alt="" />
                    <h1 className='designH2'>Digital Agency</h1>
                    <p className='designP'>Plannerli help parents to assign a task to their children</p>
                </div>
            </div>
           <div className='text-center my-[40px] '>
           <Link href={"/work"}> <button className='designBtn  mb-8'>
           <p className='font-poppins'> Explore more</p>
            </button></Link>
           </div>
       </div>
    </div>
  )
}

export default Design