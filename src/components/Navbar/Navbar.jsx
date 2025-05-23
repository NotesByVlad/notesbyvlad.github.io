import NavLinks from "./components/NavLinks";
import HamburgerButton from "./components/HamburgerButton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 py-3 relative z-50">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-xl font-bold z-10">NotesByVlad</div>

        {/* NavLinks */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block shadow px-4 py-1 z-0">
          <NavLinks className="flex gap-6 items-center" />
        </div>

        {/* Hamburger */}
        <div className="z-10 md:hidden">
          <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
      </div>


      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <NavLinks
          className={`flex flex-col items-center gap-3 bg-white transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}
