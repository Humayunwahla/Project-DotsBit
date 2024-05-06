'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import design from '../assets/design-1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'
import design4 from '../assets/design4.png'
import Link from 'next/link'
import {db} from "@/app/firebaseConfig"
import {collection, getDocs} from "firebase/firestore"
import {getStorage} from "firebase/storage"


async function fetchDataFromFirestore(){
const querySnapshot = await getDocs(collection(db, "projects"))
const data: { id: string }[] = [];
querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()});
});
return data;
};

function Design() {
    const [userData, setUserdata]= useState<any[]>([]);
    useEffect(()=>{
        async function fetchData(){
            const data =await fetchDataFromFirestore();
            setUserdata(data);
        }fetchData()    
    },[])
  return (
    <div className='bg-[#F5F6F8] mt-10  py-4 '>
        <div className='md:mx-[125px] sm:mx-[50px] mx-[10px]' >
            <div className=''>
                <h1 className='sm:designH  text-center lg:text-left md:text-6xl text-4xl'><p className='font-cocosharp mt-10'>Designing Dreams, <br/>Developing Realities</p></h1>
            </div>
            <div className=' grid grid-cols-1 justify-items-center md:grid-cols-2 items-center  grid-flow-row gap-[62px] mt-20'>
                {userData.map((user)=>(
                    <div key={user.id} className='flex flex-col' >
                    <Image src={user.thumbnail} width={1000} height={1000} alt="" className='rounded-xl'  />
                    <h1 className='designH2'><span className=' font-poppins'>{user.name}</span></h1>
                    <p className=' text-md'><span className=' font-poppins'>{user.description}</span></p>
                </div>
                ))}
                
                
            </div>



          
           <div className='text-center my-[40px] '>
           <Link href={"/work"}> <button className='designBtn  mb-8'>
           <p className='font-poppins text-white'> Explore more </p>
            </button></Link>
           </div>
       </div>
    </div>
  )
}

export default Design