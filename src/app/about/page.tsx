"use client";
import { useState } from "react";
import Image from "next/image";

/* ───────── tab data ───────── */
const tabs = ["Sejarah", "Visi Misi", "Legalitas", "Profile"] as const;
type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { topText: React.ReactNode; bottomText: React.ReactNode }> = {
  Sejarah: {
    topText: (
      <>
        <p>
          Semangat untuk mengalirkan kebaikan dari para donatur kepada penerima manfaat menjadi landasan Taman Zakat Indonesia untuk bergerak sebagai lembaga filantropi profesional dan tepercaya. Berfokus pada sarana dakwah untuk pengembangan Alquran, pendidikan, kesehatan, dan kemanusiaan, kami memfasilitasi perkembangan generasi yang penuh berkah.
        </p>
        <p className="mt-6">
          Semangat untuk mengalirkan kebaikan dari para donatur kepada penerima manfaat menjadi landasan Taman Zakat Indonesia untuk bergerak sebagai lembaga filantropi profesional dan tepercaya. Berfokus Semangat untuk mengalirkan kebaikan dari para donatur kepada penerima manfaat menjadi landasan Taman Zakat Indonesia untuk bergerak sebagai lembaga filantropi profesional dan tepercaya.
        </p>
      </>
    ),
    bottomText: (
      <p>
        Berfokus pada sarana dakwah untuk pengembangan Alquran, pendidikan, kesehatan, dan kemanusiaan, kami memfasilitasi perkembangan generasi yang penuh berkah.pada sarana dakwah untuk pengembangan Alquran, pendidikan, kesehatan, dan kemanusiaan, kami memfasilitasi perkembangan generasi yang penuh berkah.
      </p>
    ),
  },
  "Visi Misi": {
    topText: (
      <>
        <p>
          Visi kami adalah menjadi lembaga pengelola zakat yang amanah, profesional, dan berdampak luas bagi umat. Misi kami meliputi:
        </p>
        <ol className="list-decimal pl-5 mt-4 space-y-2">
          <li>Mengoptimalkan penghimpunan zakat, infaq, sedekah dan dana sosial kemanusiaan.</li>
          <li>Menyalurkan dana secara tepat sasaran kepada mustahik.</li>
          <li>Mengembangkan program pemberdayaan masyarakat yang berkelanjutan.</li>
          <li>Membangun kepercayaan publik melalui transparansi dan akuntabilitas.</li>
        </ol>
      </>
    ),
    bottomText: (
      <p>
        Kami terus berinovasi dalam menjalankan program-program dakwah untuk Pengembangan Al-Qur&apos;an, Pendidikan, Kesehatan dan Kemanusiaan. Sebagai lembaga filantropi profesional, kami berkomitmen untuk menjadi tulang punggung gerakan kebaikan ummat dengan memfasilitasi perkembangan generasi yang penuh berkah.
      </p>
    ),
  },
  Legalitas: {
    topText: (
      <>
        <p>
          Taman Zakat Indonesia merupakan lembaga yang telah resmi terdaftar dan memiliki legalitas yang lengkap:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>SK Kemenkumham RI: AHU-0012345.AH.01.04</li>
          <li>NPWP Lembaga: 00.000.000.0-000.000</li>
          <li>Terdaftar di BAZNAS (Badan Amil Zakat Nasional)</li>
          <li>Anggota FOZ (Forum Zakat)</li>
          <li>Predikat WTP (Wajar Tanpa Pengecualian) dari auditor independen</li>
          <li>SK Gubernur Jawa Timur tentang Izin Operasional LAZ</li>
        </ul>
      </>
    ),
    bottomText: (
      <p>
        Seluruh kegiatan penghimpunan dan penyaluran dana dilakukan sesuai dengan peraturan perundang-undangan yang berlaku dan diaudit secara berkala oleh akuntan publik independen.
      </p>
    ),
  },
  Profile: {
    topText: (
      <>
        <p>
          Taman Zakat Indonesia didirikan pada tahun 2016 dengan semangat untuk menjadi lembaga filantropi yang profesional dan terpercaya. Berawal dari kepedulian terhadap kondisi masyarakat, kami terus berkembang dan berinovasi dalam mengelola dana zakat, infaq, sedekah, dan dana sosial kemanusiaan.
        </p>
        <p className="mt-6">
          Dalam perjalanannya, Taman Zakat Indonesia telah mendapatkan pengakuan dari berbagai pihak, termasuk BAZNAS, FOZ (Forum Zakat), dan mendapatkan predikat WTP (Wajar Tanpa Pengecualian) yang merupakan bukti komitmen kami terhadap transparansi dan akuntabilitas.
        </p>
      </>
    ),
    bottomText: (
      <p>
        Kantor Pusat kami berlokasi di Jl. Wisma Trosobo IV No. 33, Kel. Trosobo, Kec. Taman, Kab. Sidoarjo, Prov. Jawa Timur. Kami juga memiliki jaringan layanan yang tersebar di berbagai wilayah Indonesia.
      </p>
    ),
  },
};

