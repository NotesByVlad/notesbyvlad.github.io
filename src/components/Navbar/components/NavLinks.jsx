import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Path", path: "/path" },
  { name: "Playground", path: "/playground" },
];

export default function NavLinks({ onClick, className }) {
  const location = useLocation();

  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            onClick={onClick}
            className={`p-2 
              ${location.pathname === item.path ? "text-primaryColor" : "hover:text-secondaryColor"
            }`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
