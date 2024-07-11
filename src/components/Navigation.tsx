import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/constants";
import { useEffect, useState } from "react";
import MenuIcon from "./Icons/MenuIcon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        transition: "opacity 0.5s ease-in-out, max-height 0.5s ease-in-out",
        maxHeight: isMenuOpen ? "100vh" : "130px",
      }}
      className={`justify-between flex max-container padding-container relative z-30 py-5 px-12 sm:px-20 xl:px-40 ${
        isMenuOpen && "h-[100vh]"
      }`}
    >
      <div className={`${isMenuOpen && "hidden"}`}>
        <img src="/coin.png" alt="Logo" width={80} height={50} />
      </div>

      <ul
        className={`lg:flex ${
          isMenuOpen
            ? "flex flex-col justify-center w-full items-center"
            : "hidden items-baseline"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="mb-4 lg:mr-10 xl:mr-16 lg:mb-0">
            <Link
              to={link.href}
              key={link.key}
              className="regular-16 text-gray-50 text-2xl flex items-center cursor-pointer pb-1.5 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <button
          className="text-white  focus:outline-none  bg-custom-gradient p-2 rounded-md"
          onClick={toggleMenu}
        >
          <MenuIcon isMenuOpen={isMenuOpen}/>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
