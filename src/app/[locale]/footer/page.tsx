import React from 'react'
import { Instagram, Youtube, Send, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 bg-gray-900 dark:bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-3xl font-bold tracking-tighter">
            <span className="text-yellow-500">Dig</span>
            <span className="text-white">Master</span>
          </div>

          <div className="flex gap-5">
            <a href="https://t.me/+qkxzlRgpXKVkNzc6" className="p-2 bg-gray-800 rounded-full hover:text-blue-400 hover:bg-gray-700 transition-all">
              <Send size={20} />
            </a>
            <a href="https://www.instagram.com/digmaster2026/" className="p-2 bg-gray-800 rounded-full hover:text-pink-500 hover:bg-gray-700 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:text-red-500 hover:bg-gray-700 transition-all">
              <Youtube size={20} />
            </a>
            <a href="https://wa.me/918243320" className="p-2 bg-gray-800 rounded-full hover:text-green-500 hover:bg-gray-700 transition-all flex items-center gap-2 px-4">
              <Phone size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            © 2024 <span className="text-white font-semibold">DigMaster</span>. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Support</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer