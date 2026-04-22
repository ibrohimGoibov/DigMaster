import React from 'react'
import img from '@/public/image copy 4.png'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
        
        <div className="shrink-0 w-full md:w-auto overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:scale-[1.02] group">
          <div className="relative w-full max-w-[500px] mx-auto md:mx-0">
            <Image 
              src={img} 
              alt='Feature illustration' 
              width={900} 
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-6 w-full text-center md:text-left">
          <div className="space-y-3">
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight'>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Lorem 
              </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent ml-2">
                Ipsum
              </span>
            </h1>
            
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto md:mx-0" />
          </div>
          
          <p className='max-w-[450px] mx-auto md:mx-0 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestiae quae, ipsam officia eaque reprehenderit architecto 
            doloremque accusantium itaque cum nesciunt.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a href="https://wa.me/918243320" className="p-2 bg-gray-800 rounded-full hover:text-green-500 hover:bg-gray-700 transition-all flex items-center gap-2 px-4">
            <button className='w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-green-500/25 dark:shadow-green-500/20'>
              Get Started
            </button>
            </a>
            <Link href={'/exkavator'}>
            <button className='w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-semibold rounded-xl transition-all duration-300 active:scale-95'>
              Reject
            </button>
            </Link>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Join thousands of satisfied users ✨
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page