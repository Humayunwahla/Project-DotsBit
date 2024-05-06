import React from 'react'
import mobileapp from '../assets/mobileapp.png'
import webapp from '../assets/webapp.png'
import uiux from '../assets/uiux.png'
import customsoftware from '../assets/customsoftware.png'
import mvpdev from '../assets/mvpdev.png'
import consultancy from '../assets/consultancy.png'
import Image from 'next/image'
import Link from 'next/link'

function Service() {
  return (
    <div className=' lg:mx-[126px] mx-[50px] '>
        <div className='flex flex-col lg:flex-row text-center mt-20'>
        <div className='lg:w-1/6 lg:text-left text-center'><h1 className='font-coco aboutH'><Link href={"/services"}><p className='font-cocosharp'>Services</p></Link></h1></div>
        <div className='lg:w-5/6 text-left mt-6 lg:mt-0'>
            <p className=' font-poppins text-xl text-left '>We’re a hard working, honest team of skilled designers and developers bringing clarity to brands and adding value to their marketing</p>
        </div>
     </div>
     <div className=' mt-10'>
        <div className=' justify-center flex flex-col md:flex-row 2xl:gap-24 gap-8 items-center '>
            <div className='serviceBox justify-items-center 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px]'>
                <Image src={mobileapp} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>Mobile App <br/>Development</h1>
                <p className='serviceP mt-[16px] ml-[32px]'>Transforming ideas into <br/>pocket-sized realities.</p>
            </div>
            <div className='serviceBox 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px] '>
                <Image src={webapp} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>Web App <br/>Development </h1>
                <p className='serviceP mt-[16px] ml-[32px]'>Crafting digital <br/>experiences through code.</p>
            </div>
            <div className='serviceBox 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px]  md:hidden xl:block '>
                <Image src={uiux} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>UI/UX Mobile  <br/>App design</h1>
                <p className='serviceP mt-[16px] ml-[32px]'>Designing pathways of <br/>touchpoints meet digital<br/>brilliance</p>
            </div>
        </div> </div>



        <div className=' mt-10'>
        <div className='justify-center flex flex-col  md:flex-row 2xl:gap-24 gap-8 items-center'>
            <div className='serviceBox 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px] '>
                <Image src={customsoftware} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>Custom Software <br/>Development</h1>
                <p className='serviceP mt-[16px] ml-[32px]'>Shaping efficient tools for <br/>diverse business <br/>landscapes</p>
            </div>
            <div className='serviceBox 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px]'>
                <Image src={mvpdev} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>MVP  <br/>Development</h1>
                <p className='serviceP mt-[16px] ml-[32px]'>Paving the way for iterative <br/>growth and user-driven <br/>refinement</p>
            </div>
            <div className='serviceBox 2xl:w-[480px] sm:w-[272px] w-[250px] h-[336px]  md:hidden xl:block '>
                <Image src={consultancy} alt=""  className='ml-[24px] mt-[42px]'/>
                <h1 className='serviceH mt-[35px] ml-[32px]'>Consultancy</h1>
                <p className='serviceP mt-[16px] ml-[32px]'>strategic direction and <br/>solutions to empower <br/>informed decisions</p>
            </div>
        </div> </div>



    </div>
  )
}

export default Service