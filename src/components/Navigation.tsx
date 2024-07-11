import { NAV_LINKS } from "../constants/constants";

const Navigation = () => {
  return (
    <nav className=" justify-between flex max-container padding-container relative z-30 py-5 px-20">
      <div>
        <img src="/coin.png" alt="Logo" width={80} height={50} />
      </div>

      <ul className="hidden h-full gap-12 lg:flex items-baseline">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-20 text-2xl flexCenter cursor-pointer pb-1.5 transition-all"
          >
            {link.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;