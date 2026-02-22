import createNextIntlPlugin from 'next-intl/plugin';
 
// Явно указываем путь к файлу внутри src
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);