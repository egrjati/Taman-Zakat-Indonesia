"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BADGE_TEXT = "Taman Zakat - Indonesia - taza -";

export default function BidangPendidikanPage() {
  const [animateBadge, setAnimateBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBadge(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes borderWiggle {
          0%   { transform: translateX(-4px) rotate(-2deg); }
          50%  { transform: translateX(-4px) rotate(2deg); }
          100% { transform: translateX(-4px) rotate(-2deg); }
        }
        .border-wiggle {
          animation: borderWiggle 2.5s ease-in-out infinite;
          transform-origin: center center;
        }

        @keyframes badgeBounce {
          0%   { transform: translateX(500px) translateY(-80px); opacity: 0; }
          5%   { opacity: 1; }
          12%  { transform: translateX(400px) translateY(-60px); }
          18%  { transform: translateX(340px) translateY(-20px); }
          24%  { transform: translateX(280px) translateY(0); }
          28%  { transform: translateX(250px) translateY(-20px); }
          32%  { transform: translateX(220px) translateY(-42px); }
          36%  { transform: translateX(190px) translateY(-48px); }
          40%  { transform: translateX(160px) translateY(-42px); }
          44%  { transform: translateX(135px) translateY(-20px); }
          48%  { transform: translateX(110px) translateY(0); }
          51%  { transform: translateX(95px) translateY(-10px); }
          54%  { transform: translateX(80px) translateY(-22px); }
          57%  { transform: translateX(65px) translateY(-24px); }
          60%  { transform: translateX(52px) translateY(-22px); }
          63%  { transform: translateX(40px) translateY(-10px); }
          66%  { transform: translateX(30px) translateY(0); }
          70%  { transform: translateX(22px) translateY(-8px); }
          74%  { transform: translateX(15px) translateY(-10px); }
          78%  { transform: translateX(10px) translateY(-8px); }
          82%  { transform: translateX(5px) translateY(0); }
          86%  { transform: translateX(3px) translateY(-3px); }
          90%  { transform: translateX(2px) translateY(-4px); }
          94%  { transform: translateX(1px) translateY(-3px); }
          97%  { transform: translateX(0) translateY(0); }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
        .badge-bounce {
          animation: badgeBounce 1.8s linear forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }
      `}} />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full flex items-end md:items-center min-h-[500px] md:min-h-[600px] pt-48 pb-10 md:py-24">
         {/* BACKGROUND IMAGE FILL */}
         <div className="absolute inset-0 z-0">
            <Image 
               src="/images/gambardetaile/hero bidang pendidikan.svg" 
               alt="Background Bidang Pendidikan" 
               fill 
               className="object-cover object-[15%_center] md:object-center"
               priority
            />
         </div>

         <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 flex justify-center md:justify-end">
            {/* CARD RIGHT */}
            <div className="bg-white rounded-2xl md:rounded-md w-full sm:max-w-[420px] p-5 sm:p-6 md:p-8 lg:p-10 relative border border-green-50 shadow-[15px_-10px_30px_rgba(127,194,72,0.25)] md:shadow-[25px_-15px_40px_rgba(127,194,72,0.25)] mt-12 md:mt-0">
               {/* Badge Taza (Top Left corner) */}
               <div className={`absolute -top-6 -left-3 md:-top-12 md:-left-12 z-20 ${animateBadge ? 'badge-bounce' : 'opacity-0'}`}>
                 <div className="relative h-[70px] w-[70px] md:h-[100px] md:w-[100px]">
                   <div aria-hidden className="absolute -top-[2px] left-[2px] h-full w-full rounded-full border border-black bg-transparent rotate-[-6deg]" />
                   <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-black bg-[#8cc63f]">
                     <svg viewBox="0 0 300 300" aria-hidden className="absolute inset-0 h-full w-full fill-black transform -rotate-12">
                       <defs>
                         <path id="pendidikan-badge-path" d="M150,150 m0,-112 a112,112 0 1,1 0,224 a112,112 0 1,1 0,-224" />
                       </defs>
                       <text fontSize="28" fontWeight="500" className="font-newsreader">
                         <textPath href="#pendidikan-badge-path" startOffset="50%" textAnchor="middle" textLength="680" lengthAdjust="spacing">
                           {BADGE_TEXT}
                         </textPath>
                       </text>
                     </svg>
                     <div className="relative z-10 flex h-[30px] w-[30px] md:h-[45px] md:w-[45px] items-center justify-center rounded-full border-[2px] border-black bg-[#8cc63f]">
                       <Image src="/images/icon/hitam logo taza 1.svg" alt="Logo Taza" width={36} height={36} className="h-[18px] w-auto md:h-[28px]" />
                     </div>
                   </div>
                 </div>
               </div>
               
               <h1 className="text-[26px] md:text-[32px] font-newsreader font-bold text-black mb-5 mt-4 ml-6 md:ml-8 text-left drop-shadow-sm">
                 Bidang <span className="text-[#8cc63f]">Pendidikan</span>
               </h1>

               <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 ml-2 md:ml-8">
                 {[
                   "Beasiswa Bintang",
                   "Peduli Yatim",
                   "Kajian Parenting",
                   "Guru Teladan",
                   "Mitigasi Bencana"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 md:gap-4">
                     <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full bg-[#1e5b3a] flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-sm">
                       <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-white stroke-white stroke-[4]" fill="none" viewBox="0 0 24 24" strokeLinecap="square" strokeLinejoin="miter">
                          <polyline points="5 12 10 17 22 2"></polyline>
                       </svg>
                     </div>
                     <span className="text-zinc-800 font-semibold text-[15px] md:text-[20px]">{item}</span>
                   </li>
                 ))}
               </ul>

               <div className="flex justify-center mt-6 mb-2 w-full">
                 <div className="relative inline-block">
                   <div aria-hidden className="absolute inset-0 z-20 rounded-sm border-2 border-black border-wiggle" />
                   <a href="#donasi" className="relative z-10 inline-block transition-transform duration-150 hover:-translate-y-0.5">
                     <div className="relative rounded-sm bg-[#7FC248] px-5 py-2.5 md:px-6 md:py-3">
                       <div className="relative z-10 inline-flex items-center gap-2 text-[15px] font-semibold font-newsreader text-white md:text-[18px]">
                         <span>Donasi Sekarang</span>
                       </div>
                     </div>
                   </a>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* ===================== HEADER TEXT ===================== */}
      <section className="w-full pt-16 pb-12 px-4 md:px-12 bg-white flex justify-center text-center">
         <div className="max-w-4xl w-full">
            <h2 className="text-2xl md:text-3xl font-newsreader font-bold text-black mb-6">Program Pendidikan</h2>
            <p className="text-zinc-800 text-sm md:text-lg leading-relaxed max-w-4xl font-medium mx-auto">
              Program Pendidikan Taman Zakat adalah Inisiatif yang bertujuan untuk membuka akses pendidikan bagi anak-anak dari keluarga prasejahtera agar mereka dapat belajar, berkembang, dan meraih masa depan yang lebih baik. Melalui program ini, Taman Zakat memprioritaskan penyaluran bantuan tepat sasaran seperti bantuan beasiswa, perlengkapan belajar, pembinaan karakter, hingga perwujudan aset penunjang edukasi.
            </p>
         </div>
      </section>

      {/* ===================== BLACK BANNER PLACEHOLDER ===================== */}
      <section className="w-full bg-[#2E3133] py-8 border-y-8 border-[#3A3D40]">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h3 className="text-white text-lg font-newsreader mb-6">Program Pendidikan Taman Zakat</h3>
           <div className="flex gap-4 overflow-x-auto justify-center md:pb-0 pb-4 no-scrollbar">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="min-w-[120px] w-[140px] aspect-[4/5] bg-zinc-300 rounded shrink-0 flex items-center justify-center">
                   <p className="text-zinc-500 text-xs">Beasiswa Bintang</p>
                </div>
             ))}
           </div>
        </div>
      </section>
      
      {/* ===================== PROGRAM PENDIDIKAN (IMAGE CLUSTER RIGHT) ===================== */}
      <section className="w-full py-16 px-4 md:px-12 bg-[#F8EED3]">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
           <div className="w-full md:w-1/2 md:pr-10">
              <h2 className="text-2xl md:text-4xl font-newsreader font-bold text-black mb-6">Program Pendidikan</h2>
              <p className="text-zinc-800 text-sm md:text-lg leading-relaxed font-medium">
                Program pendidikan Taman Zakat adalah inisiatif yang bertujuan untuk membuka akses pendidikan bagi anak-anak dari keluarga prasejahtera agar mereka dapat belajar, berkembang, dan meraih masa depan yang lebih baik.
              </p>
           </div>
           
           <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
             {/* Collage of images specific to education */}
              <Image 
                src="/images/gambardetaile/bidang pendidikan.svg" 
                alt="Collage Pendidikan" 
                fill 
                className="object-contain" 
              />
           </div>
         </div>
      </section>

      {/* ===================== ALTERNATING PROGRAM LIST ===================== */}

      {/* 1. Beasiswa Bintang */}
      <section className="w-full py-20 px-4 md:px-12 bg-[#FAEDCD]">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            
            <div className="absolute top-0 left-0 md:-left-4 text-[#E83C31] text-6xl md:text-8xl font-serif font-bold opacity-30 select-none z-0">
               1
            </div>

            <div className="w-full md:w-[45%] flex justify-center md:justify-end relative z-10">
               <div className="relative w-full max-w-[400px] aspect-video">
                 <div className="absolute inset-0 bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-lg transform -rotate-2 border border-zinc-200">
                   <div className="relative w-full h-full border border-dashed border-zinc-300 p-1">
                     <Image src="/images/gambardetaile/Yatim-Beasiswa-Sekolah-Yatimn 1.svg" alt="Beasiswa Bintang" fill className="object-cover" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left relative z-10">
               <h2 className="text-xl md:text-2xl font-newsreader font-bold text-black mb-3">Beasiswa Bintang</h2>
               <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                 Hanya dengan <span className="text-[#E83C31] font-bold">Rp 10.000</span>, Anda bisa menjadi bagian dari harapan – membantu melunasi biaya SPP anak-anak dan menghadirkan masa depan bagi saudara dhuafa yang sedang berjuang di masa sulit ini.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                 <div className="relative inline-block">
                   <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                     <div className="relative bg-[#5DA630] border border-black shadow-[3px_3px_0px_#000] px-5 py-2.5">
                       <span className="font-semibold text-white">Donasi Rutin</span>
                     </div>
                   </a>
                 </div>
                 <button className="bg-transparent border border-[#5DA630] text-[#5DA630] px-5 py-2.5 flex items-center gap-2 font-medium hover:bg-[#5DA630]/10 transition-colors">
                   <span>Lihat Detail Program</span>
                 </button>
               </div>
            </div>
         </div>
      </section>


      {/* 2. Peduli Yatim */}
      <section className="w-full py-20 px-4 md:px-12 bg-white">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            
            <div className="absolute top-0 right-0 md:-right-4 text-[#E83C31] text-6xl md:text-8xl font-serif font-bold opacity-30 select-none z-0">
               2
            </div>

            <div className="w-full md:w-[50%] order-2 md:order-1 flex flex-col items-center md:items-end text-center md:text-right relative z-10">
               <h2 className="text-xl md:text-2xl font-newsreader font-bold text-black mb-3">Peduli Yatim</h2>
               <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium max-w-md">
                 Program Peduli Yatim dari Taman Zakat diharapkan dapat menolong anak yatim dan keluarga dhuafa dan anak mendapatkan kualitas pendidikan yang layak demi menjamin cita-cita dan pertolongan pertama pada pendidikan.
               </p>
               <div className="flex flex-col-reverse sm:flex-row-reverse items-center justify-start gap-4">
                 <div className="relative inline-block">
                   <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                     <div className="relative bg-[#5DA630] border border-black shadow-[3px_3px_0px_#000] px-5 py-2.5">
                       <span className="font-semibold text-white">Donasi Rutin</span>
                     </div>
                   </a>
                 </div>
                 <button className="bg-transparent border border-[#5DA630] text-[#5DA630] px-5 py-2.5 flex items-center gap-2 font-medium hover:bg-[#5DA630]/10 transition-colors">
                   <span>Lihat Detail Program</span>
                 </button>
               </div>
            </div>

            <div className="w-full md:w-[45%] order-1 md:order-2 flex justify-center md:justify-start relative z-10">
               <div className="relative w-full max-w-[400px] aspect-video">
                 {/* Pushpin visual */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-8 h-8">
                    <div className="w-6 h-6 rounded-full bg-blue-700 shadow-md flex items-center justify-center border border-black absolute top-0 -left-1 transform -rotate-12">
                       <div className="w-2 h-2 rounded-full bg-blue-400 absolute top-1 left-1" />
                    </div>
                    <div className="w-[3px] h-4 bg-zinc-300 absolute top-5 left-2 border-l border-r border-black transform rotate-[25deg] shadow-lg" />
                 </div>
                 <div className="absolute inset-0 border-[3px] border-[#5DA630] bg-[#F2F9EC] p-2 mt-4 ml-4 z-0" />
                 <div className="absolute inset-0 border border-zinc-300 z-10 bg-white">
                   <Image src="/images/gambardetaile/santri 1.svg" alt="Peduli Yatim" fill className="object-cover" />
                 </div>
               </div>
            </div>

         </div>
      </section>

      {/* 3. Kajian Parenting */}
      <section className="w-full py-20 px-4 md:px-12 bg-[#FAEDCD]">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            
            <div className="absolute top-0 left-0 md:-left-4 text-[#E83C31] text-6xl md:text-8xl font-serif font-bold opacity-30 select-none z-0">
               3
            </div>

            <div className="w-full md:w-[45%] flex justify-center md:justify-end relative z-10">
               <div className="relative w-full max-w-[400px] aspect-video">
                 <div className="absolute inset-0 bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-md border-x-[3px] border-b-[3px] border-t-0 border-[#5DA630] transform rotate-1">
                   <div className="relative w-full h-full border border-dashed border-zinc-200">
                     {/* Replace with actual image later */}
                     <Image src="/images/gambardetaile/bidang pendidikan.svg" alt="Kajian Parenting" fill className="object-cover" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left relative z-10">
               <h2 className="text-xl md:text-2xl font-newsreader font-bold text-black mb-3">Kajian Parenting</h2>
               <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                 Hanya dengan <span className="text-[#E83C31] font-bold">Rp 10.000</span>, Anda bisa menjadi bagian dari harapan – membantu melunasi biaya kegiatan edukasi parenting dan menghadirkan pemahaman bagi orang tua untuk bekal membina anak.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                 <div className="relative inline-block">
                   <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                     <div className="relative bg-[#5DA630] border border-black shadow-[3px_3px_0px_#000] px-5 py-2.5">
                       <span className="font-semibold text-white">Donasi Rutin</span>
                     </div>
                   </a>
                 </div>
                 <button className="bg-transparent border border-[#5DA630] text-[#5DA630] px-5 py-2.5 flex items-center gap-2 font-medium hover:bg-[#5DA630]/10 transition-colors">
                   <span>Lihat Detail Program</span>
                 </button>
               </div>
            </div>
         </div>
      </section>


      {/* 4. Guru Teladan */}
      <section className="w-full py-20 px-4 md:px-12 bg-white">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            
            <div className="absolute top-0 right-0 md:-right-4 text-[#E83C31] text-6xl md:text-8xl font-serif font-bold opacity-30 select-none z-0">
               4
            </div>

            <div className="w-full md:w-[50%] order-2 md:order-1 flex flex-col items-center md:items-end text-center md:text-right relative z-10">
               <h2 className="text-xl md:text-2xl font-newsreader font-bold text-black mb-3">Guru Teladan</h2>
               <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium max-w-md">
                 Program Infaq Guru Teladan dari Taman Zakat diharapkan dapat menolong guru berdedikasi tinggi demi memajukan kualitas pendidikan murid dan menjamin kemajuan peradaban yang berkualitas.
               </p>
               <div className="flex flex-col-reverse sm:flex-row-reverse items-center justify-start gap-4">
                 <div className="relative inline-block">
                   <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                     <div className="relative bg-[#5DA630] border border-black shadow-[3px_3px_0px_#000] px-5 py-2.5">
                       <span className="font-semibold text-white">Donasi Rutin</span>
                     </div>
                   </a>
                 </div>
                 <button className="bg-transparent border border-[#5DA630] text-[#5DA630] px-5 py-2.5 flex items-center gap-2 font-medium hover:bg-[#5DA630]/10 transition-colors">
                   <span>Lihat Detail Program</span>
                 </button>
               </div>
            </div>

            <div className="w-full md:w-[45%] order-1 md:order-2 flex justify-center md:justify-start relative z-10">
               <div className="relative w-full max-w-[400px]">
                 {/* Strings decoration */}
                 <div className="absolute -top-[50px] w-full flex justify-between px-10 z-0">
                    <div className="w-[1px] h-[55px] bg-[#9C7945]" />
                    <div className="w-[1px] h-[65px] bg-[#9C7945]" />
                 </div>
                 {/* Clothespin clips */}
                 <div className="absolute -top-3 left-8 z-20">
                    <div className="w-2 h-7 bg-[#B89B65] border border-black rounded-sm transform rotate-6" />
                 </div>
                 <div className="absolute -top-3 right-8 z-20">
                    <div className="w-2 h-7 bg-[#B89B65] border border-black rounded-sm transform rotate-12" />
                 </div>

                 <div className="relative w-full aspect-[4/3] bg-white border border-black shadow-md mt-4 p-2 transform -rotate-1">
                   <div className="relative z-10 w-full h-full border border-dashed border-zinc-300">
                     <Image src="/images/gambardetaile/beasiswa-santri 1.svg" alt="Guru Teladan" fill className="object-cover" />
                   </div>
                 </div>
               </div>
            </div>

         </div>
      </section>

      {/* 5. Mitigasi Bencana */}
      <section className="w-full py-20 px-4 md:px-12 bg-[#FAEDCD]">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
            
            <div className="absolute top-0 left-0 md:-left-4 text-[#E83C31] text-6xl md:text-8xl font-serif font-bold opacity-30 select-none z-0">
               5
            </div>

            <div className="w-full md:w-[45%] flex justify-center md:justify-end relative z-10">
               <div className="relative w-full max-w-[400px] aspect-video">
                 <div className="absolute inset-0 bg-white p-2 md:p-3 shadow-lg transform rotate-2 border border-zinc-200">
                   <div className="relative w-full h-full">
                     <Image src="/images/gambardetaile/footage ambul 2 1.svg" alt="Mitigasi Bencana" fill className="object-cover" />
                   </div>
                 </div>
               </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left relative z-10">
               <h2 className="text-xl md:text-2xl font-newsreader font-bold text-black mb-3">Mitigasi Bencana</h2>
               <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                 Hanya dengan <span className="text-[#E83C31] font-bold">Rp 10.000</span>, Anda bisa menjadi bagian dari harapan – membantu melengkapi sosialisasi siaga bencana dan menghadirkan bantuan bagi saudara dhuafa yang sedang berjuang di masa sulit ini.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                 <div className="relative inline-block">
                   <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                     <div className="relative bg-[#5DA630] border border-black shadow-[3px_3px_0px_#000] px-5 py-2.5">
                       <span className="font-semibold text-white">Donasi Rutin</span>
                     </div>
                   </a>
                 </div>
                 <button className="bg-transparent border border-[#5DA630] text-[#5DA630] px-5 py-2.5 flex items-center gap-2 font-medium hover:bg-[#5DA630]/10 transition-colors">
                   <span>Lihat Detail Program</span>
                 </button>
               </div>
            </div>
         </div>
      </section>

      {/* ===================== DARI TITIPAN MENJADI HARAPAN ===================== */}
      <section className="w-full bg-[#2E3133] py-16 px-4 md:px-12 flex items-center min-h-[400px]">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 relative">
             
             {/* Text Block */}
             <div className="w-full md:w-[40%] text-left z-10">
                <h2 className="text-white text-3xl md:text-4xl font-newsreader font-bold mb-4 leading-tight">
                  Dari Titipan Menjadi Harapan
                </h2>
                <p className="text-zinc-300 text-base md:text-lg mb-8 leading-relaxed max-w-sm">
                  Amanah Anda kami jaga, dari kemapanan sampai menjadi manfaat nyata.
                </p>
                <div className="relative inline-block">
                  <a href="#donasi" className="relative z-10 inline-block hover:scale-105 transition-transform duration-300" >
                    <div className="relative bg-transparent border border-[#7FC248] text-[#7FC248] shadow-[3px_3px_0px_#7FC248] px-6 py-2">
                       <span className="font-semibold tracking-wide">Jemput Donasi</span>
                    </div>
                  </a>
                </div>
             </div>

             {/* Collage Block */}
             <div className="w-full md:w-[50%] h-[400px] relative z-0">
               {/* Using CSS grid for masonry or just absolute positions */}
               <div className="w-full h-full relative grid grid-cols-2 grid-rows-2 gap-3 transform -rotate-3 overflow-visible pointer-events-none">
                  
                  {/* Photo 1 */}
                  <div className="relative bg-white border border-gray-100 p-2 shadow-xl transform rotate-3 -translate-y-6">
                    <div className="relative w-full h-full">
                       <Image src="/images/gambardetaile/kasih ke anak sma 1.svg" alt="Photo 1" fill className="object-cover" />
                    </div>
                  </div>
                  
                  {/* Photo 2 */}
                  <div className="relative bg-white border border-gray-100 p-2 shadow-xl transform -rotate-2 scale-110 z-10 translate-y-6">
                    <div className="relative w-full h-full">
                       <Image src="/images/gambardetaile/Yatim-Beasiswa-Sekolah-Yatimn 1.svg" alt="Photo 2" fill className="object-cover" />
                    </div>
                  </div>
                  
                  {/* Photo 3 */}
                  <div className="relative bg-white border border-gray-100 p-2 shadow-xl transform rotate-6 scale-95 translate-x-4 -translate-y-4">
                    <div className="relative w-full h-full">
                       <Image src="/images/gambardetaile/santri 1.svg" alt="Photo 3" fill className="object-cover" />
                    </div>
                  </div>
                  
                  {/* Photo 4 */}
                  <div className="relative bg-white border border-gray-100 p-2 shadow-xl transform shrink -rotate-6 translate-x-3 translate-y-2">
                    <div className="relative w-full h-full">
                       <Image src="/images/gambardetaile/beasiswa-santri 1.svg" alt="Photo 4" fill className="object-cover" />
                    </div>
                  </div>

               </div>
             </div>

          </div>
      </section>

    </main>
  );
}
