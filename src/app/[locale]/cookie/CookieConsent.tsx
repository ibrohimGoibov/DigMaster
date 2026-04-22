'use client'

import React, { useState, useEffect } from 'react'
import { Cookie, X, Check, Shield, Info } from 'lucide-react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const locale = useLocale()
  const t = useTranslations('Cookie')

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    localStorage.setItem('cookie-functional', 'true')
    localStorage.setItem('cookie-analytics', 'true')
    localStorage.setItem('cookie-marketing', 'true')
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    localStorage.setItem('cookie-functional', 'true')
    localStorage.setItem('cookie-analytics', 'false')
    localStorage.setItem('cookie-marketing', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-7 h-7 text-yellow-500" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {t('title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('description')}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-3">
                  <Link 
                    href={`/${locale}/privacy`}
                    className="text-xs text-slate-500 hover:text-yellow-500 transition-colors flex items-center gap-1"
                  >
                    <Shield size={12} />
                    {t('privacy')}
                  </Link>
                  <Link 
                    href={`/${locale}/cookies`}
                    className="text-xs text-slate-500 hover:text-yellow-500 transition-colors flex items-center gap-1"
                  >
                    <Info size={12} />
                    {t('settings')}
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={acceptNecessary}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                >
                  {t('necessary')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-yellow-500/25 text-sm"
                >
                  <Check size={16} />
                  {t('acceptAll')}
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={acceptNecessary}
            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={t('close')}
          >
            <X size={18} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  )
}