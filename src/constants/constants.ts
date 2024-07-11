export const baseUrl = "https://api.frankfurter.app/";

export const NAV_LINKS = [
  { href: "/", key: "main", label: "Main 🏪" },
  { href: "/rates", key: "rates", label: "Rates 📊" },
  { href: "/about", key: "about", label: "About 🦄" },
];

export enum QueryKeys {
  SYMBOLS = "SYMBOLS",
  CONVERSIONED_VALUE = "CONVERSIONED_VALUE",
}
