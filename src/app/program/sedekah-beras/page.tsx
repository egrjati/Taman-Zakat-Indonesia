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
        <div className="absolute top-28 left-0 w-full h-full flex flex-col md:flex-row gap-0 items-center justify-center z-10">
          <img src="/images/gambardetaile/2 beras.svg" alt="Logo Beras Super" className="w-52" />

          {/* kotak donasi */}
          <div className="bg-white px-7 relative py-8 shadow-lg max-w-80 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2 font-newsreader">
              Sedekah Beras Rakyat
            </h2>
            <p className="text-gray-600 mb-4 text-center font-sm">
              Bantuan Beras Berkualitas Untuk Meningkatkan dan Menjamin Kesehatan Penerima
              Masyarakat Dhuafa
            </p>
            {/* Tombol donasi */}
            <div className="relative inline-block mb-10 transition-transform duration-150 hover:-translate-y-0.5">
              {/* BORDER HITAM */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 -translate-x-1 rotate-[-1deg] rounded-sm border-2 border-zinc-700"
              />

              <a href="#" className="relative z-10 inline-block">
                <div className="relative rounded-sm bg-[#7FC248] px-3 md:px-5 py-2">
                  <div className="relative z-10 inline-flex items-center gap-2 text-base font-semibold font-newsreader text-white">
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
            <div className="w-full absolute bottom-0 p-2 bg-[#FAF3F0]">
              {/* logo dalam */}
              <div className="flex justify-center items-center gap-5">
                {/* amal jariah */}
                <div className="flex flex-col items-center gap-1">
                  <img src="/images/icon/amal-jariah.svg" alt="icon amal jariah" />
                  <p className="text-black text-center">Amal Jariah</p>
                </div>
                {/* investasi dunia */}
                <div className="flex flex-col items-center gap-1">
                  <img src="/images/icon/investasi-dunia.svg" alt="icon investasi dunia" />
                  <p className="text-black text-center">Investasi Dunia</p>
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
