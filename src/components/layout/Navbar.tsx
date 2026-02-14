import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full h-12 flex flex-col justify-center bg-white px-4 sm:px-6 lg:px-8 border-b">
        <ul className="w-full mx-auto flex items-center justify-end gap-5 text-zinc-700 font-medium">
          <li className="group inline-flex items-center gap-1 font-semibold cursor-pointer">
            Tentang Kami
            <svg
              className="h-4 w-5 text-black stroke-2 transition-transform group-hover:rotate-180"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>

          <li className="group inline-flex items-center gap-1 font-semibold cursor-pointer">
            Layanan{" "}
            <svg
              className="h-4 w-5 text-black stroke-2 transition-transform group-hover:rotate-180"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
          <li className="group inline-flex items-center gap-1 font-semibold cursor-pointer">
            Kolaborasi
            <svg
              className="h-4 w-5 text-black stroke-2 transition-transform group-hover:rotate-180"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
          <li className="group inline-flex items-center gap-1 font-semibold cursor-pointer">
            Tata Kelola
            <svg
              className="h-4 w-5 text-black stroke-2 transition-transform group-hover:rotate-180"
              viewBox="4 2 18 17"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </li>
        </ul>
      </div>
      {/* Logo Taza & Donation */}
      <div className="w-full h-20 flex gap-5  justify-between items-center bg-[#5DA630]">
        <Image
          src="/images/icon/Taman Zakat Horizontal.png"
          alt="Logo Taman Zakat Indonesia"
          width={500}
          height={120}
          className="h-14 ml-5 sm:h-14 w-auto "
          priority
        />

        <div className="flex gap-5 mr-5">
          {/* Program */}
          <a
            href="#"
            className="h-8 px-3 border-2 border-black text-black flex items-center justify-center"
          >
            Program
          </a>
          {/* Donasi */}
          <a
            href="#"
            className="h-8 px-4 flex items-center justify-center rounded-lg text-[#196135] bg-white shadow-lg"
          >
            Donasi
          </a>
        </div>
      </div>
    </nav>
  );
}
