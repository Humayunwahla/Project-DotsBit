import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import servicepage from '@/assets/servicepage.png'
import life1 from '@/assets/life1.png'
import life2 from '@/assets/life2.png'
import life3 from '@/assets/life3.png'
import job1 from '@/assets/job1.png'
import job2 from '@/assets/job2.png'
import job3 from '@/assets/job3.png'
import footer from '@/assets/footer.png'
import pic1 from '@/assets/social/pic1.png'
import pic2 from '@/assets/social/pic2.png'
import pic3 from '@/assets/social/pic3.png'
import pic4 from '@/assets/social/pic4.png'
import pic5 from '@/assets/social/pic5.png'
import pic6 from '@/assets/social/pic6.png'

function Servi() {
  return (
    <div>
        <div className=' p-10'><Navbar></Navbar></div>
        <div className='  px-10'><Image src={servicepage} alt="" /></div>
        <div>
        <div className='  lg:mx-[126px] mx-[50px]'>
     <div className='flex lg:flex-row flex-col text-center mt-20 gap-10 lg:gap-[214px]'>
        <div className='w-2/6 text-left '>
        <h1 className=' serviH'><p className=' font-cocosharp'>Services included</p></h1>
        <p className='serviP mt-[18px]'>Branding & Logo<br/> 
Design Illustration<br/> 
Mobile App developement</p>
        </div>
        <div className='lg:w-5/6 text-left gap-[12px]'>
            <p className=' font-poppins text-xl'>We worked with this London-based client to create a distinctive<br/>
             mobile app to the ground up.</p>
             <p className=' font-poppins text-xl mt-5'>Starting with their new clean and minimal illustrations that<br/>
              focuses on raising personal brands to their slick new app<br/> designed to powerful tracking and visualization</p>
        </div>
     </div>
    </div>
        </div>
        <div className='bg-[#F5F6F8] sm:mx-[64px] mx-[20px] mt-10'>
             <div className='md:mx-[130px] flex flex-col items-center  lg:flex-row gap-10 lg:gap-[104px]'>
                <div>
                    <Image src={life1} alt="" className='justify-end mt-[165px]' />
                </div>
                <div>
                    <Image src={life3} alt="" className='lg:-mt-20' />
                </div>
                <div>
                    <Image src={life2} alt="" className='justify-end lg:mt-[165px]' />
                </div>

             </div>
        </div>
        <div className='mt-[97px]'>
            <h1 className='serviJob'>DotsBit job by a dotsbit team! Thank you for all your<br/> support. Best in the business.</h1>
        </div>

        <div className=' sm:mx-[64px] mx-[20px] mt-10'>
             <div className=' flex flex-col items-center  lg:flex-row gap-10 lg:gap-[43px]'>
                <div className=' bg-[#4AB9BB]  '>
                    <div className='mx-[66px] flex flex-col lg:flex-row gap-[96px]'>
                <div>
                    <Image src={job1} alt="" className='justify-end mt-[165px]' />
                </div>
                <div>
                    <Image src={job2} alt="" className='' />
                </div>
                </div>
                </div>
                <div className='bg-[#F5F6F8] hidden sm:block'>
                <div className='mx-[101px]'>
                    <Image src={job3} alt="" className='justify-end lg:mt-[165px]' />
                </div>
                </div>

             </div>
        </div>
        <div className='  lg:mx-[126px] mx-[50px]'>
     <div className='flex lg:flex-row flex-col text-center mt-[130px] gap-10 lg:gap-[214px]'>
        <div className='w-2/6 text-left '>
        <h1 className=' serviH'><p className=' font-cocosharp'>Technology we used</p></h1>
        <p className='serviP mt-[18px]'>Figma<br/> 
        Flutter<br/> 
        Andriod<br/>IOS</p>
        </div>
        <div className='lg:w-5/6 text-left gap-[12px]'>
            <p className=' font-poppins text-xl'>We used the technology as per either your preference or your<br/>
             budget but something is constant in it, Quality.</p>
             <p className=' font-poppins text-xl mt-[18px]'>We give your brand substance and take it to the next level<br/>
              through creative strategy, compelling design and code.</p>
        </div>
     </div>
    </div>
    {/**Footer section */}
    <div>
        <div className=' bg-[#F5F6F8] mt-[169px]  '>
    <div className=''>
        <div className='flex  flex-row  justify-between'>
        <div className='flex flex-col md:flex-row gap-[40px] mt-16'>
             <div>
                <Image src={footer} alt="" />
                </div> 
                <div className=''>
                <h1 className='footerH'>Enough about us,<br/> let’s talk about you</h1>
                <p className='footerP mt-[30px]'>Every new project starts with a<br/> conversation so let’s grab a coffee<br/> and chat</p>
                </div>
        </div>
        <div className='mt-16'>
         <button className='footerBtn hidden sm:block'><p className='NavBtnCont text-white '>Let’s Talk</p></button>
        </div>
        </div>

        <div className='mt-[114px] flex flex-col items-center xl:flex-row justify-between gap-10'>
            <div className=' footerF  flex flex-row sm:gap-[60px] gap-[15px]  xl:text-2xl lg:text-xl sm:text-sm text-[12px] text-center '>
             <div>
                <h1 className='font-popp'>©BITDOT</h1>
                <p className='font-popp'>Privacy policy</p>
             </div>
             <div>
                <h1 className='font-popp'>Email</h1>
                <p className='font-popp'>hello@bitdol.com</p>
             </div>
             <div>
                <h1 className='font-popp'>Pakistan</h1>
                <p className='font-popp'>05444685464</p>
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
        </div>
        </div>
        {/**Footer section end */}
        </div>
  )
}

export default Servi