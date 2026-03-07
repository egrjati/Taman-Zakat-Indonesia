"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BADGE_TEXT = "Taman Zakat - Indonesia - taza -";

export default function BidangKesehatanPage() {
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
          /* Fall 1: accelerating down */
          12%  { transform: translateX(400px) translateY(-60px); }
          18%  { transform: translateX(340px) translateY(-20px); }
          24%  { transform: translateX(280px) translateY(0); }
          /* Bounce 1: arc up then down */
          28%  { transform: translateX(250px) translateY(-20px); }
          32%  { transform: translateX(220px) translateY(-42px); }
          36%  { transform: translateX(190px) translateY(-48px); }
          40%  { transform: translateX(160px) translateY(-42px); }
          44%  { transform: translateX(135px) translateY(-20px); }
          48%  { transform: translateX(110px) translateY(0); }
          /* Bounce 2: smaller arc */
          51%  { transform: translateX(95px) translateY(-10px); }
          54%  { transform: translateX(80px) translateY(-22px); }
          57%  { transform: translateX(65px) translateY(-24px); }
          60%  { transform: translateX(52px) translateY(-22px); }
          63%  { transform: translateX(40px) translateY(-10px); }
          66%  { transform: translateX(30px) translateY(0); }
          /* Bounce 3: small arc */
          70%  { transform: translateX(22px) translateY(-8px); }
          74%  { transform: translateX(15px) translateY(-10px); }
          78%  { transform: translateX(10px) translateY(-8px); }
          82%  { transform: translateX(5px) translateY(0); }
          /* Bounce 4: tiny */
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
      <section className="relative w-full flex items-center min-h-[500px] md:min-h-[600px] py-16 md:py-24">
         {/* BACKGROUND IMAGE FILL */}
         <div className="absolute inset-0 z-0">
            <Image 
               src="/images/gambardetaile/hero page bidang kesehatan.svg" 
               alt="Background Bidang Kesehatan" 
               fill 
               className="object-cover object-center"
               priority
            />
         </div>

         <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 flex justify-center md:justify-end">
            {/* CARD RIGHT */}
            <div className="bg-white rounded-md w-full max-w-[420px] p-6 md:p-8 lg:p-10 relative border border-green-50 shadow-[0px_4px_40px_rgba(127,194,72,0.5)]">
               {/* Badge Taza (Top Left corner) */}
               <div className={`absolute -top-10 -left-10 md:-top-12 md:-left-12 z-20 ${animateBadge ? 'badge-bounce' : 'opacity-0'}`}>
                 <div className="relative h-[84px] w-[84px] md:h-[100px] md:w-[100px]">
                   <div
                     aria-hidden
                     className="absolute -top-[2px] left-[2px] h-full w-full rounded-full border border-black bg-transparent rotate-[-6deg]"
                   />
                   <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border border-black bg-[#8cc63f]">
                     <svg
                       viewBox="0 0 300 300"
                       aria-hidden
                       className="absolute inset-0 h-full w-full fill-black transform -rotate-12"
                     >
                       <defs>
                         <path
                           id="ambulan-badge-path"
                           d="M150,150 m0,-112 a112,112 0 1,1 0,224 a112,112 0 1,1 0,-224"
                         />
                       </defs>
                       <text fontSize="28" fontWeight="500" className="font-newsreader">
                         <textPath
                           href="#ambulan-badge-path"
                           startOffset="50%"
                           textAnchor="middle"
                           textLength="680"
                           lengthAdjust="spacing"
                         >
                           {BADGE_TEXT}
                         </textPath>
                       </text>
                     </svg>

                     <div className="relative z-10 flex h-[35px] w-[35px] items-center justify-center rounded-full border-[2px] border-black bg-[#8cc63f] md:h-[45px] md:w-[45px]">
                       <Image
                         src="/images/icon/hitam logo taza 1.svg"
                         alt="Logo Taza"
                         width={36}
                         height={36}
                         className="h-[22px] w-auto md:h-[28px]"
                       />
                     </div>
                   </div>
                 </div>
               </div>
               
               <h1 className="text-2xl md:text-[32px] font-newsreader font-bold text-black mb-6 mt-4 ml-6 md:ml-8 text-left drop-shadow-sm">
                 Bidang <span className="text-[#8cc63f]">Kesehatan</span>
               </h1>

               <ul className="space-y-4 mb-10 ml-6 md:ml-8">
                 {[
                   "Layanan Ambulan",
                   "Oprasi Katarak Gratis",
                   "Toilet Keluarga Sehat",
                   "Cek Kesehatan Gratis"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-4">
                     {/* Icon Centang khusus */}
                     <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full bg-[#1e5b3a] flex items-center justify-center flex-shrink-0 relative overflow-hidden shadow-sm">
                       <svg className="w-4 h-4 md:w-5 md:h-5 text-white stroke-white stroke-[4]" fill="none" viewBox="0 0 24 24" strokeLinecap="square" strokeLinejoin="miter">
                          <polyline points="5 12 10 17 22 2"></polyline>
                       </svg>
                     </div>
                     <span className="text-zinc-800 font-semibold text-[17px] md:text-[20px]">{item}</span>
                   </li>
                 ))}
               </ul>

               <div className="flex justify-center mt-6 mb-2 w-full">
                 <div className="relative inline-block">
                   <div
                     aria-hidden
                     className="absolute inset-0 z-20 rounded-sm border-2 border-black border-wiggle"
                   />
                   <a
                     href="#donasi"
                     className="relative z-10 inline-block transition-transform duration-150 hover:-translate-y-0.5"
                   >
                     <div className="relative rounded-sm bg-[#7FC248] px-5 py-2.5 md:px-6 md:py-3">
                       <div className="relative z-10 inline-flex items-center gap-2 text-[15px] font-semibold font-newsreader text-white md:text-[18px]">
                         <span>Donasi Disini</span>
                         <Image
                           src="/images/icon/Donation.svg"
                           alt="Ikon donasi"
                           width={20}
                           height={20}
                           className="h-[20px] w-[20px]"
                         />
                       </div>
                     </div>
                   </a>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* ===================== PROGRAM KESEHATAN ===================== */}
      <section className="w-full py-16 px-4 md:px-12 bg-white flex justify-center">
         <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center md:justify-start">
               <div className="max-w-md w-full">
                 <h2 className="text-2xl md:text-3xl font-newsreader text-black mb-4">Program Kesehatan</h2>
                 <p className="text-zinc-700 text-sm md:text-base md:leading-relaxed text-left">
                   Taman Zakat adalah lembaga amil zakat nasional milik masyarakat Indonesia yang mengelola zakat, infak, sedekah, serta dana kemanusiaan lainnya melalui serangkaian program salah satunya adalah kesehatan. Isu permasalahan yang diintervensi Rumah Zakat dalam bidang kesehatan adalah stunting & wasting (gizi buruk), ancaman kesejahteraan lansia (pemenuhan kebutuhan dasar, penelantaran, dll), akses terhadap air minum dan sanitasi yang layak, dan kerawanan pangan.
                 </p>
               </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
               <Image 
                 src="/images/gambardetaile/BIDANG KESEHATAN (1) 1.svg"
                 alt="Program Kesehatan"
                 width={500}
                 height={400}
                 className="w-full max-w-sm md:max-w-md object-contain"
               />
            </div>
         </div>
      </section>

      {/* ===================== FASILITAS AMBULAN GRATIS ===================== */}
      <section className="w-full py-16 px-4 md:px-12 bg-white pt-0">
         <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-xl md:text-2xl font-newsreader text-black mb-3">Program Ambulan Gratis</h2>
             <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto mb-12">
               Taman Zakat melalui program Infak operasional Ambulance Gratis memfasilitasi layanan kesehatan yang meliputi:
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full border border-zinc-300 flex items-center justify-center mb-4">
                   <Image src="/images/icon/layanan-antar-jemput.svg" alt="Layanan Antar Jemput" width={79} height={79}/>
                 </div>
                 <h3 className="font-semibold text-black text-sm text-center">Layanan Antar Jemput <br/> Pasien Duafa</h3>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full border border-zinc-300 flex items-center justify-center mb-4">
                   <Image src="/images/icon/mobil-tanggap-bencana.svg" alt="Mobil Tanggap Bencana" width={79} height={79}/>
                 </div>
                 <h3 className="font-semibold text-black text-sm text-center">Mobil Tanggap Bencana</h3>
               </div>
               <div className="flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full border border-zinc-300 flex items-center justify-center mb-4">
                   <Image src="/images/icon/mobil-sehat-keliling.svg" alt="Mobil Sehat Keliling" width={79} height={79}/>
                 </div>
                 <h3 className="font-semibold text-black text-sm text-center">Mobil Sehat Keliling</h3>
               </div>
             </div>
         </div>
      </section>

      {/* ===================== LOREM IPSUM & AMBULANCE IMAGE ===================== */}
      <section className="w-full py-16 px-4 md:px-12 bg-[#F8EED3] relative overflow-hidden flex items-center min-h-[300px]">
         <div className="max-w-6xl w-full mx-auto flex">
            <div className="w-full md:w-3/5 z-10 pt-10 pb-20 md:py-10 text-center md:text-left">
               <p className="text-zinc-800 text-sm md:text-base italic leading-relaxed md:max-w-md font-medium">
                 Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula, consectetur.
               </p>
            </div>
            <div className="absolute right-[-10%] md:right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 z-0 w-[60%] md:w-1/2 max-w-lg">
               <Image 
                 src="/images/gambardetaile/ambulance-removebg.svg"
                 alt="Ambulance"
                 width={800}
                 height={600}
                 className="w-full h-auto object-contain translate-x-[15%]"
               />
            </div>
         </div>
      </section>

      {/* ===================== LIST KESEHATAN BLOCKS ===================== */}

      {/* Ambulan Gratis Taman Zakat */}
      <section className="w-full py-16 px-4 md:px-12 bg-white">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
               <div className="w-full max-w-md rounded bg-zinc-100 border-4 border-white shadow-lg overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/gambardetaile/footage ambul 2 1.svg" alt="Ambulan Gratis Taman Zakat" fill className="object-cover" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
               <div className="max-w-md">
                 <h2 className="text-lg md:text-2xl font-newsreader font-bold text-black mb-3">Ambulan Gratis Taman Zakat</h2>
                 <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                   Program infak ambulans Taman Zakat diharapkan dapat mengurangi hambatan-hambatan bagi warga desa untuk mendapatkan fasilitas kesehatan yang layak dan terjamin dalam pertolongan pertama pada kesehatan.
                 </p>
                 <div className="flex items-center justify-center md:justify-start gap-3">
                   <button className="bg-[#7FC248] text-white shadow-md px-4 py-2 rounded hover:bg-[#6CAE37] transition font-semibold text-xs md:text-sm">Donasi Disini <span className="ml-1">➔</span></button>
                   <button className="bg-white border text-[#7FC248] shadow-sm px-4 py-2 rounded hover:bg-[#F3F9EF] transition font-semibold text-xs md:text-sm border-[#7FC248]/30">Lihat Detail Program</button>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Operasi Katarak Gratis */}
      <section className="w-full py-16 px-4 md:px-12 bg-[#F8EED3]">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center md:items-center text-center">
               <div className="max-w-md">
                 <h2 className="text-lg md:text-2xl font-newsreader font-bold text-black mb-3">Operasi Katarak Gratis</h2>
                 <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                   Program infak ambulans Taman Zakat diharapkan dapat mengurangi hambatan-hambatan bagi warga desa untuk mendapatkan fasilitas kesehatan yang layak dan terjamin dalam pertolongan pertama pada kesehatan.
                 </p>
                 <div className="flex items-center justify-center gap-3">
                   <button className="bg-white border text-[#7FC248] shadow-sm px-4 py-2 rounded hover:bg-[#F3F9EF] transition font-semibold text-xs md:text-sm border-[#7FC248]/30">Lihat Detail Program</button>
                   <button className="bg-[#7FC248] text-white shadow-md px-4 py-2 rounded hover:bg-[#6CAE37] transition font-semibold text-xs md:text-sm">Donasi Disini <span className="ml-1">➔</span></button>
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start">
               <div className="w-full max-w-md rounded border-4 border-white shadow-lg overflow-hidden relative aspect-[4/3] bg-zinc-100">
                  <Image src="/images/gambardetaile/Oprasi Katarak.svg" alt="Operasi Katarak Gratis" fill className="object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* Toilet Keluarga Sehat */}
      <section className="w-full py-16 px-4 md:px-12 bg-white">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
               <div className="w-full max-w-md rounded bg-zinc-100 border-4 border-white shadow-lg overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/gambardetaile/toilet keluarga  sehat.svg" alt="Toilet Keluarga Sehat" fill className="object-cover" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
               <div className="max-w-md">
                 <h2 className="text-lg md:text-2xl font-newsreader font-bold text-black mb-3">Toilet Keluarga Sehat</h2>
                 <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                   Program infak ambulans Taman Zakat diharapkan dapat mengurangi hambatan-hambatan bagi warga desa untuk mendapatkan fasilitas kesehatan yang layak dan terjamin dalam pertolongan pertama pada kesehatan.
                 </p>
                 <div className="flex items-center justify-center md:justify-start gap-3">
                   <button className="bg-[#7FC248] text-white shadow-md px-4 py-2 rounded hover:bg-[#6CAE37] transition font-semibold text-xs md:text-sm">Donasi Disini <span className="ml-1">➔</span></button>
                   <button className="bg-white border text-[#7FC248] shadow-sm px-4 py-2 rounded hover:bg-[#F3F9EF] transition font-semibold text-xs md:text-sm border-[#7FC248]/30">Lihat Detail Program</button>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Cek Kesehatan Gratis */}
      <section className="w-full py-16 px-4 md:px-12 bg-[#F8EED3]">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center md:items-center text-center">
               <div className="max-w-md">
                 <h2 className="text-lg md:text-2xl font-newsreader font-bold text-black mb-3">Cek Kesehatan Gratis</h2>
                 <p className="text-zinc-800 text-sm leading-relaxed mb-6 font-medium">
                   Program infak ambulans Taman Zakat diharapkan dapat mengurangi hambatan-hambatan bagi warga desa untuk mendapatkan fasilitas kesehatan yang layak dan terjamin dalam pertolongan pertama pada kesehatan.
                 </p>
                 <div className="flex items-center justify-center gap-3">
                   <button className="bg-white border text-[#7FC248] shadow-sm px-4 py-2 rounded hover:bg-[#F3F9EF] transition font-semibold text-xs md:text-sm border-[#7FC248]/30">Lihat Detail Program</button>
                   <button className="bg-[#7FC248] text-white shadow-md px-4 py-2 rounded hover:bg-[#6CAE37] transition font-semibold text-xs md:text-sm">Donasi Disini <span className="ml-1">➔</span></button>
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start">
               <div className="w-full max-w-md rounded bg-zinc-100 border-4 border-white shadow-lg overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/gambardetaile/cek kesehatan.svg" alt="Cek Kesehatan Gratis" fill className="object-cover object-top" />
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
