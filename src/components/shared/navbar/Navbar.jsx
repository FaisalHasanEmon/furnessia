import { useState } from "react";
import { Search, ShoppingCart, Bell, User, Menu, X, ChevronDown, ChevronLeft } from "lucide-react";

import logo from "/assets/logo/logo.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import LanguageSwitcher from "../languageSwticher/LanguageSwitcher";
import Sidebar from "../sidebar/Sidebar";



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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLang = i18n.language?.startsWith("bn") ? "bn" : "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "bn" : "en");
  };

  // Mock user for Sidebar demonstration
  const mockUser = {
    name: "Abu Taher Molla",
    email: "molla.ux@gmail.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&q=80"
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="w-full bg-[#FAF8F3] sticky top-0 z-50 font-inter">
        <div className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-15">

            {/* Logo */}
            <div className="shrink-0">
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

            {/* Center Nav Links - Always visible */}
            <div className="hidden xl:flex items-center gap-1">
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
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {isSearchOpen ? (
                <div className="flex items-center gap-2 w-full sm:max-w-[280px] lg:max-w-[320px] animate-in fade-in slide-in-from-right-4 duration-300">
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150 shrink-0"
                  >
                    <ChevronLeft size={18} strokeWidth={1.8} />
                  </button>
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} strokeWidth={1.8} />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-[#FAF8F3]/50 border border-gray-200 rounded-xl py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="hidden lg:flex items-center gap-3">
                    <LanguageSwitcher />

                    {/* Search Trigger */}
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150"
                    >
                      <Search size={18} strokeWidth={1.8} />
                    </button>

                    {/* Cart */}
                    <button className="relative p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
                      <ShoppingCart size={18} strokeWidth={1.8} />
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

                  {/* Mobile: Search + Hamburger */}
                  <div className="flex lg:hidden items-center gap-2">
                    <LanguageSwitcher />
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-1.5 text-gray-500 hover:text-gray-900"
                    >
                      <Search size={18} strokeWidth={1.8} />
                    </button>
                    <button
                      onClick={() => setMobileMenuOpen(true)}
                      className="p-1.5 text-gray-500 hover:text-gray-900"
                    >
                      <Menu size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Sidebar
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          user={mockUser}
        />
      </nav>
    </>
  );
}