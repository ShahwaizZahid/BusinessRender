import { FaArrowRight } from "react-icons/fa";

export default function MigrationsSection() {
  return (
    <section className="flex w-full h-screen flex-col lg:flex-row">
      <div className="w-full h-full lg:w-1/2 bg-[#48008c] px-8 py-16 md:p-20 flex flex-col justify-center items-center space-y-10">
        <h1 className="text-2xl text-white md:text-4xl lg:text-7xl font-bold text-center">
          Build with speed
        </h1>

        <p className="w-full md:w-2/3 text-gray-400 text-lg font-semibold text-center">
          Link your repo and go live—then iterate with every push.
        </p>

        <div className="flex items-center gap-2 border-2 text-white border-white rounded-lg px-6 py-2 ">
          Next <FaArrowRight />
        </div>
      </div>

      <div className="w-full  lg:w-1/2 bg-[#1c0037] grid grid-cols-8 grid-rows-8 min-h-[300px] lg:min-h-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border border-[#48008c]" />
        ))}
      </div>
    </section>
  );
}
