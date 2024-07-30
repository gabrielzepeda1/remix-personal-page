import { Link } from "@remix-run/react";
import { Navbar } from "flowbite-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-left gap-4 px-5 py-6 md:px-6 lg:px-8">
        <span className="font-medium font-display text-white">
          Gabriel Zepeda
        </span>

        <Link
          to="https://www.linkedin.com/in/gabrielzepeda1/"
          className="text-white text-2xl w-7 h-7 transition-scale hover:scale-125 grid place-items-center"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://github.com/gabrielzepeda1"
          className="text-white text-2xl w-7 h-7 transition-scale hover:scale-125 grid place-items-center"
        >
          <FaGithub />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
