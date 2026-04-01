import { useState } from "react";
import { Search, ShoppingCart, Bell, User, Menu, X, ChevronDown, ChevronLeft, LayoutGrid, Package, Heart, Wallet, FileText, LogOut } from "lucide-react";

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


export default function Navbar({ isSidebarOpen, setSidebarOpen }) {
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

  const NavbarNotificationButton = () => (
    <button className="relative p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
      <Bell size={18} strokeWidth={1.8} />
    </button>
  );

  const NavbarCartButton = () => (
    <button className="relative p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150">
      <ShoppingCart size={18} strokeWidth={1.8} />
      <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
        2
      </span>
    </button>
  );

  const UserDropdown = () => (
    <div className="relative group/user">
      <button className="flex items-center justify-center p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150 relative z-10">
        <User size={18} strokeWidth={1.8} />
      </button>

      {/* Invisible hover bridge to prevent menu closing when moving cursor */}
      <div className="hidden group-hover/user:block absolute top-full right-0 h-4 w-full bg-transparent z-40" />

      {/* Dropdown Card */}
      <div className="absolute right-0 top-[calc(100%+8px)] w-[260px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible -translate-y-2 group-hover/user:translate-y-0 transition-all duration-300 z-50 overflow-hidden font-inter">
        
        {/* Header */}
        <div className="p-4 flex items-center gap-3">
          <img src={mockUser.avatar} alt="User Avatar" className="w-11 h-11 rounded-full object-cover border border-gray-100" />
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-[#1A1A1A] leading-tight">{mockUser.name}</span>
            <span className="text-[12px] text-gray-500">{mockUser.email}</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-3 pb-3">
          <Link to="/overview" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-xl transition-colors">
            <LayoutGrid size={16} strokeWidth={2} />
            <span className="font-medium">Overview</span>
          </Link>
          
          <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#FF4D30] bg-[#FFF1F0]/50 hover:bg-[#FFF1F0] rounded-xl transition-colors">
            <User size={16} strokeWidth={2} />
            <span className="font-medium">Profile & Settings</span>
          </Link>

          <Link to="/orders" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-xl transition-colors">
            <Package size={16} strokeWidth={2} />
            <span className="font-medium">Orders</span>
          </Link>

          <Link to="/wishlist" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-xl transition-colors">
            <Heart size={16} strokeWidth={2} />
            <span className="font-medium">My Wish list</span>
          </Link>

          <Link to="/emi" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-xl transition-colors">
            <Wallet size={16} strokeWidth={2} />
            <span className="font-medium">EMI</span>
          </Link>

          <Link to="/history" className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#1A1A1A] hover:bg-gray-50 rounded-xl transition-colors">
            <FileText size={16} strokeWidth={2} />
            <span className="font-medium">Transaction History</span>
          </Link>

          <div className="h-px w-full bg-gray-100 my-2" />

          <button className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-[#4B5563] hover:text-[#FF4D30] hover:bg-red-50 rounded-xl transition-colors w-full text-left">
            <LogOut size={16} strokeWidth={2} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );

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
                    <NavbarCartButton />

                    {/* Notification Bell */}
                    <NavbarNotificationButton />

                    {/* User Dropdown (Desktop) */}
                    <UserDropdown />

                    {/* Hamburger / Menu */}
                    <button
                      onClick={() => setSidebarOpen(!isSidebarOpen)}
                      className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-150"
                    >
                      <Menu size={18} strokeWidth={1.8} />
                    </button>
                  </div>

                  {/* Mobile & Tablet: Search + Cart + User + Hamburger */}
                  <div className="flex lg:hidden items-center gap-1 sm:gap-2">
                    <LanguageSwitcher />
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-1.5 text-gray-500 hover:text-gray-900"
                    >
                      <Search size={18} strokeWidth={1.8} />
                    </button>

                    {/* Notification Icon (Visible on md, hidden on sm) */}
                    <div className="hidden md:block">
                      <NavbarNotificationButton />
                    </div>

                    {/* Cart Icon (Visible on md, hidden on sm) */}
                    <div className="hidden md:block">
                      <NavbarCartButton />
                    </div>

                    {/* User Dropdown (Visible on md, hidden on sm) */}
                    <div className="hidden md:block">
                      <UserDropdown />
                    </div>

                    <button
                      onClick={() => setSidebarOpen(true)}
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
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          user={mockUser}
        />
      </nav>
    </>
  );
}