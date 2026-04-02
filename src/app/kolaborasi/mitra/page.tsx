import React from 'react';
import Image from 'next/image';

export default function MitraPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* Section 1: Stakeholder Support & Partners */}
        <div className="w-full flex justify-center mb-24">
          <div className="w-full max-w-[1000px] h-[500px] md:h-[800px] relative">
            <Image
              src="/images/icon/trusted-partners.svg"
              alt="Trusted by our Stakeholder Support & Partners"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Separator 1 */}
        <div className="w-full max-w-[800px] mx-auto mb-20">
          <div className="w-full h-[1px] bg-[#d4d4d4]"></div>
        </div>
        
        {/* Section 2: Media Partner */}
        {/* The map shape background using koran SVGs and logos using Media Partner.svg */}
        <div className="relative w-full py-10 mb-20 flex justify-center min-h-[400px]">
          
          {/* Background Map Shapes (Koran Texture) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-none">
             {/* Positioning the koran islands roughly to mimic a map */}
             <div className="relative w-full h-full max-w-[1000px]">
                <Image src="/images/icon/koran 1.svg" alt="" width={400} height={300} className="absolute left-[10%] top-[20%] object-contain" />
                <Image src="/images/icon/koran 2.svg" alt="" width={300} height={200} className="absolute left-[40%] bottom-[10%] object-contain" />
                <Image src="/images/icon/koran 3.svg" alt="" width={350} height={250} className="absolute right-[5%] top-[10%] object-contain" />
                {/* koran 4 can be a smaller island */}
                <Image src="/images/icon/koran 4.svg" alt="" width={150} height={150} className="absolute left-[20%] bottom-[-5%] object-contain" />
             </div>
          </div>

          {/* Media Partner Text and Logos */}
          <div className="relative z-10 w-full max-w-[1000px] h-[300px] md:h-[500px] flex justify-center items-center">
            <Image
              src="/images/icon/Media Partner.svg"
              alt="Media Partner"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Separator 2 */}
        <div className="w-full max-w-[800px] mx-auto mb-24">
          <div className="w-full h-[2px] bg-zinc-300 max-w-[600px] mx-auto"></div>
        </div>

        {/* Section 3: Mitra Payment */}
        <div className="relative w-full pb-20 md:pb-32 pt-10 px-4 md:px-0">
          
          {/* Content Wrapper */}
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-center w-full z-10 relative md:gap-16">
             
             {/* Text "Mitra Payment" */}
             <div className="mb-12 md:mb-0 md:ml-10 flex-shrink-0">
               <Image
                 src="/images/icon/Mitra Payment.svg"
                 alt="Mitra Payment"
                 width={200}
                 height={60}
                 className="h-auto w-auto max-w-[200px]"
               />
             </div>
             
             {/* Bank Logos */}
             <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 md:gap-x-12 w-full max-w-[700px]">
               <Image src="/images/logo bank/bank-central-asia-(bca)-logo 1.svg" alt="BCA" width={110} height={40} className="w-[90px] md:w-[120px] h-auto object-contain" />
               <Image src="/images/logo bank/bank-bsi-logo 1.svg" alt="BSI" width={140} height={40} className="w-[120px] md:w-[160px] h-auto object-contain" />
               <Image src="/images/logo bank/bank mandiri.svg" alt="Mandiri" width={130} height={40} className="w-[110px] md:w-[140px] h-auto object-contain" />
               <Image src="/images/logo bank/bank-jatim-logo 1.svg" alt="Bank Jatim" width={120} height={40} className="w-[110px] md:w-[140px] h-auto object-contain" />
             </div>
          </div>

          {/* Decorations (QRIS Phone and ATM) */}
          <div className="absolute left-[-20px] md:left-[-60px] lg:left-[-100px] bottom-[-20px] md:bottom-[-40px] w-[140px] md:w-[180px] lg:w-[220px] z-0">
            <Image
              src="/images/icon/qris.svg"
              alt="QRIS"
              width={220}
              height={220}
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="absolute right-[-20px] md:right-[-60px] lg:right-[-100px] bottom-[-20px] md:bottom-[-40px] w-[180px] md:w-[250px] lg:w-[320px] z-0">
            <Image
              src="/images/icon/atm.svg"
              alt="ATM"
              width={320}
              height={320}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
