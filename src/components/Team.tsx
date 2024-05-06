'use client'
import React,{useState,useEffect} from 'react'
import pic1 from '../assets/team/pic1.png'
import pic2 from '../assets/team/pic2.png'
import Image from 'next/image'

import {db} from "@/app/firebaseConfig"
import {collection, getDocs} from "firebase/firestore"

async function fetchDataFrom(){
    const querySnapshot = await getDocs(collection(db, "users"))
    const data: { id: string }[] = [];
    querySnapshot.forEach((doc)=>{
        data.push({id: doc.id, ...doc.data()});
    });
    return data;
    };

function Team() {
    const [userData, setUserdata]= useState<any[]>([]);
    useEffect(()=>{
        async function fetch(){
            const data =await fetchDataFrom();
            setUserdata(data);
        }fetch()    
    },[])
  return (
    <div className='lg:mx-[126px] mx-[50px]'>
        <div className='flex flex-col lg:flex-row  items-center mt-20'>
        <div className='w-1/6 text-left'><h1 className=' aboutH'><p className='font-cocosharp'>Our Team</p></h1></div>
        <div className='lg:w-5/6 text-left mt-6 lg:mt-0'>
            <p className='font-poppins text-xl'>We are a diverse creative bunch who are proud of our work, bringing projects to life, and enjoying the clients we work with.</p>
        </div>
     </div>
     
            <div className='mt-12 grid lg:grid-cols-4 justify-items-center sm:grid-cols-2 grid-cols-1 grid-flow-row gap-24 '>
             {userData.map((user)=>( 
                 <div key={user.id} className='teamBox '>
               {user.image? <Image src={user.image} width={1000} height={1000} alt="" className='rounded'  />:null}
                <h1 className='teamH mt-1 '>{user.displayName}</h1>
                <p className='teamP mt-1 '>{user.skill}</p>
            </div>
))}
           
             </div>
            
         </div>
  )
}

export default Team