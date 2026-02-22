"use client"

import * as React from "react"
import './globals.css'
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import img from '@/public/image.png'
import img1 from '@/public/image copy.png'
import img2 from '@/public/image copy 2.png'
import img3 from '@/public/image copy 3.png'
import img4 from '@/public/image copy 4.png'
import img5 from '@/public/img.avif' 

export default function Index() {
  const t = useTranslations('Home');

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const slides = [img, img1, img2, img3, img4]

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      
    
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative py-16 md:py-24 text-center px-4">
          <h1 className="font-black text-[60px] md:text-[100px] lg:text-[120px] leading-none tracking-tight">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent italic">
              Dig
            </span>
            <span className="text-gray-800 dark:text-white">Master</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl mt-4 max-w-3xl mx-auto font-light leading-relaxed">
            {t('heroSub')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-2xl shadow-lg shadow-yellow-500/25">
              {t('contactBtn')}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/30 text-lg px-8 py-6 rounded-2xl">
              {t('catalogBtn')}
            </Button>
          </div>
        </div>
      </div>

    
      <div className="w-[95%] max-w-[1400px] mx-auto mb-20 px-4">
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-[40vh] md:h-[60vh] lg:h-[70vh]">
            {slides.map((image, index) => (
              <CarouselItem key={index} className="h-full md:basis-11/12 lg:basis-10/12 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full border-0 shadow-2xl dark:shadow-black/50 overflow-hidden rounded-3xl md:rounded-4xl group">
                    <CardContent className="relative flex h-full items-center justify-center p-0">
                      <Image 
                        src={image} 
                        alt={`Excavator ${index + 1}`} 
                        fill 
                        className="object-cover transition-all duration-700 group-hover:scale-110" 
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-8 bg-white/80 dark:bg-gray-800/80 hover:bg-yellow-500 hover:text-white border-0 shadow-lg" />
          <CarouselNext className="hidden md:flex right-8 bg-white/80 dark:bg-gray-800/80 hover:bg-yellow-500 hover:text-white border-0 shadow-lg" />
        </Carousel>
      </div>

    
      <div className="w-full py-20 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          
        
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image 
                src={img1} 
                alt="Excavator work" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                {t('block1Title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                {t('block1Desc')}
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl px-8 py-6">
                {t('catalogBtn')}
              </Button>
            </div>
          </div>

        
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image 
                src={img2} 
                alt="Professional operator" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                {t('block2Title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                {t('block2Desc')}
              </p>
              <Button variant="outline" className="border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 rounded-xl px-8 py-6">
                {t('contactBtn')}
              </Button>
            </div>
          </div>

        </div>
      </div>

    
      <div className="w-full bg-white dark:bg-gray-900 py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            {t('whyTitle')} <span className="text-yellow-500">DigMaster</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '01', title: t('feat1Title'), desc: t('feat1Desc'), icon: '🏗️' },
              { number: '02', title: t('feat2Title'), desc: t('feat2Desc'), icon: '🛠️' },
              { number: '03', title: t('feat3Title'), desc: t('feat3Desc'), icon: '⚡' }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative bg-slate-50 dark:bg-gray-800/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-yellow-500/20"
              >
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-sm font-mono text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">{item.number}</span>
                  </div>
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10">{t('ctaSub')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-yellow-600 font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl">
              {t('contactBtn')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}