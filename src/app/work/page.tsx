import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import design from '@/assets/design-1.png'
import design2 from '@/assets/design2.png'
import design3 from '@/assets/design3.png'
import design4 from '@/assets/design4.png'
import Footer from '@/components/Footer'
import footer from '@/assets/footer.png'
import pic1 from '@/assets/social/pic1.png'
import pic2 from '@/assets/social/pic2.png'
import pic3 from '@/assets/social/pic3.png'
import pic4 from '@/assets/social/pic4.png'
import pic5 from '@/assets/social/pic5.png'
import pic6 from '@/assets/social/pic6.png'

function Work() {
  return (
    <div >
        <div  className=' md:p-10'>
        <Navbar></Navbar>
        </div>
        <div>
        <div className='lg:mx-[126px] mx-[50px]'>
     <div className='flex lg:flex-row flex-col text-center mt-20'>
        <div className='w-1/6 text-left'><h1 className='font-cocosharp text-black '>Our Work</h1></div>
        <div className='lg:w-5/6 text-left'>
            <p className=' font-poppins lg:text-4xl text-xl'>Bringing brands to life through<br/> strategy, design and code</p>
        </div>
     </div>
    </div>
    <div className='md:mx-[100px] sm:mx-[50px] mx-[10px]'>
    <div className='flex flex-col items-center md:flex-row gap-[62px] mt-20'>
                <div>
                    <Image src={design} alt="" />
                    <h1 className='designH2'><span className=' font-poppins'>Glazoo</span></h1>
                    <p className='designP'><span className=' font-poppins'>The Pupillary Distance App for Quick and Accurate Eye Measurement</span></p>
                </div>
                <div>
                    <Image src={design2} alt="" />
                    <h1 className='designH2'><span className=' font-poppins'>Basically</span></h1>
                    <p className='designP'><span className=' font-poppins'>Master Fluent and Direct Speech, Minus the Fillers. 
                    Enhance your communication skills effortlessly</span></p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-[62px] mt-10'>
                <div>
                    <Image src={design3} alt="" />
                    <h1 className='designH2'><span className=' font-poppins'>Lifedata</span></h1>
                    <p className='designP'><span className=' font-poppins'>Your simple, powerful tracking and visualization tool for measuring and monitoring what matters most</span></p>
                </div>
                <div>
                    <Image src={design4} alt="" />
                    <h1 className='designH2'><span className=' font-poppins'>Digital Agency</span></h1>
                    <p className='designP'><span className=' font-poppins'>Plannerli help parents to assign a task to their children</span></p>
                </div>
            </div>
    </div>
    </div>
    <div className='mt-[204px] bg-[#F5F6F8] '>
    <div className=''>
        <div className='flex flex-row justify-between'>
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
        </div>
        </div>
  )
}

export default Work