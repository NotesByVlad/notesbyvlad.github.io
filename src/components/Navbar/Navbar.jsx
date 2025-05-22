import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

// useLocation hook to get the current URL path
  const location = useLocation();

// array of objects -> menu items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Passions", path: "/passions" },
    { name: "Playground", path: "/playground" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <ul className="flex gap-6 justify-center">

        {/* goes over each nav item in the array and creates a li for each one */}
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-lg font-medium hover:text-blue-600 ${
                location.pathname === item.path ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Tailwind:

// <nav>
//
// bg-white: white background
//
// shadow-md: subtle shadow
//
// px-4 py-3: horizontal + vertical padding
//
// sticky top-0: stays at the top when scrolling
//
// z-50: ensures it stays on top of other elements (layering)
//
// </nav>

//<ul>
//
//flex: horizontal layout
//
//gap-6: spacing between items
//
//justify-center: centers all links in the navbar
//
//</ul>