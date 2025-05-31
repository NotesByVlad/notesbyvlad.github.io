import NavLinks from "./components/NavLinks";
import HamburgerButton from "./components/HamburgerButton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 relative z-50">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-4xl text-primaryColor font-bold z-10">NotesByVlad</div>

        {/* NavLinks */}
        <div className="text-xl transform hidden md:block py-1 z-0">
          <NavLinks className="flex gap-6 items-center" />
        </div>

        {/* Hamburger */}
        <div className="z-10 md:hidden">
          <HamburgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
      </div>


      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed inset-0 bg-backgroundColor transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <NavLinks
          className={`
            flex flex-col items-center justify-center h-full gap-6
            text-base
            [@media(min-width:400px)]:text-4xl
            [@media(max-width:340px)]:text-2xl
            transition-all duration-300 ease-in-out transform
            ${isOpen ? "translate-y-0" : "-translate-y-96"}
          `}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}
