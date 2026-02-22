import Image from "next/image";
import Link from "next/link";

const infoLinks = ["Profile Lembaga", "Berita", "Artikel", "Mitra Korporat"];

export default function Footer() {
  return (
    <footer className="w-full text-zinc-900">
      <section className="w-full bg-[#1F4E27]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
            <div>
              <h2 className="text-2xl leading-[1.05] font-medium text-white md:text-3xl">
                Stay in touch
              </h2>
              <p className="mt-4 text-lg text-zinc-100/95 md:text-xl md:leading-[1.1]">
                xxxxxxxxxxxxxxxxxxxxxxxx
                <br />
                xxxxxxxxxxxxxxxxxxxx
              </p>
            </div>

            <form className="rounded-md bg-white p-2 shadow-sm">
              <label htmlFor="footer-email" className="sr-only">
                Enter Your Email Addres
              </label>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-zinc-200">
                  <svg
                    className="h-6 w-6 text-zinc-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 7 9-7M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
                  </svg>
                </div>

                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter Your Email Addres"
                  className="h-10 w-full min-w-0 border-none bg-transparent px-1 text-lg text-zinc-600 outline-none placeholder:text-zinc-500 md:text-[34px] md:placeholder:text-[34px]"
                />

                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-full bg-[#7FC248] px-6 text-sm font-semibold text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition hover:brightness-95"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#ECECEC]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-8 md:px-10 md:py-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-12">
            <div className="xl:col-span-5">
              <div className="flex items-start gap-5">
                <Image
                  src="/images/icon/Taman zakat hijau hitam.png"
                  alt="Logo Taman Zakat"
                  width={260}
                  height={120}
                  className="h-20 w-auto md:h-24"
                />
                <div className="hidden h-24 w-px bg-zinc-300 md:block" />
              </div>

              <h3 className="mt-4 text-[20px] font-bold text-[#1F5E2E] md:text-[44px] md:leading-tight">
                Yayasan Taman Zakat Indonesia
              </h3>

              <div className="relative mt-4 h-px bg-zinc-500 md:mt-5">
                <span className="absolute -right-1 -top-[3px] h-[6px] w-[6px] rounded-full bg-black" />
              </div>

              <p className="mt-4 max-w-xl text-[36px] leading-[1.25] text-zinc-900 md:text-[42px] md:leading-[1.2]">
                Lembaga Filantropi Profesional dan terpercaya yang berfokus pada Sarana dakwah untuk
                Pengembangan Alqur&apos;an, Pendidikan, Kesehatan dan Kemanusiaan.
              </p>

              <div className="mt-7 flex items-center gap-6">
                <span className="h-10 w-10 rounded-full bg-[#FF1F1F]" />
                <span className="h-10 w-10 rounded-full bg-[#2E70C9]" />
                <span className="h-10 w-10 rounded-full bg-[#A5E248]" />
                <span className="h-10 w-10 rounded-full bg-[#BD35D1]" />
              </div>
            </div>

            <div className="xl:col-span-3">
              <h3 className="text-[48px] font-bold leading-tight text-zinc-900">Informasi Kami</h3>
              <div className="relative mt-4 h-px bg-zinc-500">
                <span className="absolute -right-1 -top-[3px] h-[6px] w-[6px] rounded-full bg-black" />
              </div>
              <ul className="mt-4 space-y-3">
                {infoLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[40px] leading-none text-zinc-900 hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="xl:col-span-4">
              <h3 className="text-[48px] font-bold leading-tight text-zinc-900">Kantor Layanan</h3>
              <div className="relative mt-4 h-px bg-zinc-500">
                <span className="absolute -right-1 -top-[3px] h-[6px] w-[6px] rounded-full bg-black" />
              </div>

              <p className="mt-4 max-w-lg text-[33px] leading-[1.2] text-zinc-900">
                Kantor Pusat : Jl. Wisma Trosobo IV No. 33 , Kel. Trosobo, Kec. Taman, Kab. Sidoarjo,
                Prov. Jawa Timur
              </p>

              <div className="mt-5 flex h-[200px] w-full items-center justify-center bg-black">
                <span className="text-[48px] font-bold text-white">MAP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-4">
        <p className="text-center text-[26px] text-zinc-100">
          © 2026 Taman Zakat. All rights reserved. Spreading kindness everywhere.
        </p>
      </section>
    </footer>
  );
}
