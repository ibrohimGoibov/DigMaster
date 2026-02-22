import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Получаем текущий язык из параметров запроса
  let locale = await requestLocale;

  // Если вдруг пусто, ставим дефолт
  if (!locale) locale = 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});