import IndonesiaMap from "@/components/ui/indonesia-map";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header>
        <div className="w-full h-80 bg-black flex items-center justify-center">
          <h1 className="font-bold text-3xl">
            TAMAN <span className="text-[#7FC248]">ZAKAT</span>
          </h1>
        </div>
      </header>

      <main>
        {/* Page Fitur */}
        <section>
          <h2 className="font-medium text-black text-xl text-center mt-10">
            Semua dalam Satu Platform
          </h2>
          <p className="text-zinc-600 text-center mt-2 mb-10 max-w-xl mx-auto">
            Akses berbagai layanan zakat digital dalam satu pengalaman yang sederhana dan efisien.
          </p>

          {/* Grid 4 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* CARD */}
              <div className="bg-[#EAFCDC] rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7FC248] flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-[#13832C]">Zakat Online</h3>
                  <p className="text-xs text-[#707070] mt-1">
                    Akses berbagai layanan zakat digital dalam satu pengalaman yang sederhana.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-[#EAFCDC] rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7FC248] flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-[#13832C]">Program Sosial</h3>
                  <p className="text-xs text-[#707070] mt-1">
                    Penyaluran bantuan untuk masyarakat yang membutuhkan.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-[#EAFCDC] rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7FC248] flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-[#13832C]">Laporan Transparan</h3>
                  <p className="text-xs text-[#707070] mt-1">
                    Informasi distribusi dana yang terbuka dan terpercaya.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-[#EAFCDC] rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7FC248] flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-[#13832C]">Donasi Mudah</h3>
                  <p className="text-xs text-[#707070] mt-1">
                    Proses donasi cepat dan aman untuk semua kalangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Indonesia */}
        <section className="mt-18 px-4 sm:px-6 lg:px-8">
          <h1 className="text-black font-bold text-2xl">
            Sebaran Aksi <span className="font-bold text-[#71C935]">Taman Zakat</span>
          </h1>

          {/* Taruh Dibawah sini map nya */}
          <IndonesiaMap />

          {/* End map */}
        </section>

        {/* Tentang Kami */}
        <section className="mt-14">
          {/* title about us */}
          <div className="flex">
            <div className="border border-[#71C935] border-b-0 border-l-0 rounded-l-none rounded-b-none rounded-t-lg p-1 w-52 text-center">
              <h2 className="font-bold text-2xl text-black">
                Tentang <span className="font-bold text-2xl text-[#71C935]">Kami</span>
              </h2>
            </div>
            <div className="flex-1 border border-[#71C935] border-t-0 border-l-0 border-r-0 font-bold flex items-end">
              <h2 className="text-black ml-1 font-semibold text-lg leading-none mb-2">
                Yayasan Taman Zakat Indonesia{" "}
                <span className="font-light text-sm text-slate-600">- Berdiri Tahun 2018</span>
              </h2>
            </div>
          </div>

          {/* isi about us */}
          <div className="flex px-5 gap-4 mt-8">
            <div className="text-black w-5xl">
              <p>
                Lembaga Filantropi Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk
                Pengembangan Alqur’an, Pendidikan, Kesehatan dan Kemanusiaan. Lembaga Filantropi
                Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk Pengembangan
                Alqur’an, Pendidikan, Kesehatan dan Kemanusiaan. Kami Memfasilitasi perkembangan
                generasi yang penuh berkah dan Kami mempunyai mimpi bisa menjadi salah satu tulang
                punggung gerakan kebaikan ummat. Lembaga Filantropi Profesional dan terpercaya yang
                berfokus pada Sarana dakwah untuk Pengembangan Alqur’an, Pendidikan, Kesehatan dan
                Kemanusiaan
              </p>
              <p className="mt-2">
                Kami Memfasilitasi perkembangan generasi yang penuh berkah dan Kami mempunyai mimpi
                bisa menjadi salah satu tulang punggung gerakan kebaikan ummat. Lembaga Filantropi
                Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk Pengembangan
                Alqur’an, Pendidikan, Kesehatan dan Kemanusiaan Kami Memfasilitasi perkembangan
                generasi yang penuh berkah dan Kami mempunyai mimpi bisa menjadi salah satu tulang
                punggung gerakan kebaikan ummat. Lembaga Filantropi Profesional dan terpercaya yang
                berfokus pada Sarana dakwah untuk Pengembangan Alqur’an,
              </p>
            </div>

            <div className="w-80 h-52 bg-black rounded-md"></div>
          </div>
          <div className="px-5 mt-8">
            <a
              href=""
              className="inline-flex w-fit items-center text-white bg-[#71C935] px-3 py-2 rounded-md font-light text-md shadow-md hover:scale-105 transition-transform"
            >
              Selengkapnya ➜
            </a>
          </div>
        </section>

        {/* Program */}
        <section className="mt-36">
          {/* pembatas */}
          <div>
            {/* kiri */}
            <div className="flex justify-start">
              <div className="bg-[#71C935] w-2xl h-12 rounded-tr-[200px]"></div>
            </div>
            {/* kanan */}
            <div className="flex justify-end">
              <div className="bg-[#71C935] w-2xl h-12 rounded-bl-[200px]"></div>
            </div>
          </div>
          {/* grid */}
          <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-40 rounded-xl border border-[#D8EDC8] bg-[#F8FFF2] p-4 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-[#13832C]">Program {index + 1}</h3>
                  <p className="mt-2 text-sm text-[#5F6D57]">
                    Deskripsi singkat program akan ditampilkan di sini.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Berita */}
        <section className="mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-0 bottom-0 right-0 h-[2px] bg-[#71C935]"></div>
              <h2 className="relative z-10 rounded-sm border border-[#B8DDA1] bg-white px-6 py-1 text-3xl font-bold text-black sm:text-3xl">
                Berita <span className="text-[#71C935]">Taman Zakat</span>
              </h2>
            </div>

            <div className="mt-2 border-y border-[#71C935] py-3">
              <ul className="flex flex-wrap items-center justify-center gap-10 text-sm font-light text-black sm:gap-10 sm:text-lg">
                <li>Aksi Taman Zakat</li>
                <li>Report Program</li>
                <li>Annual Report</li>
                <li>Artikel</li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1.25fr]">
              <div className="space-y-4">
                <div className="h-[360px] rounded-xl border border-[#D1D1D1] bg-[#F4F4F4] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"></div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="h-44 rounded-xl border border-[#D1D1D1] bg-[#F4F4F4] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"></div>
                  <div className="h-44 rounded-xl border border-[#D1D1D1] bg-[#F4F4F4] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"></div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Penyaluran Bantuan Kemanusiaan",
                  "Gerakan Sejuta Alquran",
                  "Program Pendidikan Yatim",
                  "Laporan Kebaikan Bulanan",
                ].map((title) => (
                  <article key={title} className="grid grid-cols-[140px_1fr] items-start gap-3">
                    <div className="h-28 rounded-xl border border-[#D1D1D1] bg-[#F4F4F4] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"></div>
                    <div className="pt-1">
                      <h3 className="text-sm font-semibold text-black sm:text-lg">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#404040] sm:text-base">
                        Ringkasan berita dan aktivitas program ditampilkan pada area ini.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 mt-8">
            <a
              href=""
              className="inline-flex w-fit items-center text-white bg-[#71C935] px-14 py-2 rounded-md font-light text-md shadow-md hover:scale-105 transition-transform"
            >
              Lihat Lebih Banyak ➜
            </a>
          </div>
        </section>
      </main>
      <div className="mb-64"></div>
      {/* Section End */}
    </section>
  );
}
