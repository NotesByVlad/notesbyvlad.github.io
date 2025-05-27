// src/components/NavLinks.jsx
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Passions", path: "/passions" },
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
            className={`text-lg font-medium hover:text-blue-600 ${
              location.pathname === item.path ? "text-red-500" : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
