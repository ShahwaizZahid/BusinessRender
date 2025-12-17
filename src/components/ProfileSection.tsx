export default function ProfileSection() {
  return (
    <section>
      <div className="w-full h-[600px] relative bg-black grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-6">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-[#272727]" />
        ))}

        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl">
            <div
              className="
                bg-black p-6
                w-full sm:w-[90%] lg:w-[800px]
                h-auto lg:h-[300px]
                flex flex-col justify-between
              "
            >
              <p className="text-white text-lg sm:text-xl max-w-full lg:max-w-md">
                "Easier than large clouds, more feature-rich than single-purpose
                hosting providers, Render lets me ship the entirety of my
                projects in one place."
              </p>

              <span className="bg-[#003924] w-fit text-white px-3 py-1 mt-4">
                Mitchell Hashimoto, Co-Founder of Hashicorp
              </span>
            </div>

            <img
              className="
                w-[220px] h-[220px]
                sm:w-[260px] sm:h-[260px]
                lg:w-[300px] lg:h-[300px]
                object-cover
                lg:mt-24
              "
              src="https://cdn.sanity.io/images/hvk0tap5/production/6c945bf43f176d1c926d0b40399eed4c431a6786-1080x1080.png?w=720&fm=webp&fit=max&auto=format"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
