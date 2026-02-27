import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* Logo Taza & Donation */}
      <div className="w-full h-12 md:h-16 flex gap-5 justify-between items-center bg-[#5DA630]">
        
        <a href="/">
        <Image
          src="/images/icon/Taman Zakat Horizontal.png"
          alt="Logo Taman Zakat Indonesia"
          width={500}
          height={120}
          className="h-9 ml-3 md:ml-5 md:h-12 w-auto "
          priority
        />
        </a>

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
      <div className="w-full  px-3 py-2 backdrop-blur md:h-12 md:flex md:flex-col md:justify-center bg-white md:px-6 md:py-0 lg:px-8">
        <ul className="w-full mx-auto flex items-center justify-start gap-2 overflow-x-auto whitespace-nowrap text-xs font-medium text-zinc-700 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-end md:gap-5 md:overflow-visible md:whitespace-normal md:text-base">
          <li className="group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Tentang Kami
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>

          <li className="group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Layanan{" "}
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
          <li className="group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Kolaborasi
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
          <li className="group inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FC248] hover:bg-[#F2F9EC] active:scale-[0.98] md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:translate-y-0 md:hover:border-transparent md:hover:bg-transparent">
            Tata Kelola
            <svg
              className="h-3.5 w-3.5 text-zinc-500 stroke-2 transition-transform duration-300 group-hover:rotate-180 md:h-4 md:w-5 md:text-black"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
