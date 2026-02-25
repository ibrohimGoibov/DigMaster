"use client"

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Clock,
  MapPin,
  Trophy,
  Wrench,
  Star,
  Target,
  Heart,
  Truck,
  HardHat,
  Award,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react"

export default function AboutPage() {
  const t = useTranslations('About')
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/image.png"
            alt="DigMaster heavy equipment"
            fill 
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="bg-yellow-500 text-black px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
              {t('heroBadge')}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
            Dig<span className="text-yellow-500">Master</span>
          </h1>
          <p className="text-yellow-500 text-sm sm:text-base md:text-xl lg:text-3xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mt-3 sm:mt-4 md:mt-6 drop-shadow-lg">
            {t('heroTagline')}
          </p>
          <div className="w-12 sm:w-16 md:w-24 h-0.5 sm:h-0.5 md:h-1 bg-yellow-500 mx-auto mt-4 sm:mt-6 md:mt-8"></div>
        </div>
        
        <div className="hidden lg:block absolute bottom-10 left-10 text-yellow-500/20 text-9xl font-black rotate-12 select-none">
          EXCAVATOR
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-28 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {[
            { label: { mobile: t('stats.years.short'), desktop: t('stats.years.full') }, value: "12+", icon: Trophy },
            { label: { mobile: t('stats.projects.short'), desktop: t('stats.projects.full') }, value: "580+", icon: Target },
            { label: { mobile: t('stats.units.short'), desktop: t('stats.units.full') }, value: "14", icon: Truck },
            { label: { mobile: t('stats.clients.short'), desktop: t('stats.clients.full') }, value: "490+", icon: Heart },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="group bg-white dark:bg-slate-900 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl border-2 border-transparent hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                  <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 bg-yellow-500 rounded-lg sm:rounded-xl text-black group-hover:scale-110 transition-transform">
                    <Icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-yellow-500">{stat.value}</div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
                  <span className="hidden sm:inline">{stat.label.desktop}</span>
                  <span className="sm:hidden">{stat.label.mobile}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div>
            <span className="text-yellow-500 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">{t('aboutLabel')}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white leading-tight mt-2 sm:mt-3 md:mt-4">
              {t('aboutTitle1')} <br className="hidden sm:block" /> 
              <span className="text-yellow-500 relative">
                {t('aboutTitle2')}
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M0 0 L300 12" stroke="currentColor" strokeWidth="4" className="text-yellow-500"/>
                </svg>
              </span>
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="text-yellow-500 font-bold text-lg sm:text-xl md:text-2xl">«</span>
            {t('aboutText')}
            <span className="text-yellow-500 font-bold text-lg sm:text-xl md:text-2xl">»</span>
          </p>
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4 bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-base sm:text-lg md:text-xl font-bold dark:text-white mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              {t('advantagesTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                t('advList.1'),
                t('advList.2'),
                t('advList.3'),
                t('advList.4'),
                t('advList.5'),
                t('advList.6')
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 group">
                  <CheckCircle2 className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-slate-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-yellow-500 rounded-2xl sm:rounded-3xl md:rounded-[40px] rotate-3 opacity-20 blur-2xl"></div>
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl sm:rounded-3xl md:rounded-[40px] rotate-2 opacity-30 blur"></div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white dark:border-slate-800">
            <Image 
              src="/image copy 2.png"
              alt="Наша команда профессионалов"
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 bg-black/80 backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 border border-yellow-500/30">
              <Users className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <div>
                <div className="font-bold text-xs sm:text-sm md:text-base">{t('teamBadgeTitle')}</div>
                <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-300">{t('teamBadgeSub')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-2 sm:mb-3 md:mb-4">
              {t('valuesTitle1')} <span className="text-yellow-500">{t('valuesTitle2')}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
              {t('valuesSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: t('valuesList.v1.t'),
                desc: t('valuesList.v1.d'),
              },
              {
                icon: Users,
                title: t('valuesList.v2.t'),
                desc: t('valuesList.v2.d'),
              },
              {
                icon: Clock,
                title: t('valuesList.v3.t'),
                desc: t('valuesList.v3.d'),
              },
              {
                icon: HardHat,
                title: t('valuesList.v4.t'),
                desc: t('valuesList.v4.d'),
              },
              {
                icon: Award,
                title: t('valuesList.v5.t'),
                desc: t('valuesList.v5.d'),
              },
              {
                icon: MapPin,
                title: t('valuesList.v6.t'),
                desc: t('valuesList.v6.d'),
              }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="group bg-white dark:bg-slate-900 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-yellow-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-yellow-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellow-500 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-2 sm:mb-3 md:mb-4">
            Наш <span className="text-yellow-500">автопарк</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Современная техника премиум-класса для любых задач
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {[
            { name: "JCB 220X", type: "Гусеничный экскаватор", year: "2023" },
            { name: "Volvo EC250", type: "Гусеничный экскаватор", year: "2022" },
            { name: "JCB 3CX", type: "Экскаватор-погрузчик", year: "2023" },
            { name: "Hitachi ZX200", type: "Гусеничный экскаватор", year: "2022" },
          ].map((item, i) => (
            <div key={i} className="group relative h-48 sm:h-56 md:h-64 lg:h-80 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image 
                src="/image.png"
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                <div className="flex items-center gap-1 sm:gap-2 text-yellow-500 text-[10px] sm:text-xs md:text-sm font-bold mb-1 sm:mb-2">
                  <Star size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4" fill="currentColor" />
                  <span>{item.year} года</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-0.5 sm:mb-1">{item.name}</h3>
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Работаем по всему <span className="text-yellow-500">Таджикистану</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                Наши экскаваторы работают на самых сложных участках страны — от высокогорных перевалов Памира до долин Хатлона.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
                {[
                  "Душанбе и районы",
                  "Согдийская область",
                  "Хатлонская область",
                  "Горный Бадахшан",
                  "РРП",
                  "Гиссарская долина"
                ].map((region, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <MapPin className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-300">{region}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 sm:gap-3 text-yellow-500 font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                  <Clock size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>Среднее время подачи</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">1ч</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">Душанбе</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">3ч</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">Области</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">24ч</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">Отдаленные</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-slate-800 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-slate-700 mt-6 lg:mt-0">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm sm:text-base">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24854.015825723905!2d71.25549363476564!3d38.861034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b176737abcb3cd%3A0x25c331844f1988b5!2sTajikistan!5e0!3m2!1sen!2s!4v1772038895678!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-2 sm:mb-3 md:mb-4">
            Нам <span className="text-yellow-500">доверяют</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Крупнейшие строительные компании Таджикистана выбирают DigMaster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {[
            {
              text: "Работаем с DigMaster более 5 лет. Техника всегда приходит вовремя, операторы профи. Отдельное спасибо за работу в горах.",
              author: "Абдулло Каримов",
              company: "ТочикСтрой",
              rating: 5
            },
            {
              text: "Лучшая компания по аренде экскаваторов в Таджикистане. Свой сервис - чинят за несколько часов.",
              author: "Фарход Раджабов",
              company: "ХатлонСтрой",
              rating: 5
            }
          ].map((review, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-colors">
              <div className="flex gap-0.5 sm:gap-1 text-yellow-500 mb-2 sm:mb-3 md:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-5 lg:mb-6">"{review.text}"</p>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm md:text-base lg:text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-bold dark:text-white text-xs sm:text-sm md:text-base">{review.author}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-black/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            {t('ctaSub')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
              <Phone size={16} className="sm:w-5 sm:h-5" />
              {t('ctaCall')}
            </button>
            <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Mail size={16} className="sm:w-5 sm:h-5" />
              {t('ctaWrite')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}