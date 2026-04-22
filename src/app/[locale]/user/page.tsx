"use client"

import { useState, useRef, useEffect } from 'react'
import { useAuthStore } from '@/src/store/loginStore/loginStore'
import { User, LogOut, Mail, User as UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function ProfileMenu() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!isAuthenticated) {
    return (
      <Link 
        href="/login" 
        className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition-colors"
      >
        <User size={18} />
        <span>Войти</span>
      </Link>
    )
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Кнопка-иконка профиля */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
      >
        <span className="text-black font-bold text-lg">
          {user?.username?.charAt(0).toUpperCase() || 'U'}
        </span>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
          {/* Информация о пользователе */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">
                  {user?.username?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {user?.username}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {user?.email || 'email не указан'}
                </p>
              </div>
            </div>
          </div>

          {/* Пункты меню */}
          <div className="p-2">
            <button
              onClick={() => {
                setIsOpen(false)
                // Здесь можно сделать переход в личный кабинет
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <UserIcon size={18} />
              <span>Мой профиль</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false)
                // Здесь можно показать email в отдельном модальном окне
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Mail size={18} />
              <span>Мой email</span>
            </button>

            <hr className="my-2 border-slate-200 dark:border-slate-700" />

            <button
              onClick={() => {
                setIsOpen(false)
                logout()
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
            >
              <LogOut size={18} />
              <span>Выйти</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}