/* ───────── milestone data ───────── */
const milestones = [
  {
    year: "2018",
    title: "Pendirian Taman Zakat",
    color: "#5DA630",
    align: "left" as const,
    logoRender: () => (
      <div className="py-4 px-6 md:pr-10">
        <Image src="/images/icon/Taman Zakat Logo.svg" alt="Taman Zakat" width={180} height={80} className="relative z-10 w-32 md:w-40" />
      </div>
    )
  },
  {
    year: "2019",
    title: "Masuk Dalam Keanggotaan\nFOZ - FORUM ZAKAT",
    color: "#E23E3E",
    align: "right" as const,
    logoRender: () => (
      <div className="py-4 px-6 md:pr-10">
        <Image src="/images/icon/Forum Zakat.svg" alt="FOZ" width={130} height={60} className="w-24 md:w-32 object-contain" />
      </div>
    )
  },
  {
    year: "2020",
    title: "Rekomendasi LAZ\nProvinsi dari BAZNAS",
    color: "#5DA630",
    align: "left" as const,
    logoRender: () => (
      <div className="py-4 px-6 md:pr-10">
        <Image src="/images/icon/Logo baznas.svg" alt="BAZNAS" width={140} height={100} className="relative z-10 w-28 md:w-40" />
      </div>
    )
  },
  {
    year: "2021",
    title: "LAZ Provinsi\ndari Kemenag",
    color: "#5DA630",
    align: "right" as const,
    logoRender: () => (
      <div className="flex items-center justify-center">
         <Image src="/images/icon/iklas_beramal-removebg-preview 1.svg" alt="Kemenag" width={120} height={120} className="w-24 md:w-32 object-contain" />
      </div>
    )
  },
  {
    year: "2022",
    title: "Rekomendasi LAZ\nProvinsi dari BAZNAS",
    color: "#FDBA12",
    titleColor: "#000000",
    align: "left" as const,
    logoRender: () => (
      <div className="flex items-center justify-center">
         <Image src="/images/icon/WTP.svg" alt="WTP" width={120} height={120} className="w-24 md:w-32 object-contain" />
      </div>
    )
  },
];

