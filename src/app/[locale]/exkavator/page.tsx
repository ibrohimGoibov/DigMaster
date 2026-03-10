'use client'
import { axiosRequest } from '@/utils/axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import img from '@/public/image copy 3.png'
import Image from 'next/image';
const page = () => {
    const [data, setData] = useState([]);
    async function getExkavator() {
        try {
            let {data} = await axiosRequest.get(`/exkavator`)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getExkavator();
    }, [])
  return (
    <div>
        <div className="flex items-start ml-[40px] justify-start gap-[80px] p-[30px]">
            <div className="num1">
                <p className='text-[20px] mt-[20px]'>Model</p>
                <p className='text-[20px] mt-[20px]'>Weight</p>
                <p className='text-[20px] mt-[20px]'>Gusnichniy</p>
                <p className='text-[20px] mt-[20px]'>Kolyosniy</p>
            </div>
            <div className="flex items-center gap-[30px] border hover:bg-gray-800 transition rounded-[20px]">
                <div className="card">
                    <Image src={img} alt='' width={400} className='rounded-[20px] hover:' />
                    <div className="txt p-[20px]">
                        <h1 className='flex items-center text-[20px] gap-[20px] mt-[10px]'>Model: <h1>Volvo</h1></h1>
                        <p className='flex items-center  text-[20px] gap-[20px] mt-[10px]'>Size: <p>400h</p></p>
                        <p className='flex items-center  text-[20px] gap-[20px] mt-[10px]'>Status: <p className='text-blue-600'>Active</p></p>
                        <button className='text-[20px] w-[100%] py-[10px] bg-yellow-600 rounded-[10px] mt-[20px] hover:bg-yellow-700 transition'>Rent Exkavator</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page