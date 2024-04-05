import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HoverCard from "@/components/HoverCard";
import MovingSlider from "@/components/MovingSlider";
import Navbar from "@/components/Navbar";
import WavyBackgroundDom from "@/components/WavyBackgroundDom";
import WhyChose from "@/components/WhyChose";
import background from '@/assets/Background-4.png'
import Image from "next/image";
import Rating from "@/components/Rating";
import About from "@/components/About";
import Design from "@/components/Design";
import Service from "@/components/Service";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";



export default function Home() {
  return (
    <main className="">
      
  <div className="Background3 md:p-10 ">
    
  <Navbar />
  <HeroSection/>
 
  </div>
  <Rating/>
  <About/>
  <Design/>
  <Service/>
  <Expertise/>
  
  <Team/>
  <Testimonial/>
  <Footer/>

  
  </main>
  );
}
