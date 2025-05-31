export default function HamburgerButton({ onClick, isOpen }) {
  return (
    <button
      className="md:hidden flex flex-col items-center group"
      onClick={onClick}
    >
      <span
        className={`h-0.5 w-6 bg-primaryColor mb-1 transform transition duration-300 ease-in-out 
                  ${isOpen ? "rotate-45 translate-y-1.5" : ""}
                  bg-primaryColor group-hover:bg-secondaryColor`}
      />
      <span
        className={`h-0.5 w-6  mb-1 transition duration-300 ease-in-out
                  ${isOpen ? "opacity-0" : ""}
                  bg-primaryColor group-hover:bg-secondaryColor`}
      />
      <span
        className={`h-0.5 w-6 bg-primaryColor transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""}
                  bg-primaryColor group-hover:bg-secondaryColor`}
      />
    </button>
  );
}