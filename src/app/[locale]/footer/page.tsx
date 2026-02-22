import React from 'react'

const page = () => {
  return (
    <div>
        <footer className="w-full py-8 px-6 bg-gray-900 dark:bg-black text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-500">Dig</span>
            <span className="text-white">Master</span>
          </div>
          <div className="text-sm">
            © 2024 DigMaster. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page