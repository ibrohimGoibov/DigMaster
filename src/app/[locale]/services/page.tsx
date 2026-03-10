"use client"

import React from 'react'
import { useTranslations } from 'next-intl'
import { Mountain, Building2, Droplets, Rotate3d, HardHat } from "lucide-react"
import Link from 'next/link';

export default function ServicesPage() {
  const t = useTranslations('Services');

  const services = [
    {
      icon: <Mountain className="w-10 h-10 text-yellow-500" />,
      title: t('s1Title'),
      desc: t('s1Desc')
    },
    {
      icon: <Rotate3d className="w-10 h-10 text-yellow-500" />,
      title: t('s2Title'),
      desc: t('s2Desc')
    },
    {
      icon: <Building2 className="w-10 h-10 text-yellow-500" />,
      title: t('s3Title'),
      desc: t('s3Desc')
    },
    {
      icon: <Droplets className="w-10 h-10 text-yellow-500" />,
      title: t('s4Title'),
      desc: t('s4Desc')
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic dark:text-white mb-6">
            {t('mainTitle1')} <span className="text-yellow-500">{t('mainTitle2')}</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t('heroSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-yellow-500/[0.02] hover:border-yellow-500/30 transition-all duration-300">
              <div className="mb-6 inline-block p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 shadow-2xl">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 italic">{t('ctaTitle')}</h2>
            <p className="text-gray-400">{t('ctaDesc')}</p>
          </div>
          <Link href={'/contacts'}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-black py-5 px-10 rounded-2xl transition-all active:scale-95 whitespace-nowrap">
            {t('ctaBtn')}
          </button>
          </Link>
          <div className="flex items-center justify-evenly">
          </div>
        </div>
      </div>
    </div>
  )
}