export default function StatusSection() {
  return (
    <section className="w-full">
      <div className="relative bg-[#00102a] min-h-[600px] grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-6">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-[#002c6f]" />
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="grid gap-6 sm:gap-8 
                          grid-cols-1 
                          sm:grid-cols-2 
                          lg:grid-cols-3 
                          max-w-6xl w-full"
          >
            <div className="text-white bg-[#002c6f] p-6 sm:p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">5M+</h1>
              <span className="text-sm sm:text-base opacity-90">
                Live Services
              </span>
            </div>

            <div className="text-white bg-[#002c6f] p-6 sm:p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">100B+</h1>
              <span className="text-sm sm:text-base opacity-90">
                HTTP Requests Per Month
              </span>
            </div>

            <div className="text-white bg-[#002c6f] p-6 sm:p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">100M+</h1>
              <span className="text-sm sm:text-base opacity-90">Deploys</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
