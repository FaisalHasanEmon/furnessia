import { HomeIcon, HomeActiveIcon, ChatIcon, ChatActiveIcon, ShopIcon, ShopActiveIcon, MobileCartIcon, MobileCartActiveIcon, AccountIcon, AccountActiveIcon } from "../icons/Icons";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";


const navLinks = [
    {
        label: "Home",
        key: "home",
        href: "/",
        icon: <HomeIcon />,
        iconActive: <HomeActiveIcon />
    },
    {
        label: "Chat",
        key: "contact",
        href: "/contact",
        icon: <ChatIcon />,
        iconActive: <ChatActiveIcon />

    },
    {
        label: "Shop",
        key: "shop",
        href: "/shop",
        icon: <ShopIcon />,
        iconActive: <ShopActiveIcon />
    },
    {
        label: "Cart",
        key: "cart",
        href: "/cart",
        icon: <MobileCartIcon />,
        iconActive: <MobileCartActiveIcon />
    },
    {
        label: "Account",
        key: "account",
        href: "/account",
        icon: <AccountIcon />,
        iconActive: <AccountActiveIcon />
    },
];

const MobileNavbar = () => {
    const { t } = useTranslation();
    return (
        <section className="fixed w-full bottom-0 left-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="w-full px-2 grid grid-cols-5 gap-0 h-16">
                {navLinks.map((link) => {
                    const Icon = link?.icon;
                    const IconActive = link?.iconActive;
                    return (
                        <NavLink key={link.key} to={link.href} className="flex items-center justify-center h-full">
                            {({ isActive }) => (
                                <div
                                    className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-200 ${isActive
                                        ? "text-[#1E2939]"
                                        : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    {isActive ? IconActive : Icon}
                                    <span className={`font-albert text-[10px] sm:text-xs transition-all duration-200 ${isActive ? "font-semibold" : "font-medium"}`}>
                                        {t ? t(link.key) : link.label}
                                    </span>
                                </div>
                            )}
                        </NavLink>
                    );
                })}
            </div>
            {/* Safe area padding for iPhones with bottom notches */}
            <div className="h-[env(safe-area-inset-bottom)] bg-white w-full"></div>
        </section>
    );
};

export default MobileNavbar;