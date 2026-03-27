import { Link } from "react-router";
import { ArrowRightLongIcon } from "../icons/Icons";

const CategoryAndViewAll = ({ title, navName = "View All", navLink = "/" }) => {
    return (
        <div className="flex justify-between items-center font-albert">
            <h2 className="text-4xl font-bold font-familjen md:font-albert">{title}</h2>
            <Link to={navLink} className="text-xs lg:text-sm py-2.5 px-4 rounded-full font-medium text-gray-500 hover:text-gray-900 border border-0.5 border-[#E5E7EB] hover:bg-gray-100 transition-all duration-150 flex items-center gap-2">{navName} <ArrowRightLongIcon size={16} className="text-gray-500 hover:text-gray-900" /></Link>
        </div>
    );
};

export default CategoryAndViewAll;