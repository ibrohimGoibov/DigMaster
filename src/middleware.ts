import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Список всех твоих языков
  locales: ['en', 'ru', 'tj', 'ch'],
  
  // Язык, на который кинет при заходе на "/"
  defaultLocale: 'en',

  // Если true, то для дефолтного языка префикс /en не будет обязательным.
  // Но лучше оставить false для чистоты разработки.
  localePrefix: 'always' 
});

export const config = {
  // Этот матчер говорит: "Работай везде, КРОМЕ папки api, папки _next и статических файлов"
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};