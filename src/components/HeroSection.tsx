import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen lg:h-screen bg-black flex flex-col  justify-center lg:flex-row items-center border-b 
    mt-16 border-gray-500"
    >
      <div className="w-full lg:w-1/2 px-6 lg:px-16 text-white flex items-start lg:items-center justify-center flex-col space-y-6 py-12 lg:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold">
          Your fastest path to production
        </h1>

        <div className="w-full max-w-[600px] lg:w-4/5  text-gray-400 text-lg sm:text-xl md:text-2xl font-semibold font-sans">
          Build, deploy, and scale your apps with unparalleled ease – from your
          first user to your billionth
        </div>

        <div className="flex flex-col justify-center   sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-[600px]">
          <div className="w-full sm:w-auto ">
            <Button className="relative h-16 w-full sm:w-auto px-6 bg-white border-none text-black rounded-none overflow-hidden group flex items-center justify-center gap-2">
              <span className="relative z-10 transition-colors duration-300 ">
                Get started for free
              </span>

              <img
                src="/arrow.svg"
                alt="arrow"
                className="relative z-10 w-4 h-4"
              />

              <span className="absolute inset-0 bg-[#8a05ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </Button>
          </div>
          <div className="w-full sm:w-auto ">
            <Button className="relative h-16 w-full sm:w-auto px-6 bg-white border-none text-black rounded-none overflow-hidden group flex items-center justify-center gap-2">
              <span className="relative z-10 transition-colors duration-300 ">
                Contact Sale
              </span>

              <img
                src="/arrow.svg"
                alt="arrow"
                className="relative z-10 w-4 h-4"
              />

              <span className="absolute inset-0 bg-[#8a05ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-1/2 hidden lg:grid grid-cols-8 grid-rows-9 gap-0 h-full">
        {Array.from({ length: 72 }).map((_, index) => {
          let borderClasses = "border border-gray-500";

          if (index === 8) borderClasses = "border-t border-r border-gray-500";

          if (index === 16) borderClasses = "";

          if (index === 17) borderClasses = "border-t border-r border-gray-500";

          if (index === 24) borderClasses = "";

          if (index === 25) borderClasses = "border-b border-r border-gray-500";

          if ([32, 40, 48].includes(index)) borderClasses = "";

          if (index === 41) borderClasses = "";

          return (
            <div key={index} className={`h-full w-full ${borderClasses}`}></div>
          );
        })}
      </div>
    </div>
  );
}
