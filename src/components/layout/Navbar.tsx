import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-[999] bg-white">
      {/* Logo Taza & Donation */}
      <div className="w-full h-12 md:h-16 flex gap-5 justify-between items-center bg-[#5DA630]">

        <Link href="/" aria-label="Ke halaman utama">
          <Image
            src="/images/icon/Taman Zakat Horizontal.png"
            alt="Logo Taman Zakat Indonesia"
            width={500}
            height={120}
            className="h-9 ml-3 md:ml-5 md:h-12 w-auto "
            priority
          />
        </Link>

        <div className="flex gap-3 md:gap-5 mr-3 md:mr-5">
          {/* Program */}
          <Link
            href="/program"
            className="md:h-8 h-7 px-1 md:px-3 border-2 border-gray-800 text-black flex items-center justify-center"
          >
            Program
          </Link>
          {/* Donasi */}
          <a
            href="#"
            className=" md:h-8 h-7 md:px-4 px-2  flex items-center justify-center rounded-lg text-[#196135] bg-white shadow-lg"
          >
            Donasi
          </a>
        </div>
      </div>

      {/* Redirect */}
      <div className="w-full  px-3 py-2 md:py-3 backdrop-blur md:h-12 md:flex md:flex-col md:justify-center bg-white md:px-6 lg:px-8">
        <ul className="w-full mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-xs font-medium text-zinc-700 md:justify-end md:gap-5 md:text-base">
          <li className="shrink-0 flex">
            <Link
              href="/about"
              className="group inline-flex w-full cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent"
            >
              Tentang Kami
            </Link>
          </li>

          <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Layanan{" "}
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full pt-2 md:pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50">
              <div className="flex w-[280px] md:w-[320px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl">
                {[1, 2, 3, 4].map((item, idx) => (
                  <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 3 ? 'border-b border-zinc-100' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                      <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                        <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                      <p className="text-[13px] text-zinc-500 mt-1.5 leading-snug font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Kolaborasi
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>

            {/* Dropdown Menu */}
            <div className="absolute right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto top-full pt-2 md:pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50">
              <div className="flex w-[280px] md:w-[320px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl">
                {[1, 2, 3].map((item, idx) => (
                  <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 2 ? 'border-b border-zinc-100' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                      <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                        <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                      <p className="text-[13px] text-zinc-500 mt-1.5 leading-snug font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li tabIndex={0} className="group relative inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] outline-none md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Tata Kelola
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 group-focus:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full pt-2 md:pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-300 z-50">
              <div className="flex w-[280px] md:w-[320px] flex-col overflow-hidden bg-white shadow-xl shadow-black/5 border border-zinc-100 whitespace-normal text-left rounded-xl">
                {[1, 2, 3].map((item, idx) => (
                  <Link key={idx} href="#" className={`group/item flex flex-col px-5 py-3 md:py-4 hover:bg-[#F2F9EC]/50 transition-colors ${idx !== 2 ? 'border-b border-zinc-100' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[15px] text-zinc-700 group-hover/item:text-zinc-900 transition-colors">Lorem Ipsum</span>
                      <div className="opacity-0 -translate-x-2 w-0 overflow-hidden group-hover/item:w-5 group-hover/item:overflow-visible group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 h-5 rounded-full bg-[#8DC63F] border border-black flex items-center justify-center">
                        <svg className="w-3 h-3 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover/item:max-h-24 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                      <p className="text-[13px] text-zinc-500 mt-1.5 leading-snug font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
