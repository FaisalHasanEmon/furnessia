import { useState } from "react";
import { Search, ShoppingCart, Bell, User, Menu, X, ChevronDown } from "lucide-react";
// Update this import path to match your actual logo file
import logo from "/src/assets/logo/logo.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", key: "home", href: "/" },
  { label: "Shop", key: "shop", href: "/shop" },
  { label: "Dining", key: "dining", href: "/dining" },
  { label: "Bedroom", key: "bedroom", href: "/bedroom" },
  { label: "Living", key: "living", href: "/living" },
  { label: "Office", key: "office", href: "/office" },
  { label: "Custom Order", key: "customOrder", href: "/custom-order" },
  { label: "Contact", key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLang = i18n.language?.startsWith("bn") ? "bn" : "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "bn" : "en");
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-inter">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Furnessia Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    // Fallback if logo not found
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback Logo Badge */}
                <span
                  className="hidden items-center justify-center bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
                  style={{ display: "none" }}
                >
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] font-extrabold tracking-widest">FURNESSIA</span>
                    <span className="text-[7px] font-light tracking-wider opacity-90">the essence of elegant living</span>
                  </span>
                </span>
              </Link>
            </div>

            {/* Center Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <Link
                    key={link?.label}
                    to={link?.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap
                      ${isActive
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {t(link?.key)}
                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-800 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium border-r border-gray-300 pr-3"
              >
                <span className={currentLang === "en" ? "text-gray-900 font-semibold" : "text-gray-400"}>
                  ENG
                </span>
                <span className="text-gray-300">|</span>
                <span className={currentLang === "bn" ? "text-gray-900 font-semibold" : "text-gray-400"}>
                  বাংলা
                </span>
              </button>

              {/* Search */}
              <button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
                <Search size={18} strokeWidth={1.8} />
              </button>

              {/* Cart */}
              <button className="relative p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
                <ShoppingCart size={18} strokeWidth={1.8} />
                {/* Cart badge */}
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                  2
                </span>
              </button>

              {/* Notification Bell */}
              <button className="relative p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
                <Bell size={18} strokeWidth={1.8} />
              </button>

              {/* User */}
              <button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
                <User size={18} strokeWidth={1.8} />
              </button>

              {/* Hamburger / Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150"
              >
                <Menu size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Mobile: Right side icons */}
            <div className="flex lg:hidden items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:text-gray-900">
                <Search size={18} strokeWidth={1.8} />
              </button>
              <button className="relative p-1.5 text-gray-500 hover:text-gray-900">
                <ShoppingCart size={18} strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-gray-500 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                      ${isActive
                        ? "bg-gray-100 text-gray-900 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}

              {/* Mobile Language + User actions */}
              <div className="flex items-center gap-4 px-3 pt-3 pb-1 border-t border-gray-100 mt-2">
                <button
                  onClick={toggleLanguage}
                  className="text-sm text-gray-600 font-medium flex items-center gap-1"
                >
                  <span className={currentLang === "en" ? "text-gray-900 font-semibold" : "text-gray-400"}>ENG</span>
                  <span className="text-gray-300">|</span>
                  <span className={currentLang === "bn" ? "text-gray-900 font-semibold" : "text-gray-400"}>বাংলা</span>
                </button>
                <button className="p-1.5 text-gray-500 hover:text-gray-900">
                  <Bell size={18} strokeWidth={1.8} />
                </button>
                <button className="p-1.5 text-gray-500 hover:text-gray-900">
                  <User size={18} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}