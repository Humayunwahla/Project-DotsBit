import React from 'react'
import Image from 'next/image'
import footer from '../assets/footer.png'
import pic1 from '../assets/social/pic1.png'
import pic2 from '../assets/social/pic2.png'
import pic3 from '../assets/social/pic3.png'
import pic4 from '../assets/social/pic4.png'
import pic5 from '../assets/social/pic5.png'
import pic6 from '../assets/social/pic6.png'

function Footer() {
  return (
    <div className='md:mx-[50px]  mx-[10px] my-[55px]'>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col md:flex-row gap-[40px]'>
             <div>
                <Image src={footer} alt="" />
                </div> 
                <div className=''>
                <h1 className='footerH'>Enough about us,<br/> let’s talk about you</h1>
                <p className='footerP mt-[30px]'>Every new project starts with a<br/> conversation so let’s grab a coffee<br/> and chat</p>
                </div>
        </div>
        <div>
         <button className='footerBtn hidden sm:block'><p className='NavBtnCont text-white '>Let’s Talk</p></button>
        </div>
        </div>

        <div className='mt-[114px] flex flex-col items-center xl:flex-row justify-between gap-10'>
            <div className=' footerF  flex flex-row sm:gap-[60px] gap-[15px]  xl:text-2xl lg:text-xl sm:text-sm text-[12px] text-center '>
             <div>
                <h1 className='font-poppins'>©BITDOT</h1>
                <p className='font-poppins'>Privacy policy</p>
             </div>
             <div>
                <h1 className='font-poppins'>Email</h1>
                <p className='font-poppins'>hello@bitdol.com</p>
             </div>
             <div>
                <h1 className='font-poppins'>Pakistan</h1>
                <p className='font-poppins'>05444685464</p>
             </div>
            </div>
            <div>
                <ul className='flex flex-row gap-[20px]'>
                    <li><Image src={pic1} alt="" /></li>
                    <li><Image src={pic2} alt="" /></li>
                    <li><Image src={pic3} alt="" /></li>
                    <li><Image src={pic4} alt="" /></li>
                    <li><Image src={pic5} alt="" /></li>
                    <li><Image src={pic6} alt="" /></li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer