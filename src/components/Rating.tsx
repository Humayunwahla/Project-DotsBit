
import React from 'react'

function Rating() {
  return (
    <div className='rate flex sm:flex-row flex-col  md:gap-[180px] gap-[80px] justify-center mt-0 '>
        <div className='flex lg:flex-row flex-col md:gap-[180px] gap-[80px] md:my-[69px] my-[20px]'>
        <div className='font-popp text-center'>
<h2 className='rating'>20+</h2>
<p className=' font-poppins text-white text-xl'>Experts</p>
        </div>
        <div className='font-popp text-center '>
<h2 className='rating'>300+</h2>
<p className=' font-poppins text-white text-xl'>Happy Clients</p>
        </div>
        </div>
        <div className='flex lg:flex-row flex-col md:gap-[180px] gap-[80px] md:my-[69px] my-[20px]'>
        <div className='font-popp text-center '>
<h2 className='rating'>20</h2>
<p className=' font-poppins text-white text-xl'>Years on the market</p>
        </div>
        <div className='text-center '>
<h2 className='rating'>500+</h2>
<p className=' font-poppins text-white text-xl'>Products made</p>
        </div>
        </div>
         
    </div>
  )
}

export default Rating