"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
// Import data menu dari folder config. 
// Kalau error '@/', ganti jadi relative path: '../config/menu'
import { MENU_ITEMS } from "@/config/menu"; 

// Helper simpel buat class (pengganti clsx/tailwind-merge biar gak ribet install library lain)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-xl">
      
      {/* 1. DECORATIVE STRIP */}
      <div className="h-2 flex w-full">
        <div className="h-full w-1/3 bg-(--basic-b-color)" />
        <div className="h-full w-1/3 bg-(--basic-a-color)" />
        <div className="h-full w-1/3 bg-(--basic-s-color)" />
        <div className="h-full w-1/3 bg-(--basic-i-color)" />
        <div className="h-full w-1/3 bg-(--basic-c-color)" />
      </div>

      {/* 2. UTILITY BAR (Logo & Search) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          
          {/* Logo Area */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 shrink-0 rounded flex items-center justify-center bg-gray-50 overflow-hidden relative">
                {/* Pastikan gambar ada di folder public/ */}
                <Image 
                  src="/logo-sekolah-basic.gif" 
                  alt="Sekolah Kristen BASIC Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gray-300 h-8 mx-1"></div>
              <div className="leading-tight text-xs uppercase tracking-wide font-medium text-black group-hover:text-[#9e1b66] transition-colors">
                Sekolah <br /> Kristen BASIC
              </div>
            </Link>
            <span className="block text-sm text-gray-500 tracking-tight ml-2">
              Quality is our main priority
            </span>
          </div>

          {/* Right Utility */}
          <div className="w-full lg:w-auto flex flex-col items-end gap-3">
            <div className="flex items-center gap-6 text-xs font-medium text-gray-500">
              {['Admissions', 'Careers', 'Contact'].map((item) => (
                <Link key={item} href="#" className="hover:text-[#9e1b66] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-[280px]">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-100 border-none px-3 py-2 text-xs focus:ring-1 focus:ring-[#9e1b66] rounded-md placeholder-gray-400 outline-none transition-all" 
                />
                <Search className="absolute right-2 top-2 w-3.5 h-3.5 text-gray-400" />
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <div className="border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6 text-xs font-medium text-gray-600 overflow-x-auto no-scrollbar lg:overflow-visible">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
            const hasDropdown = item.children && item.children.length > 0;

            return (
              /* 'group' untuk handle hover di desktop.
                Kita tambahkan 'relative' hanya di desktop (lg) agar dropdown melayang.
                Di mobile, kita biarkan static agar dropdown mendorong lebar/tinggi nav.
              */
              <div key={item.label} className="group lg:relative flex flex-col justify-center min-h-[45px]">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap transition-colors py-3 px-1",
                    isActive ? "text-[#9e1b66]" : "hover:text-[#9e1b66]"
                  )}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-[#9e1b66] transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* INDICATOR LINE (Tetap di track yang sama) */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] bg-[#9e1b66] transform transition-all duration-300 translate-y-[1px]",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />

                {/* DROPDOWN MENU */}
                {hasDropdown && (
                  <div className={cn(
                    "z-60 transition-all duration-200",
                    // Mobile: Posisi normal, sembunyi kecuali 'group-focus' atau hover (tap di mobile trigger hover)
                    "hidden group-hover:block lg:absolute lg:top-full lg:left-0 lg:w-48 lg:pt-1",
                    // Desktop: Melayang kembali
                    "lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transform lg:translate-y-2 lg:group-hover:translate-y-0"
                  )}>
                    <div className="bg-white lg:border lg:border-gray-100 lg:shadow-xl py-1 rounded-b-md">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-[#9e1b66] transition-colors text-[10px] lg:text-xs whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        </div>
      </div>
    </header>
  );
}