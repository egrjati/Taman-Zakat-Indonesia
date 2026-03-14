import Image from "next/image";
import IndonesiaMap from "@/components/ui/indonesia-map";
import HeroSliderHome from "@/components/ui/hero-slider-home";
import BerbagiMengubahKehidupan from "@/components/ui/berbagi-mengubah-kehidupan";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Header */}
      <header>
        <HeroSliderHome />
      </header>

      <main>
        {/* Kolaborasi Mitra Banner - Replacing Hero is not necessary since they wanted Hero Slider, but the Kolaborasi is visible on top in the screenshot. The user explicitly said: "pada halaman home sebelah atas hero ganti heronya dengan gambar yang sudah ada di gambardetaile di publick hero home 1-5" which I did. "ada sedikit revisi dari halaman home tolong sesuaikan dan jika tidak ada di contoh gmabr diatas itu dihaous saja dan jika belum ada tambahkan" */}

        {/* Kebaikan Dimulai Di Sini / Berbagi Mengubah Kehidupan */}
        <BerbagiMengubahKehidupan />

        {/* Tentang Kami / About */}
        <section className="mt-20 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#3B7A1C]">ABOUT</h2>
            <h3 className="text-2xl sm:text-3xl font-light mt-2 text-black font-bold"><span className="font-bold text-[#7FC248]">TAMAN ZAKAT</span> INDONESIA</h3>
            <p className="mt-6 text-base sm:text-lg text-black leading-relaxed font-medium">
              Kami Memfasilitasi perkembangan generasi yang penuh berkah dan kami mempunyai mimpi bisa menjadi salah satu tulang punggung gerakan kebaikan ummat.
            </p>
            <button className="mt-6 bg-[#7FC248] text-white px-6 py-2.5 rounded-md font-medium inline-flex items-center justify-center gap-2 hover:bg-[#6eb23a] transition-colors shadow-md">
              Selengkapnya <span className="text-2xl leading-none -mt-1">&rarr;</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto bg-[#EAFCDC] border border-[#7FC248] rounded-xl p-6 sm:p-8 text-center relative mt-16 shadow-sm">
            {/* Animated Taza Badge from About page */}
            <div className="absolute -top-8 -left-5 md:-top-10 md:-left-8 z-20 hover:scale-105 transition-transform duration-300">
              <div className="relative h-[65px] w-[65px] md:h-[80px] md:w-[80px]">
                <div aria-hidden className="absolute -top-[2px] left-[2px] h-full w-full rounded-full border border-black bg-transparent rotate-[-6deg]" />
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-black bg-[#8cc63f]">
                  <svg viewBox="0 0 300 300" aria-hidden className="absolute inset-0 h-full w-full fill-black transform -rotate-12 animate-[spin_15s_linear_infinite]">
                    <defs>
                      <path id="home-kemanusiaan-badge-path" d="M150,150 m0,-112 a112,112 0 1,1 0,224 a112,112 0 1,1 0,-224" />
                    </defs>
                    <text fontSize="30" fontWeight="500" className="font-newsreader tracking-wider">
                      <textPath href="#home-kemanusiaan-badge-path" startOffset="50%" textAnchor="middle" textLength="660">
                        Taman Zakat - Indonesia - taza -
                      </textPath>
                    </text>
                  </svg>
                  <div className="relative z-10 flex h-[28px] w-[28px] md:h-[35px] md:w-[35px] items-center justify-center rounded-full border-[2px] border-black bg-[#8cc63f]">
                    <Image src="/images/icon/hitam logo taza 1.svg" alt="Logo Taza" width={24} height={24} className="h-[16px] w-auto md:h-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-black font-medium leading-relaxed mt-2 sm:mt-0 px-4 pt-2">
              Lembaga Filantropi Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk Pengembangan Alqur'an, Pendidikan, Kesehatan dan Kemanusiaan
            </p>
          </div>
        </section>

        {/* Map / Stats Section (Black Background) */}
        <section className="bg-black text-white pt-16 pb-20 w-full mt-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 leading-tight">
              Know that your donation is making <br className="hidden sm:block"/> a difference
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-400 mb-12 max-w-4xl mx-auto opacity-80">
              charity water uses 100% of your donation to fund clean water, we will never fix this unless we grow single drop event. companies with 2M over directs employee donations. Grow push like you right here.
            </p>
            
            <div className="border border-gray-700 rounded-2xl p-6 sm:p-10 pt-12 relative overflow-hidden">
              <div className="flex justify-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 border border-[#7FC248] flex items-center justify-center text-[#7FC248] rounded-md font-bold text-xs p-1">
                    <div className="w-6 h-6 border-2 border-[#7FC248] rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold leading-none tracking-wide text-white">TAMAN</h4>
                    <h4 className="text-lg font-bold leading-none tracking-wide text-[#7FC248]">ZAKAT</h4>
                    <span className="text-[0.4rem] tracking-widest text-gray-400 block -mt-1">INDONESIA</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 text-center mb-[4rem] sm:mb-16 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
                <div className="pt-4 sm:pt-0">
                  <h3 className="text-4xl font-bold text-white mb-2">47</h3>
                  <p className="text-sm text-gray-400">Program berjalan</p>
                </div>
                <div className="pt-4 sm:pt-0">
                  <h3 className="text-4xl font-bold text-white mb-2">102.088</h3>
                  <p className="text-sm text-gray-400">Penerima Manfaat</p>
                </div>
                <div className="pt-4 sm:pt-0">
                  <h3 className="text-4xl font-bold text-white mb-2">12</h3>
                  <p className="text-sm text-gray-400">Provinsi</p>
                </div>
              </div>

              <div className="flex justify-center w-full pb-8">
                <IndonesiaMap />
              </div>
            </div>
          </div>
        </section>

        {/* Section Berita */}
        <section className="mt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-4">
               {/* Line Behind Title */}
              <div className="absolute left-0 bottom-1/2 right-0 h-[2px] bg-[#97D769] -z-10"></div>
              
              <div className="bg-white px-2">
                <h2 className="rounded-sm border border-[#97D769] bg-white px-8 py-2 text-2xl sm:text-3xl font-bold text-black text-center shadow-sm">
                  Berita <span className="text-[#97D769] font-light">Taman Zakat</span>
                </h2>
              </div>
            </div>

            <div className="border-y border-[#97D769] py-3 mb-8">
              <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 text-sm sm:text-base font-medium text-[#3B7A1C]">
                <li className="cursor-pointer hover:text-[#71C935]">Aksi Taman Zakat</li>
                <li className="cursor-pointer hover:text-[#71C935]">Report Program</li>
                <li className="cursor-pointer hover:text-[#71C935]">Annual Report</li>
                <li className="cursor-pointer hover:text-[#71C935]">Artikel</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
              <div className="space-y-4 flex flex-col">
                <div className="h-[300px] sm:h-[400px] rounded-lg border border-[#D1D1D1] bg-white shadow-sm flex items-center justify-center">
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="h-32 sm:h-44 rounded-lg border border-[#D1D1D1] bg-white shadow-sm flex items-center justify-center">
                  </div>
                  <div className="h-32 sm:h-44 rounded-lg border border-[#D1D1D1] bg-white shadow-sm flex items-center justify-center">
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "#0000A400\\n02MEI20YYYY\\nAWAL / 000000XXX00",
                  "#0000224A\\n02MEI20YYYY\\nBARU / 0000045XXX0",
                  "#00001A8V\\n02MEI20ZZZZ\\nPER / 0000055XXX0",
                  "#0000A175\\n02MEI20QQQQ\\nTER / 0000075XXX0",
                ].map((title, id) => (
                  <article key={id} className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] items-start gap-4 flex-1">
                    <div className="h-full min-h-[90px] sm:min-h-[110px] w-full rounded-lg border border-[#D1D1D1] bg-white shadow-sm flex items-center justify-center">
                    </div>
                    <div className="pt-2 flex flex-col h-full bg-white rounded-lg border border-[#D1D1D1] shadow-sm px-4 py-3 justify-center">
                      <p className="text-xs font-mono text-black break-words leading-relaxed whitespace-pre-wrap font-bold">
                        {title}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 mb-4">
              <a
                href="#"
                className="inline-flex w-fit items-center text-white bg-[#97D769] px-10 py-2 rounded-md font-medium text-sm shadow-sm hover:bg-[#7FC248] transition-colors"
              >
                Lihat Lebih Banyak
              </a>
            </div>
          </div>
        </section>

        {/* Section Artikel (Green BG) */}
        <section className="bg-[#D3ECC4] border-t border-[#B8DDA1] pt-12 pb-16 w-full mt-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-10">
              Artikel <span className="text-[#7FC248] font-light">Taman Zakat</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[1, 2].map((card) => (
                <div key={card} className="bg-white p-4 rounded-xl shadow-md flex gap-4 h-[300px]">
                  <div className="w-1/2 h-full bg-[#D9D9D9] rounded-md flex items-center justify-center text-gray-500">
                    Image
                  </div>
                  <div className="w-1/2 flex flex-col pt-2">
                    <span className="text-[10px] text-blue-500 font-medium tracking-widest uppercase mb-1">ARTIKEL</span>
                    <h3 className="text-lg md:text-xl font-bold leading-snug mb-2 text-black">Daging Kurban Boleh Dicuci? Baca Dulu Dulu</h3>
                    <p className="text-xs text-gray-400 mb-4 inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block"></span>
                      13 Jul 2024
                    </p>
                    <p className="text-xs text-black leading-relaxed line-clamp-6 font-medium">
                      Bolehkah daging kurban dicuci sebelum dimasak? Simak penjelasannya lebih lengkap di sini. Daging kurban merupakan salah satu momen istimewa yang paling ditunggu-tunggu setiap setahun sekali. Bagi umat muslim...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white cursor-pointer hover:bg-gray-400 transition-colors"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-600 shadow-sm cursor-pointer border border-gray-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white cursor-pointer hover:bg-gray-400 transition-colors"></span>
            </div>
          </div>
        </section>

        {/* Change The World Bottom Section */}
        <section className="bg-[#FAEED3] w-full py-16 text-center shadow-inner">
          <p className="text-[#A2BAF5] text-xs sm:text-sm tracking-[0.3em] font-bold mb-3 uppercase">OPPORTUNITIES</p>
          <h2 className="text-3xl font-bold mb-4 text-black">Change the world with us</h2>
          <p className="text-sm font-medium text-black mb-6">we've been opening at the position under</p>
          <button className="text-xs font-bold text-black border-b-2 border-black pb-1 hover:text-[#7FC248] hover:border-[#7FC248] transition-colors">
            SEE ALL OUR AVAILABLE ROLE
          </button>
        </section>

      </main>
    </section>
  );
}