/* ───────── legal data ───────── */
const legalCards = [
  { label: "Akta Yayasan", color: "#5DA630" },
  { label: "SK Kemenkumham", color: "#7FC248" },
  { label: "SK Gubernur", color: "#1F4E27" },
  { label: "NPWP", color: "#D4A843" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Sejarah");

  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      {/* HERO */}
      <header className="relative w-full h-[480px] md:h-[580px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/gambardetaile/Gemini_Generated_Image_iu64lviu64lviu64 1.svg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Container for the Card */}
        <div className="relative z-20 mx-auto w-full max-w-[1240px] h-full flex items-center justify-center md:justify-end px-4 sm:px-6 lg:px-8">
          {/* Card */}
          <div className="bg-[#F9F9F9] p-8 md:p-12 w-full max-w-[460px] shadow-2xl flex flex-col items-center text-center">
            <h1 className="text-black text-[24px] md:text-[28px] font-bold leading-tight">
              The craziest thing we can<br />do is nothing.
            </h1>
            
            <div className="mt-6 text-zinc-800 text-[11px] md:text-xs font-bold tracking-wider uppercase flex flex-col items-center">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-zinc-800 block"></span>
                <span>PAK SLAMET, FOUNDER & CEO OF</span>
              </div>
              <span className="mt-1">TAMAN ZAKAT</span>
            </div>
            
            <p className="mt-5 text-zinc-700 text-sm md:text-[15px] leading-relaxed">
              Slamet journey from nightclub promoter to founding a global nonprofit is proof that anyone can make a difference. Join his mission to bring clean and safe water to everyone on earth.
            </p>
            
            <button className="mt-8 bg-[#FDBA12] hover:bg-[#E5A810] text-black font-semibold px-8 py-3 rounded-sm transition-colors duration-200">
              Small Kindness
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* TONGGAK PERJALANAN  (Milestones) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-black">
              Tonggak Perjalanan
            </h2>
            <p className="text-center text-sm md:text-base text-zinc-500 mt-2">
              Milestone Penting dalam Perjalanan Kami Organisasi
            </p>

            {/* timeline */}
            <div className="relative mt-20 max-w-3xl mx-auto">
              {/* vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-zinc-300 hidden md:block" />

              <div className="flex flex-col gap-16 md:gap-24">
                {milestones.map((m) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row items-center justify-between w-full`}
                  >
                    {/* Left Side Content */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-14">
                      {m.align === "left" ? (
                        m.logoRender()
                      ) : (
                        <div className="flex flex-col text-center md:text-right mt-6 md:mt-0">
                           <span className="text-xl md:text-2xl font-bold" style={{ color: m.color }}>
                             {m.year}
                           </span>
                           <h3 className="text-sm md:text-base whitespace-pre-line mt-1 font-semibold leading-relaxed text-black">
                             {m.title}
                           </h3>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div 
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 z-10" 
                      style={{ borderColor: m.color }} 
                    />

                    {/* Right Side Content */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-14">
                      {m.align === "left" ? (
                         <div className="flex flex-col text-center md:text-left mt-6 md:mt-0">
                           <span className="text-xl md:text-2xl font-bold" style={{ color: m.color }}>
                             {m.year}
                           </span>
                           <h3 className="text-sm md:text-base whitespace-pre-line mt-1 font-semibold leading-relaxed text-black">
                             {m.title}
                           </h3>
                        </div>
                      ) : (
                        m.logoRender()
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MENGENAL LEBIH DEKAT  (Tabs) */}
        <section id="mengenal" className="py-16 md:py-20 bg-[#FAFAFA]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[26px] md:text-3xl font-bold text-black font-[var(--font-newsreader)]">
              Mengenal Lebih Dekat
            </h2>
            <p className="text-center text-sm md:text-base text-black mt-2 font-medium">
              Semua yang ingin Anda ketahui tentang Taman Zakat
            </p>

            {/* Tab buttons */}
            <div className="mt-12 w-full flex justify-between border-b-[2px] border-[#71C935] overflow-x-auto [scrollbar-width:none]">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 sm:px-8 pb-3 text-[15px] md:text-lg font-semibold whitespace-nowrap outline-none flex-auto text-center ${
                    activeTab === t
                      ? "text-black"
                      : "text-zinc-700 hover:text-black"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mt-10">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                {/* Side Image */}
                <div className="h-56 sm:h-[260px] w-full md:w-[320px] lg:w-[380px] bg-[#D9D9D9] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl md:text-2xl">Gambar</span>
                </div>

                {/* Top Text Content */}
                <div className="text-black text-[13px] md:text-[15px] leading-relaxed flex-1">
                  {tabContent[activeTab].topText}
                </div>
              </div>

              {/* Bottom Full-width Text */}
              <div className="mt-6 md:mt-8 text-black text-[13px] md:text-[15px] leading-relaxed">
                {tabContent[activeTab].bottomText}
              </div>
            </div>
          </div>
        </section>

        {/* PENGHARGAAN TAMAN ZAKAT */}
        <section className="bg-[#32446B] py-20 relative mt-16 pb-28">
          {/* Title Badge Overlapping */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[400px]">
            <div className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] px-6 py-4 border-b-4 border-zinc-200 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6B96D9]">
                Penghargaan Taman Zakat
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-14">
            {/* Awards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/images/gambardetaile/fundraising award.jpg"
                  alt="Fundraising Award"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform">
                <Image
                  src="/images/gambardetaile/wtp award.jpeg"
                  alt="WTP Award 2023"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform bg-white">
                <Image
                  src="/images/gambardetaile/aww 1.png"
                  alt="WTP Award 2022"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL FORMAL */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
            <h2 className="text-center text-[28px] md:text-4xl font-semibold text-black font-[var(--font-newsreader)] tracking-wide">
              Legal <span className="text-[#8CC63F] font-normal italic">Formal</span>
            </h2>
          </div>

          <div className="w-full relative py-4">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row items-start justify-start relative w-full gap-0 px-4 md:px-0">
              {/* Left Box (Sticky Left) */}
              <div className="w-full md:w-[45%] lg:w-[40%] relative z-10">
                <div className="bg-[#D1F4B9] text-center text-black py-3 text-lg sm:text-[20px] shadow-[2px_0_5px_rgba(0,0,0,0.05)] rounded-r-xl font-[var(--font-inter)] tracking-wide relative border-r-2 border-white/40">
                  <div className="hidden md:block absolute top-0 bottom-0 right-full w-[100vw] bg-[#D1F4B9] -z-10" />
                  Akta Yayasan
                </div>
                <div className="mt-6 text-[13px] md:text-[14px] text-black pl-2 md:pl-[15%] lg:pl-[20%]">
                  <h4 className="font-bold text-[15px] md:text-[16px]">Taman Zakat Indonesia</h4>
                  <p className="mb-3 text-zinc-600 mt-0.5">Notaris Wahyu Hidayat, SH., M.Kn</p>
                  <ul className="text-[#888] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1F4B9] mt-1.5 flex-shrink-0" />
                      <span>Akta No.34, Tanggal Berdiri 29 Desember 2018</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1F4B9] mt-1.5 flex-shrink-0" />
                      <span>Akta Perubahan No. 01 Tanggal 01 Februari 2021</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="hidden md:block w-12 lg:w-20 relative z-0 mt-[26px]">
                <div className="w-full h-[3px] bg-[#D1F4B9]"></div>
              </div>

              {/* Right Box (Past midline) */}
              <div className="w-full md:w-[40%] lg:w-[35%] relative z-10 pt-4 md:pt-0">
                <div className="bg-[#D1F4B9] text-center text-black py-3 text-lg sm:text-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-md font-[var(--font-inter)] tracking-wide">
                  LKS Dinas Sosial
                </div>
                <div className="mt-6 text-[13px] md:text-[14px] text-black pl-2">
                  <ul className="text-[#888] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1F4B9] mt-1.5 flex-shrink-0" />
                      <span>Ijin LKS Dinsos. 466.4/2149/438.5.6/2019</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row items-start justify-end relative w-full gap-0 px-4 md:px-0 mt-8 md:mt-12">
              {/* Left Box (Past midline) */}
              <div className="w-full md:w-[40%] lg:w-[35%] relative z-10 pb-4 md:pb-0">
                <div className="bg-[#E23E3E] text-center text-white py-3 text-lg sm:text-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-md font-[var(--font-inter)] tracking-wide">
                  SK Anggota FOZ
                </div>
                <div className="mt-6 text-[13px] md:text-[14px]">
                  <ul className="text-[#888] space-y-2 flex flex-col items-center md:items-end md:pr-4">
                    <li className="flex items-center gap-2 justify-end text-right">
                      <span>Ijin LKS Dinsos. 466.4/2149/438.5.6/2019</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E23E3E] flex-shrink-0" />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="hidden md:block w-12 lg:w-20 relative z-0 mt-[26px]">
                <div className="w-full h-[3px] bg-[#E23E3E]"></div>
              </div>

              {/* Right Box (Sticky Right) */}
              <div className="w-full md:w-[45%] lg:w-[40%] relative z-10">
                <div className="bg-[#E23E3E] text-center text-white py-3 text-lg sm:text-[20px] shadow-[-2px_0_5px_rgba(0,0,0,0.05)] rounded-l-xl font-[var(--font-inter)] tracking-wide relative border-l-2 border-white/20">
                  <div className="hidden md:block absolute top-0 bottom-0 left-full w-[100vw] bg-[#E23E3E] -z-10" />
                  SK. KEMENKUMHAM
                </div>
                <div className="mt-6 text-[13px] md:text-[14px]">
                  <ul className="text-[#888] space-y-2 flex flex-col items-center md:items-end md:pr-[15%] lg:pr-[20%]">
                    <li className="flex items-center gap-2 justify-end text-right">
                      <span>Kemenkumham AHU-0000016.AH.01.04 Tahun 2019</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E23E3E] flex-shrink-0" />
                    </li>
                    <li className="flex items-center gap-2 justify-end text-right">
                      <span>Kemenkumham AHU-AH.01.06.0008536 Tahun 2021</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E23E3E] flex-shrink-0" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row items-start justify-start relative w-full gap-0 px-4 md:px-0 mt-8 md:mt-12">
              {/* Left Box (Sticky Left) */}
              <div className="w-full md:w-[45%] lg:w-[40%] relative z-10">
                <div className="bg-[#FBC02D] text-center text-black py-3 text-lg sm:text-[20px] shadow-[2px_0_5px_rgba(0,0,0,0.05)] rounded-r-xl font-[var(--font-inter)] font-semibold tracking-wide relative border-r-2 border-white/40">
                  <div className="hidden md:block absolute top-0 bottom-0 right-full w-[100vw] bg-[#FBC02D] -z-10" />
                  SK. KEMENKUMHAM
                </div>
                <div className="mt-6 text-[13px] md:text-[14px] text-black pl-2 md:pl-[15%] lg:pl-[20%]">
                  <ul className="text-[#888] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FBC02D] mt-1.5 flex-shrink-0" />
                      <span>Nomor 245 Tahun 2021 dari Kemenag Republik Indonesia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA - DONATUR CARE */}
        <section className="w-full bg-[#32446B]">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pl-4 md:pl-0 pr-4 md:pr-8">
              
              {/* Left Side: Avatar and Text */}
              <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 w-full md:w-auto text-center md:text-left">
                {/* Circle Avatar */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#D9D9D9] flex-shrink-0" />
                
                {/* Text Content */}
                <div className="flex flex-col mt-2 md:mt-0">
                  <h3 className="text-3xl md:text-[34px] font-bold text-white mb-1.5 font-[var(--font-inter)]">
                    Donatur Care
                  </h3>
                  <p className="text-white text-[15px] md:text-[17px] max-w-lg leading-[1.4]">
                    Butuh bantuan atau informasi lainnya? Jangan<br className="hidden md:block" /> sungkan untuk menghubungi kami!
                  </p>
                </div>
              </div>

              {/* Right Side: Button */}
              <div className="flex-shrink-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="bg-white text-[#555] font-bold py-3.5 px-8 rounded-md shadow-sm flex flex-col items-center justify-center text-[15px] md:text-[16px] transition-transform hover:-translate-y-1 hover:shadow-lg leading-snug tracking-wide"
                >
                  <span className="block">Hubungi Via</span>
                  <span className="block">Whatsapp</span>
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
