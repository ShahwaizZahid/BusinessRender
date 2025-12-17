import { useState } from "react";
import { Button } from "./ui/button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Product",
    "Pricing",
    "Customers",
    "Blog",
    "Doc",
    "Changelog",
    "Company",
  ];

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="flex justify-between items-center bg-black h-16 text-white border-b-2 border-white pl-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="text-white lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>

          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="60"
              viewBox="0 0 300 60"
            >
              <g transform="translate(50,30)">
                <polygon points="0,-12.5 20,0 0,12.5" fill="#ffffff" />
                <text
                  x="30"
                  y="5"
                  font-family="Arial, sans-serif"
                  font-size="24"
                  fill="#ffffff"
                  font-weight="bold"
                >
                  Render
                </text>
              </g>
            </svg>
          </div>

          <div className="hidden lg:block">
            <ul className="flex ml-16 space-x-7 text-sm">
              {navItems.map((item) => (
                <li key={item} className="relative overflow-hidden group">
                  <a
                    href="/"
                    className="relative z-10 px-2 py-2 text-white group-hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                  <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 group-hover:bg-[#42017e] transition-all duration-300 ease-out"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <Button className="h-16 bg-transparent hidden sm:inline-flex">
              Contact
            </Button>
          </div>
          <div>
            <Button className="relative h-16 px-6 bg-white border-none text-black rounded-none overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Dashboard
              </span>

              <span className="absolute inset-0 bg-[#8a05ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-0 right-0 top-16 bottom-0 z-40 bg-black text-white overflow-auto">
          <div className="flex flex-col w-full  ">
            <ul className="flex flex-col   text-xl w-full ">
              {navItems.map((item) => (
                <li key={item} className="w-full ">
                  <div className=" border-b-2 border-white">
                    <a
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="block w-full  text-white hover:text-[#8a05ff] text-sm transition-colors py-3 px-3"
                    >
                      {item}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
