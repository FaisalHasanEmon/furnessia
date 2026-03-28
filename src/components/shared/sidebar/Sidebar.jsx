import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "/assets/logo/logo.png";
import { Link } from "react-router";
import { MyProfileIcon, MyOrderIcon, NotificationIcon, LogoutIcon } from "../icons/Icons";

const Sidebar = ({ isOpen, onClose, user = null }) => {
    const [expandedItems, setExpandedItems] = useState({});

    // Prevent background scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleAccordion = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const categories = [
        { id: "living", label: "Living Room", hasSub: false },
        { id: "bedroom", label: "Bedroom", hasSub: true, items: ["Single Bed", "Double Bed", "Suite"] },
        { id: "dining", label: "Dining", hasSub: true, items: ["Dining Table", "Chairs", "Cabinets"] },
        { id: "kitchen", label: "Kitchen", hasSub: true, items: ["Modern Kitchen", "Classic Kitchen"] },
        { id: "door", label: "Door", hasSub: true, items: ["Door 1", "door 2"] },
        { id: "store", label: "Store", hasSub: true, items: ["Visit Store", "Store Locator"] },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Drawer */}
            <div
                className={`fixed right-0 top-0 h-full bg-white z-60 shadow-2xl transition-transform duration-300 transform w-[280px] sm:w-[320px] ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Scrollable Container */}
                <div className="h-full overflow-y-auto flex flex-col no-scrollbar">
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-gray-100">
                        <Link to="/" onClick={onClose}>
                            <img src={logo} alt="Furnessia" className="h-8 w-auto object-contain" />
                        </Link>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* User Section */}
                    {user ? (
                        <div className="p-5">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                                    <img
                                        src={user.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&q=80"}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 truncate">{user.name}</h3>
                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                </div>
                            </div>

                            {/* User Action Links */}
                            <div className="space-y-1">
                                <Link to="/profile" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
                                    <span className="text-sm font-medium">My Profile</span>
                                    <MyProfileIcon size={18} className="text-gray-400" />
                                </Link>
                                <Link to="/orders" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
                                    <span className="text-sm font-medium">My Orders</span>
                                    <MyOrderIcon size={18} className="text-gray-400" />
                                </Link>
                                <Link to="/notifications" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
                                    <span className="text-sm font-medium">Notifications</span>
                                    <NotificationIcon size={18} className="text-gray-400" />
                                </Link>
                                <button className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-red-50 text-red-600 transition-colors group">
                                    <span className="text-sm font-medium">Log Out</span>
                                    <LogoutIcon size={18} className="text-red-400 group-hover:text-red-600" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-5">
                            <Link
                                to="/login"
                                onClick={onClose}
                                className="w-full h-11 bg-[#F93914] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
                            >
                                Log in <span className="text-xl">→</span>
                            </Link>
                        </div>
                    )}

                    <div className="px-5">
                        <div className="h-px bg-gray-100 w-full mb-2" />
                    </div>

                    {/* Category Navigation */}
                    <div className="flex-1 px-3 py-2">
                        {categories.map((cat) => {
                            const isExpanded = expandedItems[cat.id];
                            return (
                                <div key={cat.id} className="mb-1">
                                    <div
                                        onClick={() => cat.hasSub ? toggleAccordion(cat.id) : onClose()}
                                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors relative group
                                            ${isExpanded ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                                        `}
                                    >
                                        {/* Active Indicator Bar */}
                                        {isExpanded && cat.hasSub && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#F93914] rounded-r-full" />
                                        )}

                                        <span className={`text-[15px] font-semibold font-albert ${isExpanded && cat.hasSub ? "pl-2" : ""}`}>
                                            {cat.label}
                                        </span>

                                        {cat.hasSub && (
                                            <span className="text-gray-400">
                                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </span>
                                        )}
                                    </div>

                                    {/* Accordion Sub-items */}
                                    {cat.hasSub && (
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-transparent ${isExpanded ? "max-h-40 py-1" : "max-h-0"}`}>
                                            {cat.items.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={`/shop/${cat.id}/${item.toLowerCase().replace(/ /g, "-")}`}
                                                    onClick={onClose}
                                                    className="block px-6 py-2 text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium ml-4"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
