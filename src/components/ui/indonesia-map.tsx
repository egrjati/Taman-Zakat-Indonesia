export default function IndonesiaMap() {
  return (
    <section>
    <div className=" flex items-center justify-center">
      <div className="overflow-hidden w-3xl ">
        <object
          data="/maps/indonesia.svg"
          type="image/svg+xml"
          className="h-auto w-full"
          aria-label="Peta interaktif Indonesia"
        >
          Peta Indonesia tidak dapat dimuat.
        </object>
      </div>
    </div>

      <h3 className="ml-20 text-xl text-zinc-700">
        Sebanyak <span className="font-bold text-2xl text-[#71C935]">102.088</span> <br /> penerima
        manfaat telah menerima <br /> program taman zakat
      </h3>
    </section>
  );
}
