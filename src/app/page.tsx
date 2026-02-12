export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium tracking-wide text-zinc-600">
              Taman Zakat Indonesia
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-zinc-900">
              Bersama Kita Bangun
              <span className="block text-zinc-600">
                Kepedulian dan Kebaikan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-700">
              Website resmi Taman Zakat Indonesia sebagai media informasi dan
              penyaluran donasi untuk masyarakat yang membutuhkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold">
                Donasi Sekarang
              </button>
              <button className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold">
                Lihat Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
