"use client"

import React from 'react'
import { useTranslations } from 'next-intl'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      
      
      <div className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic mb-4 uppercase tracking-tighter">
            {t('heroTitle1')} <span className="text-yellow-500">{t('heroTitle2')}</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t('heroSub')}
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white mb-4 uppercase">
                {t('infoTitle1')} <span className="text-yellow-500">{t('infoTitle2')}</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {t('infoSub')}
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-colors">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white mb-1">{t('phoneLabel')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{t('phoneSub')}</p>
                  <a href="tel:+992900000000" className="text-lg font-bold text-yellow-500 hover:text-yellow-600 transition-colors tracking-wider">
                    +992 977 89 65 65
                  </a>
                </div>
              </div>

              
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-colors">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white mb-1">{t('emailLabel')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{t('emailSub')}</p>
                  <a href="mailto:info@digmaster.tj" className="text-lg font-bold text-yellow-500 hover:text-yellow-600 transition-colors">
                    info@digmaster.tj
                  </a>
                </div>
              </div>

              
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-colors">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white mb-1">{t('addressLabel')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{t('addressSub')}</p>
                  <p className="text-lg font-bold dark:text-white">
                    {t('addressText')}
                  </p>
                </div>
              </div>

              
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-colors">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white mb-1">{t('clockLabel')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{t('clockSub')}</p>
                  <p className="text-lg font-bold dark:text-white">
                    {t('clockText')}
                  </p>
                </div>
              </div>
            </div>

            
            <div className="pt-4">
              <h3 className="font-bold dark:text-white mb-3">{t('socials')}</h3>
              <div className="flex gap-3">
                {['Telegram', 'WhatsApp', 'Instagram'].map((social, i) => (
                  <button key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-black rounded-xl font-bold text-sm transition-colors">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold dark:text-white uppercase tracking-tight">{t('formTitle')}</h3>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('labelName')}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" placeholder={t('phName')} className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('labelCompany')}</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" placeholder={t('phCompany')} className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('labelPhone')}</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="tel" placeholder="+992" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('labelEmail')}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="email" placeholder="example@mail.com" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t('labelMsg')}</label>
                <textarea rows={4} placeholder={t('phMsg')} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-yellow-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"></textarea>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition-all text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t('submit')}
              </button>

              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                {t('consent')}
              </p>
            </form>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16 lg:pb-20">
        <div className="bg-slate-200 dark:bg-slate-800 h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative border border-slate-100 dark:border-slate-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
              <p className="text-slate-600 dark:text-slate-400 font-bold">{t('addressText')}</p>
              <p className="text-sm text-slate-500">{t('mapLoad')}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-6 left-4 right-4 lg:hidden z-50">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 flex gap-2">
          <a href="tel:+992900000000" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
            <Phone className="w-4 h-4" /> {t('mobCall')}
          </a>
          <a href="#" className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors dark:text-white">
            <MessageSquare className="w-4 h-4" /> {t('mobChat')}
          </a>
        </div>
      </div>
    </div>
  )
}