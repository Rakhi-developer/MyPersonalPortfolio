import { useState, useEffect } from "react";
import profilePic from "../assets/linkedin.png";
import github from "../assets/github.png"; // GitHub image
import resume from "../assets/resume.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-neutral-900 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-12 animate-half-spin"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* LinkedIn Image */}
        <a
          href={import.meta.env.VITE_REACT_APP_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-5" src={profilePic} alt="linkedin" />
        </a>

        {/* GitHub Image */}
        <a
          href={import.meta.env.VITE_REACT_APP_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-5 cursor-pointer" src={github} alt="github" />
        </a>

        {/* Resume Image */}
        <a
          href={import.meta.env.VITE_REACT_APP_RESUME}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-5 cursor-pointer" src={resume} alt="resume" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
