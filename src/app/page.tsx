import Image from "next/image";
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* title about us */}
            <div className="flex items-end">
              <div className="rounded-t-lg border border-[#71C935] border-b-0 px-3 py-1 sm:px-4">
                <h2 className="text-2xl font-bold leading-none text-black sm:text-3xl">
                  Tentang <span className="text-[#71C935]">Kami</span>
                </h2>
              </div>
              <div className="mb-px h-px flex-1 bg-[#71C935]"></div>
            </div>

            {/* isi about us */}
            <div className="mt-6 grid items-start gap-6 rounded-xl bg-[#F5F5F5] p-4 sm:grid-cols-[minmax(0,1fr)_300px] sm:p-6">
              <div className="max-w-4xl break-words text-black text-sm leading-relaxed sm:text-base">
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
                <p className="mt-3">
                Kami Memfasilitasi perkembangan generasi yang penuh berkah dan Kami mempunyai mimpi
                bisa menjadi salah satu tulang punggung gerakan kebaikan ummat. Lembaga Filantropi
                Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk Pengembangan
                Alqur’an, Pendidikan, Kesehatan dan Kemanusiaan Kami Memfasilitasi perkembangan
                generasi yang penuh berkah dan Kami mempunyai mimpi bisa menjadi salah satu tulang
                punggung gerakan kebaikan ummat. Lembaga Filantropi Profesional dan terpercaya yang
                berfokus pada Sarana dakwah untuk Pengembangan Alqur’an,
                </p>
                <div className="mt-8">
                  <a
                    href=""
                    className="inline-flex w-fit items-center rounded-md bg-[#71C935] px-5 py-2 text-white shadow-md transition-transform hover:scale-105"
                  >
                    Selengkapnya ➜
                  </a>
                </div>
              </div>

              <div className="h-52 w-full rounded-md bg-black sm:h-64"></div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="mt-36">
          {/* pembatas */}
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[clamp(5.25rem,16vw,6.5rem)] w-full">
              <div className="absolute left-0 top-0 flex h-[clamp(2.6rem,7vw,3.5rem)] w-[58%] items-center justify-center rounded-tr-[200px] bg-[#71C935] px-3">
                <h2 className="text-[clamp(1rem,3.8vw,2.25rem)] font-bold text-white">Program</h2>
              </div>
              <div className="absolute bottom-0 right-0 flex h-[clamp(2.6rem,7vw,3.5rem)] w-[58%] items-center justify-center rounded-bl-[200px] bg-[#71C935] px-3">
                <h2 className="text-[clamp(1rem,3.8vw,2.25rem)] font-bold text-white">Unggulan</h2>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/icon/taza bulat.png"
                  alt="Ikon bulat Taza"
                  width={96}
                  height={96}
                  className="h-[clamp(4rem,11vw,6rem)] w-[clamp(4rem,11vw,6rem)] object-contain"
                />
              </div>
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

        {/* Section Artikel */}
      </main>
      <div className="mb-64"></div>
      {/* Section End */}
    </section>
  );
}
