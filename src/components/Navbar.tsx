"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100"
});

function Navbar() {
  const navItem=[
    {link:"Home",path:"/"},
    {link:"Work",path:"work"},
    {link:"About",path:"about"},
    {link:"Approach",path:"approach"},
]
 //   const [active, setActive] = useState<string | null>(null);
// navbar parameter { className }: { className?: string }
  return (
    <div className='flex  sm:flex-row sm:justify-between justify-center  '>
    <div className='logo1 items-center mt-8 lg:mt-0'>
    </div>
    <div className='flex flex-row space-x-5  sm:mt-0'>
        <div className=''>
          
            <ul className='lg:flex hidden gap-12 text-center font-poppins '>
                {navItem.map(({link,path})=><a key={link} href={path} className='NavbarContent font-poppins  block mt-3'><p className=" font-poppins">{link}</p></a>)}
            </ul>
            
            </div>
            <div className='mt-8 lg:mt-0'>
               <Link href={"/Touch"}> <button className='NavBtn sm:flex sm:items-center sm:justify-center hidden'>
                   <p className='NavBtnCont '><span className=" font-poppins">Schedule a Meeting</span></p>
                </button></Link>
            </div>
        
    </div>
</div>

  /*  <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <div className="flex flex-row">
            <MenuItem setActive={setActive} active={active} item="Home">
           
             </MenuItem>

             </div>
            </Link>
            <Link href={"courses"}>
             <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
             </MenuItem>
             </Link>
            <Link href={"contact"}>
             <MenuItem setActive={setActive} active={active} item="Contact us">
            
             </MenuItem>
             </Link>
        </Menu>
        </div>*/
  )
}

export default Navbar