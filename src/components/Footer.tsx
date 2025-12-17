export default function Footer() {
  return (
    <section>
      <div className="w-full relative bg-black overflow-visible">
        <div className="absolute inset-0 pointer-events-none grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-9">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-[#272727]" />
          ))}
        </div>

        <div className="relative z-10 w-full lg:w-[90%] bg-[#141414] mx-auto flex justify-center px-4 sm:px-8 py-12">
          <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
            <div>
              <span className="text-lg">Features</span>
              <ul className="text-sm text-gray-400 mt-6 space-y-2">
                <li>Autoscaling</li>
                <li>Private Networking</li>
                <li>Render Postgres</li>
                <li>Render Key Value</li>
                <li>Persistent Disks</li>
                <li>Infrastructure As Code</li>
                <li>Preview Environments</li>
                <li>Zero Downtime Deploys</li>
                <li>Render API</li>
              </ul>
            </div>

            <div>
              <span className="text-lg">Services</span>
              <ul className="text-sm text-gray-400 mt-6 space-y-2">
                <li>Static Sites</li>
                <li>Private Services</li>
                <li>Web Services</li>
                <li>Background Workers</li>
                <li>Render Postgres</li>
                <li>Render Key Value</li>
                <li>Deploy Docker Images</li>
              </ul>
            </div>

            <div>
              <span className="text-lg">Resources</span>
              <ul className="text-sm text-gray-400 mt-6 space-y-2">
                <li>Blog</li>
                <li>Changelog</li>
                <li>Docs</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Community</li>
                <li>Privacy Policy</li>
                <li>DMCA Policy</li>
                <li>DPA</li>
                <li>Acceptable Use</li>
                <li>Terms of Use</li>
              </ul>
            </div>

            <div>
              <span className="text-lg">Company</span>
              <ul className="text-sm text-gray-400 mt-6 space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Brand Kit</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
