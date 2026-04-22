'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import img from '@/public/01F6B0EC-0DCB-4453-82CD-0CA01F87F162.png';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link'; 
import { Menu, User, LogOut, Mail, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '@/src/store/loginStore/loginStore';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale(); 
  const t = useTranslations('Navbar');
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const navLinks = [
    { href: `/${locale}/fleet`, label: t('fleet') },   
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contacts`, label: t('contacts') },
    { href: `/${locale}/exkavator`, label: t('excavator') }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between w-[90%] m-auto py-3">
        <Link href={`/${locale}`} className="hover:opacity-80 transition">
          <Image src={img} alt='Logo' width={100} />
        </Link>
        
        <div className="hidden lg:flex items-center gap-[25px] text-[15px] font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-yellow-500 dark:text-gray-200 dark:hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[15px]">
        
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-yellow-500/10 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full transition-all outline-none group">
              <Globe size={16} className="text-slate-500 group-hover:text-yellow-500 transition-colors" />
              <span className="text-xs font-bold uppercase tracking-wider">{locale}</span>
              <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-2xl p-2 min-w-[120px] shadow-2xl">
              {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'ru', label: 'Русский', flag: '🇷🇺' },
                { code: 'tj', label: 'Тоҷикӣ', flag: '🇹🇯' },
                { code: 'ch', label: '中文', flag: '🇨🇳' }
              ].map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                    locale === lang.code 
                      ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-sm font-medium">{lang.label}</span>
                  <span className="text-base">{lang.flag}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        
          <div className="hidden sm:block">
            <AnimatedThemeToggler />
          </div>

          {/* ПРОФИЛЬ МЕНЮ - ВМЕСТО КНОПКИ ЛОГИНА */}
          <div className="relative" ref={profileMenuRef}>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-center w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
                >
                  <span className="text-black font-bold text-lg">
                    {user?.username?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </button>

                {/* Выпадающее меню профиля */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
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

                    <div className="p-2">
                      <Link
                        href={`/${locale}/user`}
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                      >
                        <UserIcon size={18} />
                        <span>Мой профиль</span>
                      </Link>

                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          // Показать email в алерте или модалке
                          alert(`Email: ${user?.email || 'не указан'}`);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                      >
                        <Mail size={18} />
                        <span>Мой email</span>
                      </button>

                      <hr className="my-2 border-slate-200 dark:border-slate-700" />

                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          logout();
                          router.push(`/${locale}/login`);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Выйти</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link 
                href={`/${locale}/login`}
                className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition-colors text-sm"
              >
                {t('login')}
              </Link>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <AnimatedThemeToggler />
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 outline-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-l border-white/10">
                <div className="flex flex-col gap-5 mt-12 p-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className="text-[18px] font-semibold hover:text-yellow-500 transition-colors border-b border-gray-100 dark:border-gray-800 pb-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Page;