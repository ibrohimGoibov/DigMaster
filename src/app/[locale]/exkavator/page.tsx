'use client'
import { axiosRequest } from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import img from '@/public/image copy 3.png'
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, Gauge, Weight, Fuel, Calendar, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Page = () => {
    const [data, setData] = useState([]);
    
    async function getExkavator() {
        try {
            let {data} = await axiosRequest.get(`/exkavator`)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        getExkavator();
    }, [])

    const excavators = data.length > 0 ? data : [
        { id: 1, model: "Volvo EC480E", size: "480", status: "active", weight: "48т", type: "Гусеничный", price: "7500", year: "2023", fuel: "32 л/ч" },
        { id: 2, model: "Hitachi ZX350", size: "350", status: "active", weight: "35т", type: "Гусеничный", price: "6200", year: "2022", fuel: "28 л/ч" },
        { id: 3, model: "CAT 320D", size: "320", status: "maintenance", weight: "32т", type: "Гусеничный", price: "5800", year: "2021", fuel: "25 л/ч" },
        { id: 4, model: "JCB 3CX", size: "140", status: "active", weight: "8т", type: "Колесный", price: "2500", year: "2024", fuel: "12 л/ч" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
            {/* Декоративный фон */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full mb-4">
                        <Wrench className="w-4 h-4 text-yellow-500" />
                        <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider">Наша техника</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Каталог экскаваторов
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Выберите идеальную технику для ваших задач. 
                        Современные машины с гарантией качества.
                    </p>
                </div>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {excavators.map((exc: any, index: number) => (
                        <div 
                            key={exc.id} 
                            className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Бейдж хита */}
                            {exc.status === 'active' && (
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                        <span className="text-white text-xs font-bold">Доступен</span>
                                    </div>
                                </div>
                            )}
                            
                            {/* Изображение */}
                            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                <Image 
                                    src={exc.image || img} 
                                    alt={exc.model}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Градиент поверх изображения */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Контент */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                                    {exc.model}
                                </h2>
                                
                                {/* Характеристики */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Gauge className="w-4 h-4" />
                                            <span>Мощность</span>
                                        </div>
                                        <span className="text-white font-semibold">{exc.size} л.с.</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Weight className="w-4 h-4" />
                                            <span>Вес</span>
                                        </div>
                                        <span className="text-white font-semibold">{exc.weight || '—'}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Wrench className="w-4 h-4" />
                                            <span>Тип</span>
                                        </div>
                                        <span className="text-white font-semibold">{exc.type || 'Гусеничный'}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Fuel className="w-4 h-4" />
                                            <span>Расход</span>
                                        </div>
                                        <span className="text-white font-semibold">{exc.fuel || '—'}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>Год</span>
                                        </div>
                                        <span className="text-white font-semibold">{exc.year || '—'}</span>
                                    </div>
                                </div>

                                {/* Цена и кнопка */}
                                <div className="border-t border-white/10 pt-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-400 text-sm">Цена аренды</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-yellow-500">{exc.price}</span>
                                            <span className="text-slate-400 text-sm"> ₽/час</span>
                                        </div>
                                    </div>
                                    <Link href={`/excavator/${exc.id}`}>
                                        <button className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                            <span>Арендовать сейчас</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Анимированная рамка при наведении */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Если нет данных */}
                {excavators.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-4">
                            <Wrench className="w-10 h-10 text-slate-600" />
                        </div>
                        <p className="text-slate-400 text-lg">Нет доступных экскаваторов</p>
                    </div>
                )}

                {/* CTA блок */}
                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm">
                        Не нашли подходящую технику? 
                        <Link href="/contacts" className="text-yellow-500 hover:text-yellow-400 ml-1 font-semibold">
                            Свяжитесь с нами
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page