import Image from "next/image";

export default function SedekahBeras() {
  return (
    <section className="min-h-screen w-full bg-white overflow-x-hidden">
      <header className="w-full h-96 relative">
        {/* Background Image */}
        <div
          className=" h-[250px] md:h-[300px] 
                bg-[url('/images/gambardetaile/pakham.svg')] 
                bg-cover 
                bg-[position:50%_75%] z-0"
        ></div>

        {/* Warna Coklat */}
        <div className="h-[280px] md:h-[250px] bg-[#B7A9A2] z-0"></div>

        {/* Konten */}
        <div className="absolute top-20 md:top-28 left-0 w-full h-full flex flex-col md:flex-row gap-0 items-center justify-center z-10 px-2 md:px-0">
          <img
            src="/images/gambardetaile/2 beras.svg"
            alt="Logo Beras Super"
            className="hidden md:block w-52"
          />

          {/* kotak donasi */}
          <div className="relative w-full max-w-[340px] overflow-hidden bg-[#ECECEC] px-6 pt-10 pb-28 shadow-none md:max-w-80 md:bg-white md:px-7 md:pt-8 md:pb-28 md:shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-center text-xl md:text-xl font-bold text-black md:text-gray-800 mb-4 md:mb-2 font-newsreader">
              Sedekah Beras Rakyat
            </h2>
            <p className="text-black md:text-gray-600 mb-8 md:mb-4 text-center text-base md:text-sm leading-relaxed">
              Bantuan Beras Berkualitas Untuk Meningkatkan dan Menjamin Kesehatan Penerima
              Masyarakat Dhuafa
            </p>
            {/* Tombol donasi */}
            <div className="relative inline-block mb-1 transition-transform duration-150 hover:-translate-y-0.5">
              {/* BORDER HITAM */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 -translate-x-1 rotate-[-1deg] rounded-sm border-2 border-zinc-700"
              />

              <a href="#" className="relative z-10 inline-block">
                <div className="relative rounded-sm bg-[#7FC248] px-5 md:px-5 py-2.5 md:py-2">
                  <div className="relative z-10 inline-flex items-center gap-2 text-base md:text-base font-semibold font-newsreader text-white">
                    <span>Donasi Disini</span>
                    <Image
                      src="/images/icon/Donation.svg"
                      alt="Ikon donasi"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>
              </a>
            </div>
            {/* coklat */}
            <div className="w-full absolute inset-x-0 bottom-0 px-4 py-3 md:p-2 bg-[#FAF3F0]">
              {/* logo dalam */}
              <div className="flex justify-center items-center gap-12 md:gap-5">
                {/* amal jariah */}
                <div className="flex flex-col items-center gap-1">
                  <img src="/images/icon/amal-jariah.svg" alt="icon amal jariah" className="h-12 w-12 md:h-auto md:w-auto" />
                  <p className="text-black text-center text-base md:text-base leading-tight font-newsreader">Amal Jariyah</p>
                </div>
                {/* investasi dunia */}
                <div className="flex flex-col items-center gap-1">
                  <img src="/images/icon/investasi-dunia.svg" alt="icon investasi dunia" className="h-12 w-12 md:h-auto md:w-auto" />
                  <p className="text-black text-center text-base md:text-base leading-tight font-newsreader">Investasi Dunia</p>
                </div>
              </div>
              {/* end coklat */}
            </div>
          </div>
          {/* end konten */}
        </div>
      </header>
    </section>
  );
}
