export default function ProgramPage() {
  const gridBgOffsetY = "260px";
  const gridBgHeight = "970px";

  return (
    <section className="min-h-screen w-full bg-[#faf7f0] overflow-x-hidden">
      {/* header */}
      <header className="w-full flex flex-col md:flex-row min-h-[560px] md:min-h-[430px] lg:min-h-[500px]">
        {/* Gambar */}
        <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto bg-gray-300"></div>
        {/* text */}
        <div className="w-full md:w-1/2 bg-[#30353B] flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 sm:py-10 md:px-12 lg:px-16 text-center md:text-left items-center md:items-start">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light font-newsreader pb-2 border-b-2 border-[#7FC248]">
            It's time to take action.
          </h1>
          <p className="text-white text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maiores porro
            quaerat, vitae sed odio maxime facilis voluptatum alias consectetur veritatis quod ad.
          </p>
        </div>
      </header>
      {/* content */}
      <main className="bg-[#FAF7F0] w-full md:py-16 lg:py-20 px-5">
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
              {/* End Card 1 */}
              {/* ================= CARD 2 ================= */}
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
              {/* End Card 2 */}
              {/* ================= CARD 3 ================= */}
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
              {/* End Card 3 */}
              {/* ================= CARD 4 ================= */}
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M9 7.5h4a2.5 2.5 0 1 1 0 5H11a2.5 2.5 0 1 0 0 5h4" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Bayar Zakat</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Tunaikan zakat maal, zakat fitrah, dan zakat lainnya dengan mudah, aman, dan terpercaya.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Bayar Zakat Sekarang
              </a>
            </article>

            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.5c0-2 1.5-3.5 3.5-3.5 1.2 0 2.3.6 3 1.6.7-1 1.8-1.6 3-1.6 2 0 3.5 1.5 3.5 3.5 0 3.4-4.6 6.4-6.5 7.5-1.9-1.1-6.5-4.1-6.5-7.5z" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Dukung Program Kebaikan</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Bantu berbagai program sosial seperti pendidikan, kesehatan, dan bantuan kemanusiaan.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Lihat Program
              </a>
            </article>

            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h9M4 15h9M16 9l4-2v10l-4-2V9z" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Fundraiser</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Mulai kampanye kebaikan Anda dan ajak orang lain berdonasi untuk dampak yang lebih luas.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Mulai Fundraiser
              </a>
            </article>

            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M8 9h8M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Ajukan Bantuan</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Ajukan bantuan untuk diri sendiri atau orang lain yang sedang membutuhkan.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Ajukan Sekarang
              </a>
            </article>

            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h10v10H5zM18 18l-4-4M9 9h2M9 12h4" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Laporan Penyaluran</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Pantau transparansi dan akuntabilitas penyaluran zakat serta donasi Anda secara terbuka.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Lihat Laporan
              </a>
            </article>

            <article className="min-h-[185px] rounded-sm border border-zinc-200 bg-[#F7F7F7] px-4 py-4 md:px-5 md:py-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-center flex flex-col items-center">
              <svg className="h-8 w-8 text-[#7FC248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v5c0 5.2-3.3 8.6-8 10-4.7-1.4-8-4.8-8-10V6l8-3zM9.5 12.5l1.8 1.8 3.3-3.8" />
              </svg>
              <h3 className="mt-3 text-2xl font-medium font-newsreader text-zinc-900">Legalitas & Transparansi</h3>
              <p className="mt-2 text-sm leading-snug text-zinc-700">
                Kami berkomitmen menjalankan amanah secara profesional dan transparan.
              </p>
              <a href="#" className="mt-auto pt-3 text-sm font-medium text-zinc-900 underline decoration-[#7FC248] underline-offset-4">
                Lihat Detail
              </a>
            </article>
          </div>
        </section>
      </main>

      {/* bottom*/}
      <section className="w-full bg-[#F8EED3] py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h2 className="font-newsreader text-4xl md:text-5xl font-medium text-zinc-900">
            You deserve to give with confidence
          </h2>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-zinc-900">
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
