export default function HamburgerButton({ onClick, isOpen }) {
  return (
    <button
      className="md:hidden flex flex-col items-center"
      onClick={onClick}
    >
      <span
        className={`h-0.5 w-6 bg-text mb-1 transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-text mb-1 transition duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-text transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}