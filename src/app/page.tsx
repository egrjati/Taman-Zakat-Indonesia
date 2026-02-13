export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header>
        <div className="w-full h-64 bg-black flex items-center justify-center">
          <h1 className="font-bold text-3xl">
            TAMAN <span className="text-[#7FC248]">ZAKAT</span>
          </h1>
        </div>
      </header>

      <main className="">
        {/* Page Fitur */}
        <section>
          <h2 className="font-semibold text-zinc-800 text-xl text-center mt-10">
            Semua dalam Satu Platform
          </h2>
          <p className="text-zinc-600 text-center mt-2 mb-10 max-w-xl mx-auto">
            Akses berbagai layanan zakat digital dalam satu pengalaman yang sederhana dan efisien.
          </p>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* CARD */}
              <div className="bg-green-100 rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-green-800">Zakat Online</h3>
                  <p className="text-xs text-green-700 mt-1">
                    Akses berbagai layanan zakat digital dalam satu pengalaman yang sederhana.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-green-100 rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-green-800">Program Sosial</h3>
                  <p className="text-xs text-green-700 mt-1">
                    Penyaluran bantuan untuk masyarakat yang membutuhkan.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-green-100 rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-green-800">Laporan Transparan</h3>
                  <p className="text-xs text-green-700 mt-1">
                    Informasi distribusi dana yang terbuka dan terpercaya.
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-green-100 rounded-lg p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex-shrink-0"></div>

                <div>
                  <h3 className="text-sm font-semibold text-green-800">Donasi Mudah</h3>
                  <p className="text-xs text-green-700 mt-1">
                    Proses donasi cepat dan aman untuk semua kalangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
