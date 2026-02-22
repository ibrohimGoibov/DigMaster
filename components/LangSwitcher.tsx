'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1] || 'en';

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
  };

  return (
    <div className="p-[20px]">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <Image
          src="/01F6B0EC-0DCB-4453-82CD-0CA01F87F162.png"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex items-center gap-[15px]">
          <AnimatedThemeToggler />
          <select 
        name="locale" 
        id="locale-select" 
        value={currentLocale} 
        onChange={(e) => changeLanguage(e.target.value)}
        style={{ padding: '4px', borderRadius: '4px', cursor: 'pointer' }}
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="tj">Тоҷикӣ</option>
        <option value="ch">Chinese</option>
      </select>
        </div>
      </div>
    </div>
  );
}