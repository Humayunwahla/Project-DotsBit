import React from 'react'
import pic1 from '../assets/testimonial/pic1.png'
import play from '../assets/testimonial/play.png'
import Image from 'next/image'

function Testimonial() {
  return (
    <div className='bg-[#F5F6F8] mt-16 '>
       
    <div className='flex flex-col lg:flex-row text-center lg:mx-[126px] mx-[50px] gap-8 '>
<div className='w-1/6 text-left'><h1 className=' aboutH mt-24'><p className='font-cocosharp'>Testimonials</p></h1></div>
<div className='lg:w-5/6 text-left'>
    <p className=' font-poppins text-xl lg:mt-24 mt-10'> Our work spans a range of sectors and disciplines and we bring this widespread experience to the table with every project</p>
</div>
</div>

<div className='mt-28  mx-auto  justify-center  '>

    <div className='flex flex-col mb-10 xl:mx-[60px] mx-[50px] gap-8 items-center xl:flex-row  '>
        <div className='flex flex-col md:flex-row gap-8 md:mb-10'>
        <div className='testimonialBox'>
            <div className=''>
               <p className='font-poppins'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris”</p>
         <div className='flex flex-row mt-52 ml-5 gap-2'>
         <div>
            <Image src={pic1} alt="" />
         </div>
         
         <div className=' '>
            <h1 className='testimonialH'>John Doe</h1>
            <p className='testimonialP'>Company Name</p>
         </div>
         </div>
         </div>
        </div>

        <div className='testimonialBox xl:-translate-y-9'>
            <div className=''>
            <p className='font-poppins'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris”</p>
         <div className='flex flex-row mt-52 ml-5 gap-2'>
         <div>
            <Image src={pic1} alt="" />
         </div>
         
         <div className=' '>
            <h1 className='testimonialH'>John Doe</h1>
            <p className='testimonialP'>Company Name</p>
         </div>
         </div>
         </div>
        </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 mb-10'>

        <div className='testimonialBox testiBg'>
            <div className=''>
                <div className='mx-24 mt-48'>
                    <Image src={play} alt=""  className=''/>
                </div>
         <div className='flex flex-row mt-32 ml-5 gap-2'>
         <div>
            <Image src={pic1} alt="" />
         </div>
         
         <div className=' '>
            <h1 className='testimonialH'>John Doe</h1>
            <p className='testimonialP'>Company Name</p>
         </div>
         </div>
         </div>
        </div>

        <div className='testimonialBox xl:-translate-y-9'>
            <div className=''>
            <p className='font-poppins'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris”</p>
         <div className='flex flex-row mt-52 ml-5 gap-2'>
         <div>
            <Image src={pic1} alt="" />
         </div>
         
         <div className=' '>
            <h1 className='testimonialH'>John Doe</h1>
            <p className='testimonialP'>Company Name</p>
         </div>
         </div>
         </div>
        </div>
        </div>
    </div>


</div>
</div>
  )
}

export default Testimonial