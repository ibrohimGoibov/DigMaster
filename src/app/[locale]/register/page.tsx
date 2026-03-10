"use client"

import { useAuthStore } from '@/src/store/loginStore/loginStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from "sonner"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('male')

  const { Register, isLoading, error } = useAuthStore()
  const router = useRouter()

  const handleRegister = async () => {
    if (!email || !username || !password) {
      return toast.error("Пожалуйста, заполните все поля")
    }

    const success = await Register(username, password, email, gender)
    
    if (success) {
      toast.success("Регистрация успешна!", {
        description: "Добро пожаловать в DigMaster!",
      })
      router.push('/login')
    } else {
      toast.error(error || "Ошибка при регистрации")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">   
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600/10 rounded-full blur-[120px]" />
      <div className="w-full max-w-[480px] z-10">
        
        <div className="text-center mb-10 group">
          <h1 className="text-6xl font-black text-slate-900 dark:text-white italic tracking-tighter transition-transform duration-500 group-hover:scale-105">
            Dig<span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Master</span>
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-yellow-500/50"></span>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">
              Создание аккаунта
            </p>
            <span className="h-[1px] w-8 bg-yellow-500/50"></span>
          </div>
        </div>

       
        <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 border border-white dark:border-slate-800/50">
          <div className="space-y-5">
            
            <div className="grid grid-cols-1 gap-5">
             
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/40 border border-transparent focus:border-yellow-500/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400/60 shadow-inner"
                />
              </div>

             
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Твой никнейм"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/40 border border-transparent focus:border-yellow-500/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400/60 shadow-inner"
                />
              </div>

             
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase">Пароль</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/40 border border-transparent focus:border-yellow-500/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400/60 shadow-inner"
                />
              </div>

             
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase">Ваш пол</label>
                <div className="relative">
                  <select 
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-100/50 dark:bg-slate-800/40 border border-transparent focus:border-yellow-500/50 outline-none transition-all appearance-none cursor-pointer text-slate-900 dark:text-white shadow-inner"
                  >
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest shadow-[0_10px_20px_rgba(234,179,8,0.3)] hover:shadow-[0_15px_25px_rgba(234,179,8,0.4)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:translate-y-0"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                   <div className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                   Загрузка...
                </span>
              ) : 'Начать работу'}
            </button>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Уже зарегистрированы?{' '}
                <Link href="/login" className="text-yellow-500 hover:text-yellow-400 font-bold underline-offset-4 hover:underline transition-all">
                  Войти в профиль
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] font-medium">
            © 2026 DigMaster Ecosystem
          </p>
        </div>
      </div>
    </div>
  )
}