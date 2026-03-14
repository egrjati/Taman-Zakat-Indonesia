export default function IndonesiaMap() {
  return (
    <div className="flex items-center justify-center">
      <div className="overflow-hidden w-full max-w-4xl">
        <object
          data="/maps/indonesia.svg"
          type="image/svg+xml"
          className="h-auto w-full filter drop-shadow-lg"
          aria-label="Peta interaktif Indonesia"
        >
          Peta Indonesia tidak dapat dimuat.
        </object>
      </div>
    </div>
  );
}
