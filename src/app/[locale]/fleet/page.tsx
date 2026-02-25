'use client'
import { axiosRequest } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { CheckCircle2, Clock, Image as ImageIcon, AlertCircle } from "lucide-react"

interface Work {
  id: number;
  title: string;
  status: string;
  image: string;
}

const Page = () => {
  const [data, setData] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  async function getProduct() {
    try {
      const response = await axiosRequest.get('/getWork')
      setData(response.data)
    } catch (error) {
      console.error("Ошибка при получении работ:", error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Загрузка проектов...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      
      {/* Hero секция */}
      <div className="relative bg-slate-900 py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Наши <span className="text-yellow-500">работы</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Реализованные проекты с использованием нашей техники
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        
        {data.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">Работ пока нет</h3>
            <p className="text-slate-500 dark:text-slate-400">Скоро здесь появятся наши проекты</p>
          </div>
        ) : (
          <>
            {/* Статистика (опционально) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl sm:rounded-2xl text-center border border-slate-200 dark:border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-yellow-500 mb-1">{data.length}</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Всего проектов</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl sm:rounded-2xl text-center border border-slate-200 dark:border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-yellow-500 mb-1">
                  {data.filter(w => w.status === 'completed').length}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Завершено</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl sm:rounded-2xl text-center border border-slate-200 dark:border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-yellow-500 mb-1">
                  {data.filter(w => w.status === 'in-progress').length}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">В процессе</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl sm:rounded-2xl text-center border border-slate-200 dark:border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-yellow-500 mb-1">2024</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Текущий год</div>
              </div>
            </div>

            {/* Сетка проектов */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {data.map((work) => (
                <div 
                  key={work.id} 
                  className="group bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-yellow-500"
                >
                  {/* Изображение */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={work.image || 'https://via.placeholder.com/400x300?text=DigMaster'} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x300?text=DigMaster';
                      }}
                    />
                    
                    {/* Бейдж статуса */}
                    <div className="absolute top-3 right-3">
                      <span className={`
                        px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1
                        ${work.status === 'completed' ? 'bg-green-500 text-white' : ''}
                        ${work.status === 'in-progress' ? 'bg-yellow-500 text-black' : ''}
                        ${work.status === 'pending' ? 'bg-slate-500 text-white' : ''}
                      `}>
                        {work.status === 'completed' && <CheckCircle2 size={12} />}
                        {work.status === 'in-progress' && <Clock size={12} />}
                        {work.status}
                      </span>
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold dark:text-white mb-2 line-clamp-2">
                      {work.title}
                    </h2>
                    
                    {/* Детали (можно добавить больше полей из бэкенда) */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span>ID проекта: #{work.id}</span>
                      </div>
                    </div>

                    {/* Кнопка (опционально) */}
                    <button className="mt-4 w-full bg-slate-100 dark:bg-slate-800 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-black font-medium py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-colors">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Призыв к действию (если нет работ) */}
      {data.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3">
              Хотите увидеть наши работы?
            </h3>
            <p className="text-black/80 text-sm sm:text-base mb-4 sm:mb-6">
              Следите за обновлениями или свяжитесь с нами
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-slate-900 transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page;