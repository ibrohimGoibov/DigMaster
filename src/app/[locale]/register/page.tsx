"use client"

import { useAuthStore } from '@/src/store/loginStore/loginStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from "sonner" // Импортируем sonner

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('male')

  const { Register, isLoading, error } = useAuthStore()
  const router = useRouter()

  const handleRegister = async () => {
    // Простая проверка перед отправкой
    if (!email || !username || !password) {
      return toast.error("Пожалуйста, заполните все поля")
    }

    const success = await Register(username, password, email, gender)
    
    if (success) {
      toast.success("Регистрация успешна!", {
        description: "Теперь вы можете войти в свой аккаунт",
      })
      router.push('/login')
    } else {
      // Ошибка из Zustand (error) уже есть, но можем продублировать тостом
      toast.error(error || "Ошибка при регистрации")
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white italic mb-2">
            Dig<span className="text-yellow-500">Master</span>
          </h1>
          <p className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
            Регистрация в системе
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-100 dark:border-slate-800">
          <div className="space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                User Name
              </label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                Пароль
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div>
               <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                Ваш пол
              </label>
              <select 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className='px-[20px] py-[10px] w-[100%] rounded-[10px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white appearance-none cursor-pointer'
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <button 
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition-colors text-lg uppercase tracking-wider shadow-lg shadow-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-slate-900 text-slate-400">или</span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-slate-600 dark:text-slate-400 text-sm">
                Уже есть аккаунт?{' '}
                <Link href="/login" className="text-yellow-500 hover:text-yellow-600 font-bold transition-colors">
                  Войти
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2026 DigMaster. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  )
}