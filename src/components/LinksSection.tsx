import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function LinksSection() {
  return (
    <div className="flex flex-col sm:flex-row bg-black text-white py-5 items-center justify-between px-7 ">
      <div className="flex items-center gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <FaLinkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <FaGithub size={18} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>

      <a
        href="mailto:Render@mail.com"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <MdEmail size={18} />
        <span>Render@mail.com</span>
      </a>
    </div>
  );
}
