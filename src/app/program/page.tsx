export default function ProgramPage() {
  const gridBgOffsetY = "260px";
  const gridBgHeight = "970px";

  return (
    <section className="min-h-screen w-full bg-[#faf7f0] overflow-x-hidden">
      {/* header */}
      <header className="w-full flex flex-col bg-black md:flex-row md:h-[400px]">
        {/* Gambar */}
        <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto bg-gray-300"></div>
        {/* text */}
        <div className="w-full md:w-1/2 bg-[#30353B] flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 sm:py-10 md:px-12 lg:px-16 text-center md:text-left items-center md:items-start">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-light font-newsreader pb-2 border-b-2 border-[#7FC248]">
            It's time to take action.
          </h1>
          <p className="text-white text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maiores porro
            quaerat, vitae sed odio maxime facilis voluptatum alias consectetur veritatis quod ad.
          </p>
        </div>
      </header>
      {/* content */}
      <main className="bg-[#FAF7F0] w-full md:py-10 lg:py-8 px-5">
        {/* pembuka */}
        <section className="w-full">
          <h2 className="text-2xl md:text-2xl lg:text-3xl text-black font-medium font-newsreader text-center mt-10 mb-2 tracking-wide">
            You have our word—and more
          </h2>
          <p className="text-center text-md md:text-xl lg:text-xl text-zinc-700 max-w-3xl mx-auto">
            How do you know your money is actually making a difference? It’s simple: we show you.
            After all, seeing is believing — and we want you to believe in us.
          </p>

          <div className="flex gap-5 items-center justify-around mt-16">
            {/* circle 1 */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-16 md:h-24 lg:h-28 w-16 md:w-24 lg:w-28 rounded-full bg-yellow-300"></div>
              <h3 className="text-center mt-2 text-black font-medium text-[16px] md:text-lg lg:text-xl font-newsreader">
                We give 100%
              </h3>
              <p className="text-center mt-2 text-[13px] md:text-base lg:text-base max-w-52 text-zinc-600">
                100% of the money donated to charity: water goes directly to funding clean water
                projects.{" "}
              </p>
            </div>
            {/* circle 1 */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-16 md:h-24 lg:h-28 w-16 md:w-24 lg:w-28 rounded-full bg-yellow-300"></div>
              <h3 className="text-center mt-2 text-black font-medium text-[16px] md:text-lg lg:text-xl font-newsreader">
                We give 100%
              </h3>
              <p className="text-center mt-2 text-[13px] md:text-base lg:text-base max-w-52 text-zinc-600">
                100% of the money donated to charity: water goes directly to funding clean water
                projects.{" "}
              </p>
            </div>
            {/* circle 1 */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-16 md:h-24 lg:h-28 w-16 md:w-24 lg:w-28 rounded-full bg-yellow-300"></div>
              <h3 className="text-center mt-2 text-black font-medium text-[16px] md:text-lg lg:text-xl font-newsreader">
                We give 100%
              </h3>
              <p className="text-center mt-2 text-[13px] md:text-base lg:text-base max-w-52 text-zinc-600">
                100% of the money donated to charity: water goes directly to funding clean water
                projects.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Start Area Grid */}
        <section className="relative z-0 mt-16 md:mt-20 lg:mt-28">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[100dvw] bg-[#F8EED3] z-0"
            style={{ top: gridBgOffsetY, height: gridBgHeight }}
          ></div>

          {/* Start Grid Besar */}
          <div className="relative z-10 mx-auto w-full max-w-sm md:max-w-5xl lg:max-w-7xl p-3 md:p-5 lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* ================= CARD 1 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  Desa Pelopor
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href="/program/desa-pelopor"
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card*/}
              {/* ================= CARD 2 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  Beasiswa Bintang
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href="/program/beasiswa-bintang"
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card */}
              {/* ================= CARD 3 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  SEKOLAH BINTANG
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href=""
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card */}
              {/* ================= CARD 4 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  Ambulance Gratis
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href=""
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card 4 */}
              {/* ================= CARD 5 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  Desa Pelopor
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href=""
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card 5 */}
              {/* ================= CARD 6 ================= */}
              <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-5 flex flex-col">
                <h3 className="text-center font-newsreader text-xl md:text-2xl font-semibold text-white">
                  Desa Pelopor
                </h3>
                {/*
             {/* CTA / BOX PUTIH DI BAWAH */}
                <a
                  href=""
                  className="mt-auto block w-5/6 rounded-lg border border-black bg-white px-4 py-2 drop-shadow-lg
                       hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                >
                  {/*
              block:
              - Biar <a> bisa punya width/height dengan benar

              w-5/6:
              - Lebar box putih 5/6 dari card (lebih kecil dari card)
              - Kalau mau responsif:
                w-full sm:w-5/6

              px-4 py-2:
              - Padding dalam

              hover/active:
              - Efek interaksi
            */}
                  <h4 className="mt-1 font-newsreader text-lg  md:text-xl font-medium text-zinc-700">
                    Join the Spring <span className="ml-1 font-bold">→</span>
                  </h4>

                  <p className="text-sm font-light text-black">
                    Join our monthly giving community to give clean water.
                  </p>
                </a>
              </div>
              {/* End Card  */}
            </div>

            {/* Start grid kecil*/}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {/* ===== Small Card 1 ===== */}
                <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-4 md:px-3 md:py-5 flex flex-col">
                  <h3 className="text-center font-newsreader text-base md:text-xl font-semibold text-white">
                    Desa Pelopor
                  </h3>
                  <a
                    href=""
                    className="mt-auto block w-full md:w-5/6 mx-auto rounded-lg border border-black bg-white px-3 py-2 drop-shadow-lg hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                  >
                    <h4 className="mt-1 font-newsreader text-sm md:text-lg font-medium text-zinc-700">
                      Join the Spring <span className="ml-1 font-bold">-&gt;</span>
                    </h4>
                    <p className="text-xs md:text-sm font-light text-black">
                      Join our monthly giving community to give clean water.
                    </p>
                  </a>
                </div>

                {/* ===== Small Card 2 ===== */}
                <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-4 md:px-3 md:py-5 flex flex-col">
                  <h3 className="text-center font-newsreader text-base md:text-xl font-semibold text-white">
                    Desa Pelopor
                  </h3>
                  <a
                    href=""
                    className="mt-auto block w-full md:w-5/6 mx-auto rounded-lg border border-black bg-white px-3 py-2 drop-shadow-lg hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                  >
                    <h4 className="mt-1 font-newsreader text-sm md:text-lg font-medium text-zinc-700">
                      Join the Spring <span className="ml-1 font-bold">-&gt;</span>
                    </h4>
                    <p className="text-xs md:text-sm font-light text-black">
                      Join our monthly giving community to give clean water.
                    </p>
                  </a>
                </div>

                {/* ===== Small Card 3 ===== */}
                <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-4 md:px-3 md:py-5 flex flex-col">
                  <h3 className="text-center font-newsreader text-base md:text-xl font-semibold text-white">
                    Desa Pelopor
                  </h3>
                  <a
                    href=""
                    className="mt-auto block w-full md:w-5/6 mx-auto rounded-lg border border-black bg-white px-3 py-2 drop-shadow-lg hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                  >
                    <h4 className="mt-1 font-newsreader text-sm md:text-lg font-medium text-zinc-700">
                      Join the Spring <span className="ml-1 font-bold">-&gt;</span>
                    </h4>
                    <p className="text-xs md:text-sm font-light text-black">
                      Join our monthly giving community to give clean water.
                    </p>
                  </a>
                </div>

                {/* ===== Small Card 4 ===== */}
                <div className="w-full aspect-square rounded-md bg-[#E0C29A] px-3 py-4 md:px-3 md:py-5 flex flex-col">
                  <h3 className="text-center font-newsreader text-base md:text-xl font-semibold text-white">
                    Desa Pelopor
                  </h3>
                  <a
                    href=""
                    className="mt-auto block w-full md:w-5/6 mx-auto rounded-lg border border-black bg-white px-3 py-2 drop-shadow-lg hover:border-[#7FC248] active:border-2 transition duration-100 ease-in-out"
                  >
                    <h4 className="mt-1 font-newsreader text-sm md:text-lg font-medium text-zinc-700">
                      Join the Spring <span className="ml-1 font-bold">-&gt;</span>
                    </h4>
                    <p className="text-xs md:text-sm font-light text-black">
                      Join our monthly giving community to give clean water.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other ways to take action */}
        <section className="mx-auto w-full max-w-6xl mt-14 md:mt-28">
          <h2 className="text-center text-3xl md:text-4xl font-newsreader text-zinc-900">
            Other ways to take action
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
            {/* Bayar Zakat */}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Dollar Bag.svg"
                alt="Icon Bayar Zakat"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">Bayar Zakat</h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Tunaikan zakat maal, zakat fitrah, dan zakat lainnya dengan mudah, aman, dan
                terpercaya.
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Bayar Zakat Sekarang
              </a>
            </article>

            {/* Dukung Program Kebaikan*/}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Handshake Heart.svg"
                alt="Icon Dukung Program Kebaikan"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">
                Dukung Program Kebaikan
              </h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Bantu berbagai program sosial seperti pendidikan, kesehatan, dan bantuan
                kemanusiaan.
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Lihat Program
              </a>
            </article>

            {/* Fundraiser*/}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Commercial.svg"
                alt="Icon Dukung Program Kebaikan"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">Fundraiser</h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Mulai kampanye kebaikan Anda dan ajak orang lain berdonasi
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Mulai Fundraiser
              </a>
            </article>

            {/* Ajukan Bantuan*/}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Treatment.svg"
                alt="Icon Dukung Program Kebaikan"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">Ajukan Bantuan</h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Ajukan bantuan untuk diri sendiri atau orang lain yang membutuhkan.
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Ajukan Sekarang
              </a>
            </article>

            {/* Laporkan Penyaluran*/}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Inscription.svg"
                alt="Icon Dukung Program Kebaikan"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">
                Laporkan Penyaluran
              </h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Pantau transparansi dan akuntabilitas penyaluran zakat serta donasi Anda secara
                terbuka.
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Lihat Laporan
              </a>
            </article>

            {/* Laporkan Penyaluran*/}
            <article className="relative overflow-visible min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 pb-5 pt-12 md:px-5 md:pb-6 md:pt-14 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              {/* ICON MELAYANG LANGSUNG IMG */}
              <img
                src="/images/icon/Inscription.svg"
                alt="Icon Dukung Program Kebaikan"
                className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14"
              />

              {/* CONTENT */}
              <h3 className="text-2xl font-medium font-newsreader text-zinc-900">
                Legalitas & Transparansi
              </h3>

              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Kami berkomitmen menjalankan amanah secara profesional dan transparan.
              </p>

              <a
                href="#"
                className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4"
              >
                Lihat Detail
              </a>
            </article>
          </div>
        </section>
      </main>

      {/* bottom*/}
      <section className="w-full bg-[#F8EED3] py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h2 className="font-newsreader text-2xl font-medium text-zinc-900">
            You deserve to give with confidence
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-900">
            All of our operational expenses are funded by a private community of donors, so you can
            trust 100% of your donation will go directly to water solutions, every cent, every time.
            But we do not stop there. From our commitment to equipping local partners, to our tech,
            to the environmental sustainability of our water projects: "good enough" is never good
            enough for us. We are setting new standards for transparency and innovation. These
            companies and organizations agree.
          </p>
        </div>
      </section>
      {/* End */}
    </section>
  );
}
