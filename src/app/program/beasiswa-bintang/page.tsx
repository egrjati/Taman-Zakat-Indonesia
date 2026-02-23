import Image from "next/image";

const BADGE_TEXT = "Taman Zakat - Indonesia - taza -";

export default function BeasiswaBintangPage() {
  return (
    <section className="min-h-screen w-full bg-white overflow-x-hidden">
      <header className="w-full bg-[#222520] py-10 md:py-20 px-3 gap-5 flex flex-col items-center justify-center">
        {/* judul */}
        <div className="inline-block">
          <h1 className="text-white text-xl md:text-2xl font-newsreader font-bold">
            Beasiswa Bintang
          </h1>
          <hr className="w-full border-t-2 border-[#7FC248] mt-2" />
        </div>
        <p className="text-center max-w-full md:max-w-6xl mx-auto text-white">
          Sejahterakan Pendidikan Anak Bangsa Mari menjadi bagian dari Keluarga Besar Taman Zakat
          untuk menebar hikmah menuju peradaban dunia yang lebih baik melalui program Beasiswa
          Bintang untuk siswa-siswi berprestasi. Melalui Beasiswa Bintang, anda juga membantu
          anak-anak yatim menyongsong masa depan yang gemilang 
        </p>

        {/* Tombol donasi */}
        <div className="relative inline-block mt-6 md:mt-8">
          {/* BORDER HITAM */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 -translate-x-1 rotate-[-1deg] rounded-sm border-2 border-white"
          />

          <a
            href="#"
            className="relative z-10 inline-block transition-transform duration-150 hover:-translate-y-0.5"
          >
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
      </header>
      <main className="w-full bg-[#F1EFE9] px-4 py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-[460px]">
              <Image
                src="/images/gambardetaile/beasiswa-santri 1.svg"
                alt="Program Beasiswa Santri"
                width={600}
                height={360}
                className="h-auto w-full rounded-md"
                priority
              />

              {/* Badge bulat */}
              <div className="pointer-events-none absolute right-0 top-0 translate-x-3 -translate-y-3 md:translate-x-1/4 md:-translate-y-1/3">
                <div className="relative h-[44px] w-[44px] md:h-[52px] md:w-[52px]">
                  <div
                    aria-hidden
                    className="absolute -top-[2px] left-[2px] h-full w-full rounded-full border border-black bg-transparent rotate-[-6deg]"
                  />

                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-black bg-[#7FC248]">
                    <svg
                      viewBox="0 0 300 300"
                      aria-hidden
                      className="absolute inset-0 h-full w-full fill-black"
                    >
                      <defs>
                        <path
                          id="beasiswa-badge-path"
                          d="M150,150 m0,-112 a112,112 0 1,1 0,224 a112,112 0 1,1 0,-224"
                        />
                      </defs>
                      <text fontSize="30" fontWeight="500" className="font-newsreader">
                        <textPath
                          href="#beasiswa-badge-path"
                          startOffset="50%"
                          textAnchor="middle"
                          textLength="680"
                          lengthAdjust="spacing"
                        >
                          {BADGE_TEXT}
                        </textPath>
                      </text>
                    </svg>

                    <div className="relative z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-black bg-[#7FC248] md:h-[24px] md:w-[24px]">
                      <Image
                        src="/images/icon/hitam logo taza 1.svg"
                        alt="Logo Taza hitam"
                        width={20}
                        height={22}
                        className="h-[14px] w-auto md:h-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="w-full text-black md:w-1/2">
            <h2 className="font-newsreader text-lg font-semibold leading-tight md:text-2xl">
              Dekat dengan Rasulullah lewat Amalan ini...
            </h2>
            <p className="mt-3 text-xs leading-relaxed md:text-base">
              Jumlah Angka Putus Sekolah di Indonesia meningkat hingga 22,31% begitu juga dengan Angka
              Buta Huruf mencapai 10,8 juta orang. Hal ini adalah bukti bahwa masih banyak anak-anak
              Indonesia yang perlu dibantu bersama.
            </p>
            <p className="mt-4 text-xs leading-relaxed md:text-base">
              Sobat Zakat, Rasulullah bersabda bahwa orang-orang muslim yang memelihara anak yatim
              maka akan berada bersama beliau seperti jari telunjuk dan jari tengah. Betapa dekatnya...
            </p>
            <p className="mt-4 text-xs leading-relaxed md:text-base">
              Hanya dengan 50 ribu anda bisa ikut berpartisipasi mengantarkan anak-anak yatim dhuafa
              dan anak berprestasi memperoleh masa depan gemilang di hari mendatang.
            </p>
            <a
              href="#"
              className="mt-6 inline-block font-newsreader text-base text-[#3a5f2a] underline decoration-1 underline-offset-4"
            >
              DONASI DISINI
            </a>
          </article>
        </div>
      </main>
    </section>
  );
}
