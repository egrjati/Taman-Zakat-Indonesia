"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky navbar when scrolled down more than 120px
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-[1000] flex flex-col transition-all duration-300 bg-white ${isScrolled ? 'shadow-md shadow-black/5' : ''}`}>
      
      {/* 1. Bagian Hijau (Top Bar) - Akan mengecil perlahan dan menghilang saat di-scroll menyatu */}
      <div className={`w-full flex gap-5 justify-between items-center bg-[#5DA630] overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'h-0 opacity-0' : 'h-12 md:h-16 opacity-100'}`}>
        <Link href="/" aria-label="Ke halaman utama">
          <Image
            src="/images/icon/Taman Zakat Horizontal.png"
            alt="Logo Taman Zakat Indonesia"
            width={500}
            height={120}
            className="h-9 ml-3 md:ml-5 md:h-12 w-auto"
            priority
          />
        </Link>

        <div className="flex gap-3 md:gap-5 mr-3 md:mr-5 shrink-0">
          <Link
            href="/program"
            className="md:h-8 h-7 px-1 md:px-3 border-2 border-gray-800 text-black flex items-center justify-center font-medium"
          >
            Program
          </Link>
          <a
            href="#"
            className="md:h-8 h-7 md:px-4 px-3 flex items-center justify-center rounded-lg text-[#196135] bg-white shadow-lg font-bold"
          >
            Donasi
          </a>
        </div>
      </div>

      {/* 2. Bagian Putih (Bottom Menu) - Akan berubah komposisi (menyatu jadi versi scroll down) */}
      <div className={`w-full bg-white backdrop-blur transition-all duration-500 ease-in-out flex items-center ${isScrolled ? 'h-16 md:h-[72px]' : 'h-auto py-2 md:py-3 shadow-sm'}`}>
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between relative h-full">
          
          {/* Logo Kiri (Muncul saat Scrolled - efek turun/drop dari atas) */}
          <div className={`absolute left-4 md:left-6 lg:left-8 flex items-center transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
            <Link href="/" aria-label="Ke halaman utama" className="shrink-0 flex items-center">
              <Image
                src="/images/icon/Taman zakat hijau hitam.png"
                alt="Logo Taman Zakat"
                width={200}
                height={48}
                className="h-7 md:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Tengah: Menu Links - akan menggeser perlahan ke tengah tanpa w-0 */}
          <ul className={`flex flex-wrap items-center gap-x-2 gap-y-3 text-xs md:text-[15px] font-[600] text-zinc-800 md:gap-6 lg:gap-8 xl:gap-10 transition-all duration-700 ease-in-out w-full ${isScrolled ? 'justify-center mx-auto' : 'justify-end'}`}>
            <li className="shrink-0 flex">
              <Link
                href="/about"
                className="group inline-flex w-full cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent md:hover:text-[#5DA630]"
              >
                Tentang Kami
              </Link>
            </li>

            <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-2 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent md:hover:text-[#5DA630]">
              Layanan
              <svg
                className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black group-hover:text-[#5DA630]"
                viewBox="4 2 18 17"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full ${isScrolled ? 'pt-4' : 'pt-2 md:pt-3'} opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50`}>
                <div className="flex w-[260px] md:w-[280px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl text-black">
                  {[1, 2].map((_, idx) => (
                    <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 1 ? 'border-b border-zinc-100' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[14px] sm:text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                        <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                          <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-[12px] sm:text-[13px] text-zinc-500 mt-1.5 leading-tight font-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-2 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent md:hover:text-[#5DA630]">
              Kolaborasi
              <svg
                className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black group-hover:text-[#5DA630]"
                viewBox="4 2 18 17"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto top-full ${isScrolled ? 'pt-4' : 'pt-2 md:pt-3'} opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50`}>
                <div className="flex w-[260px] md:w-[280px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl text-black">
                  {[1, 2].map((_, idx) => (
                    <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 1 ? 'border-b border-zinc-100' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[14px] sm:text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                        <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                          <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-[12px] sm:text-[13px] text-zinc-500 mt-1.5 leading-tight font-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-2 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent md:hover:text-[#5DA630]">
              Tata Kelola
              <svg
                className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black group-hover:text-[#5DA630]"
                viewBox="4 2 18 17"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full ${isScrolled ? 'pt-4' : 'pt-2 md:pt-3'} opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50`}>
                <div className="flex w-[260px] md:w-[280px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl text-black">
                  {[1, 2].map((_, idx) => (
                    <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 1 ? 'border-b border-zinc-100' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[14px] sm:text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                        <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                          <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-[12px] sm:text-[13px] text-zinc-500 mt-1.5 leading-tight font-normal">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            
            {/* Tampil sebagai bulatan di mobile, teks biasa saat desktop statis, tampil saat scroll*/}
            <li className="shrink-0 flex md:hidden">
               <Link
                href="/program"
                className={`group inline-flex w-full cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] ${isScrolled ? 'flex' : 'hidden'}`}
               >
                Program
               </Link>
            </li>
            <li className={`shrink-0 hidden md:flex ${isScrolled ? 'block' : 'hidden opacity-0'}`}>
               <Link
                href="/program"
                className="group inline-flex w-full cursor-pointer items-center gap-1.5 transition-all duration-300 outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-2 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent md:hover:text-[#5DA630]"
               >
                Program
               </Link>
            </li>
          </ul>

          {/* Kanan Donasi Button (Muncul saat Scrolled - drop down dari atas) */}
          <div className={`absolute right-4 md:right-6 lg:right-8 flex items-center transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
            <a
              href="#"
              className="h-8 md:h-10 px-4 md:px-6 flex items-center justify-center rounded-md text-[14px] font-[600] text-[#196135] bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-[#5DA630] transition-all whitespace-nowrap shrink-0"
            >
              Donasi
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
