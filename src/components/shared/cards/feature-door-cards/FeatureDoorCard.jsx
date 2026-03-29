import { StarIcon, HeartOutlineIcon, ArrowRightIcon } from '../../icons/Icons';

/**
 * FeatureDoorCard Component
 * @param {Object} product - Product data object
 */
const FeatureDoorCard = ({ product }) => {
  const {
    image,
    category,
    name,
    rating,
    reviews,
    price,
    oldPrice,
    emi,
    badges,
  } = product;

  return (
    <div className="group flex flex-col gap-4 font-albert cursor-pointer ">
      {/* Image Container */}
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 font-albert">
          {badges?.map((badge, index) => (
            <span
              key={index}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${badge.type === 'save'
                ? 'bg-[#FF9F00] text-white'
                : 'bg-white text-gray-900'
                }`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Hover Overlays */}
        <div className="absolute inset-x-0 bottom-2 px-2 flex items-center justify-between opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
          <button className="flex-1 mr-3 bg-white/95  text-[#4A5565] py-2.5 rounded-full text-sm font-medium shadow-xl flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 leading-5">
            Details View <ArrowRightIcon size={14} />
          </button>
          <button className="h-10 w-10 bg-[#1A1A1A]/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all duration-300">
            <HeartOutlineIcon size={20} color="red" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1.25 px-1 font-albert">
        <div className="flex justify-between items-center">
          <span className="bg-[#F3F4F6] text-[#6B7280] text-[10px] font-bold px-3 py-1 rounded-full tracking-tight">
            {category}
          </span>
          <div className="flex items-center gap-1.5">
            <StarIcon className="text-[#FFC107]" size={16} />
            <span className="text-xs font-bold text-[#1A1A1A]">{rating}</span>
            <span className="text-[11px] text-[#9CA3AF] font-medium">({reviews})</span>
          </div>
        </div>

        <h3 className="text-[18px] font-medium text-[#333E4F]  line-clamp-1 hover:text-red-500 transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2.5 ">
          <span className="text-[18px] font-normal text-[#030712] group-hover:text-blue-500 group-hover:font-medium  leading-7">৳{price.toLocaleString()}</span>
          {oldPrice && (
            <span className="text-[14px] text-[#9CA3AF] line-through font-normal group-hover:text-red-500 transition-all duration-300 leading-5">৳{oldPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="bg-[#FEFCE8] text-[#FF5A1F] text-xs font-semibold leading-[18px] px-3 py-1.5 rounded-full w-fit mt-1">
          0% EMI ৳{emi.toLocaleString()}/mo
        </div>
      </div>
    </div>
  );
};

export default FeatureDoorCard;

