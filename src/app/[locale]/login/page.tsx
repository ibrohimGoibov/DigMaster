"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/src/store/loginStore/loginStore'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useAuthStore()
  const router = useRouter()


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    
  
    const success = await login(username, password)
    
    if (success) {
    
      router.push('/') 
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
            Вход в личный кабинет
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-100 dark:border-slate-800">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                Username
              </label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ваш логин"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                Пароль
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-bold text-center bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-yellow-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Запомнить меня</span>
              </label>
              <a href="#" className="text-sm text-yellow-500 hover:text-yellow-600 font-bold transition-colors">
                Забыли пароль?
              </a>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-slate-400 text-black font-bold py-4 rounded-xl transition-colors text-lg uppercase tracking-wider shadow-lg shadow-yellow-500/30"
            >
              {isLoading ? 'Загрузка...' : 'Войти'}
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
                Нет аккаунта?{' '}
                <Link href="/register" className="text-yellow-500 hover:text-yellow-600 font-bold transition-colors">
                  Зарегистрироваться
                </Link>
              </span>
            </div>
          </form>
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