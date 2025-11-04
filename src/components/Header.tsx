import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logos/logohc.png";
import medc from "../assets/Logos/Logo_medicinaUsp.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/MainMenu" },
    { name: "Integrantes", path: "/integrantes" },
    { name: "FAQ", path: "/faq" },
    { name: "Localização", path: "/Localizacao" },
  ];

  return (
    <header className="h-24 w-full bg-white shadow-md sticky top-0 z-40">
      <div className="flex justify-between items-center px-6 py-4">
        <img
          src={logo}
          alt="Logo Hospital das Clínicas"
          className="h-16 w-auto"
        />

        <nav className="hidden md:flex bg-blue-400 text-white p-3 gap-2 justify-center py-2 rounded-4xl shadow-md space-x-4 ">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 hover:bg-blue-600 rounded-full transition-colors ${
                  isActive ? "bg-blue-700 font-semibold md:w-fit" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <img
          src={medc}
          alt="Logo Medicina USP"
          className="hidden md:block h-16 w-auto"
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
          aria-label="Abrir menu"
        >
          <span
            className={`block h-1 bg-blue-600 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-blue-600 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 bg-blue-600 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-xl p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ zIndex: 10000 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold text-blue-600 mb-6">Menu</h2>

          <img
            src={medc}
            alt="Logo Medicina USP"
            className="max-w-full h-auto mb-6"
          />

          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-700 text-white font-semibold"
                      : "text-blue-600 hover:bg-blue-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Header;
