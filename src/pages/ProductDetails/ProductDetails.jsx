
import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Plus, Minus, Search, Play } from 'lucide-react';
import { StarIcon, HeartOutlineIcon } from '../../components/shared/icons/Icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const ProductDetails = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(999);

  const [activeAccordions, setActiveAccordions] = useState({
    seating: false,
    material: true,
    dimensions: false,
  });

  const toggleAccordion = (key) => {
    setActiveAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [activeTab, setActiveTab] = useState('Product Video');

  const product = {
    id: id,
    title: "Luxury kitchen Islands with wood style luxury kitchen Islands with...",
    category: "Living Room",
    model: "MSB-88",
    rating: 5.0,
    reviews: 235,
    price: 49.5,
    oldPrice: 127.99,
    discount: "50% OFF",
    images: [
      "https://images.unsplash.com/photo-1549488344-cbb6c34ce08b?w=800&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80"
    ]
  };

  return (
    <div className="bg-white min-h-screen font-albert border max-w-480 px-20">

      {/* ── BREADCRUMB ── */}
      <div className="  mx-auto  py-4">
        <nav className="flex items-center gap-2 text-[13px] text-[#6B7280]">
          <button className="h-7 w-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
            <ChevronLeft size={13} />
          </button>
          <button className="h-7 w-7 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
            <ChevronRight size={13} />
          </button>
          <div className="flex items-center gap-1.5 ml-1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <Link to="/" className="hover:text-black">Home</Link>
          </div>
          <ChevronRight size={12} className="text-gray-400" />
          <Link to="/furniture" className="hover:text-black">Furniture</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="text-[#1A1A1A]">Scandinavian Armchair</span>
        </nav>
      </div>

      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div className="w-full pb-16 border border-red-500">
        <div className="flex flex-col lg:flex-row gap-8 items-start border border-blue-500">

          {/* ════ LEFT COLUMN — flex-1 ════ */}
          <div className="flex-1 min-w-0 flex flex-col gap-0">

            {/* Main image viewer */}
            <div
              className="relative bg-[#F4F5F7] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ height: '420px' }}
            >
              <Swiper
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-full"
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center p-10">
                    <img
                      src={img}
                      className="object-contain w-full h-full"
                      alt={`Product ${i + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="absolute right-4 bottom-4 z-10 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-gray-400 hover:text-black transition-colors">
                <Search size={16} />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="relative mt-4 px-10">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={12}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{ prevEl: '.thumb-prev', nextEl: '.thumb-next' }}
                className="product-thumbs"
                style={{ height: '88px' }}
              >
                {product.images.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    className="rounded-xl overflow-hidden border-2 border-transparent [&.swiper-slide-thumb-active]:border-[#1A1A1A] opacity-50 [&.swiper-slide-thumb-active]:opacity-100 bg-[#F4F5F7] flex items-center justify-center p-2 cursor-pointer transition-all"
                  >
                    <img src={img} className="object-contain h-full w-full" alt={`Thumb ${i + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="thumb-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#1B2631] text-white rounded-full flex items-center justify-center shadow hover:bg-black transition-all">
                <ChevronLeft size={16} />
              </button>
              <button className="thumb-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#1B2631] text-white rounded-full flex items-center justify-center shadow hover:bg-black transition-all">
                <ChevronRight size={16} />
              </button>
            </div>

            {/* ── TABS ── */}
            <div className="mt-8">
              <div className="flex gap-8 border-b border-gray-200 text-[#6B7280] text-[16px] font-medium">
                {['Description', 'Product Video', 'Specs', 'Care', 'Warranty'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 relative transition-colors whitespace-nowrap ${activeTab === tab ? 'text-[#1A1A1A] font-bold' : 'hover:text-[#1A1A1A]'}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A] rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                {activeTab === 'Product Video' && (
                  <div
                    className="relative w-full bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group"
                    style={{ aspectRatio: '16/7' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
                      alt="Video"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#1B2631]/90 rounded-full flex items-center justify-center text-white pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab !== 'Product Video' && (
                  <div className="p-8 bg-[#F9FAFB] rounded-2xl text-[#4B5563]">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{activeTab}</h3>
                    <p className="leading-relaxed text-sm">Placeholder content for the {activeTab} section.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* ════ END LEFT COLUMN ════ */}

          {/* ════ RIGHT COLUMN — fixed 310px ════ */}
          <div className="w-[310px] flex-shrink-0 flex flex-col gap-4">

            {/* Title */}
            <h1 className="text-[20px] leading-[1.3] font-semibold text-[#1A1A1A]">
              {product.title}
            </h1>

            {/* Category + Model tags */}
            <div className="flex items-center gap-2 text-[12px] text-[#6B7280]">
              <span className="border border-gray-200 rounded px-2.5 py-1 bg-gray-50">{product.category}</span>
              <span className="border border-gray-200 rounded px-2.5 py-1 bg-gray-50">Model: {product.model}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#FFC107] gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} size={16} />)}
              </div>
              <span className="font-bold text-[14px] text-[#1A1A1A]">{product.rating}</span>
              <span className="text-[12px] text-[#9CA3AF] underline underline-offset-2 cursor-pointer hover:text-gray-600">
                {product.reviews} Reviews
              </span>
            </div>

            {/* Price row */}
            <div className="flex items-center gap-3">
              <span className="text-[30px] font-bold text-[#1A1A1A] leading-none">৳{product.price}</span>
              <span className="text-[17px] text-[#9CA3AF] line-through font-medium">৳{product.oldPrice}</span>
              <span className="bg-[#FF4D30] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {product.discount}
              </span>
            </div>

            {/* ── ACCORDIONS ── */}
            <div className="flex flex-col gap-2.5 pt-1 border-t border-gray-100">

              {/* Seating & Size */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion('seating')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-gray-500">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 18v-5.5a2.5 2.5 0 0 1 5 0V18" /><path d="M14 18v-5.5a2.5 2.5 0 0 1 5 0V18" />
                        <path d="M5 11.5V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.5" /><path d="M2 18h20" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[13px] text-[#1A1A1A]">Seating & Size</p>
                      <p className="text-[11px] text-[#6B7280]">2 Seater • Compact</p>
                    </div>
                  </div>
                  {activeAccordions.seating
                    ? <ChevronUp size={17} className="text-gray-400 flex-shrink-0" />
                    : <ChevronDown size={17} className="text-gray-400 flex-shrink-0" />}
                </button>
                {activeAccordions.seating && (
                  <div className="px-4 pb-3 pt-1 border-t border-gray-100 text-[12px] text-gray-500">
                    Seating details here.
                  </div>
                )}
              </div>

              {/* Material & Structure */}
              <div className={`border rounded-2xl overflow-hidden ${activeAccordions.material ? 'border-[#FF4D30]/30' : 'border-gray-200'}`}>
                <button
                  onClick={() => toggleAccordion('material')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white relative"
                >
                  {activeAccordions.material && (
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF4D30] rounded-l-2xl" />
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activeAccordions.material ? 'bg-[#FFF1F0] text-[#FF4D30]' : 'bg-[#F3F4F6] text-gray-500'}`}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[13px] text-[#1A1A1A]">Material & Structure</p>
                      <p className={`text-[11px] ${activeAccordions.material ? 'text-[#FF4D30]' : 'text-[#6B7280]'}`}>
                        Engineered Wood • Metal legs
                      </p>
                    </div>
                  </div>
                  {activeAccordions.material
                    ? <ChevronUp size={17} className="text-[#FF4D30] flex-shrink-0" />
                    : <ChevronDown size={17} className="text-gray-400 flex-shrink-0" />}
                </button>

                {activeAccordions.material && (
                  <div className="border-t border-gray-100 px-4 py-3 flex flex-col gap-4">
                    {/* Wood Type */}
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-[12px] font-bold text-[#1A1A1A]">Wood Type</span>
                        <span className="text-red-500 text-[11px]">*</span>
                        <svg className="text-gray-400 ml-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                        </svg>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <label className="flex items-center gap-1.5 border-2 border-[#FF4D30] bg-[#FFF1F0] px-3 py-1.5 rounded-full cursor-pointer">
                          <input type="radio" name="wood" className="w-3.5 h-3.5 accent-[#FF4D30]" defaultChecked />
                          <span className="text-[11px] font-bold text-[#1A1A1A]">Engineered Wood</span>
                          <span className="text-[10px] text-[#FF4D30] font-semibold">+৳3,000</span>
                        </label>
                        <label className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:border-gray-300">
                          <input type="radio" name="wood" className="w-3.5 h-3.5 accent-[#FF4D30]" />
                          <span className="text-[11px] text-[#4B5563]">MDF</span>
                        </label>
                        <label className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:border-gray-300">
                          <input type="radio" name="wood" className="w-3.5 h-3.5 accent-[#FF4D30]" />
                          <span className="text-[11px] text-[#4B5563]">Mahogany</span>
                          <span className="text-[10px] text-gray-400">+৳8,000</span>
                        </label>
                      </div>
                    </div>
                    {/* Leg Style */}
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-[12px] font-bold text-[#1A1A1A]">Leg Style</span>
                        <span className="text-red-500 text-[11px]">*</span>
                        <svg className="text-gray-400 ml-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                        </svg>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <label className="flex items-center gap-1.5 border-2 border-[#FF4D30] bg-[#FFF1F0] px-3 py-1.5 rounded-full cursor-pointer">
                          <input type="radio" name="leg" className="w-3.5 h-3.5 accent-[#FF4D30]" defaultChecked />
                          <span className="text-[11px] font-bold text-[#1A1A1A]">Metal</span>
                        </label>
                        <label className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:border-gray-300">
                          <input type="radio" name="leg" className="w-3.5 h-3.5 accent-[#FF4D30]" />
                          <span className="text-[11px] text-[#4B5563]">Wooden</span>
                          <span className="text-[10px] text-gray-400">+৳0</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dimensions */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion('dimensions')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-gray-500">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="8" x="2" y="8" rx="2" />
                        <path d="M6 16v4" /><path d="M18 16v4" /><path d="M6 8V4" /><path d="M18 8V4" />
                        <line x1="10" x2="14" y1="12" y2="12" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[13px] text-[#1A1A1A]">Dimensions</p>
                      <p className="text-[11px] text-[#6B7280]">84" x 36" x 32"</p>
                    </div>
                  </div>
                  {activeAccordions.dimensions
                    ? <ChevronUp size={17} className="text-gray-400 flex-shrink-0" />
                    : <ChevronDown size={17} className="text-gray-400 flex-shrink-0" />}
                </button>
                {activeAccordions.dimensions && (
                  <div className="px-4 pb-3 pt-1 border-t border-gray-100 text-[12px] text-gray-500">
                    Dimensions details here.
                  </div>
                )}
              </div>
            </div>

            {/* ── QUANTITY ROW ── */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-bold text-[#1A1A1A]">Quantity</span>
                <span className="text-red-500 text-xs">*</span>
                <svg className="text-gray-400 ml-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <Minus size={13} />
                </button>
                <span className="text-[14px] font-bold text-[#1A1A1A] w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-[#FF4D30] hover:bg-[#FFF1F0] transition-colors"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* ── CTA BUTTONS ── */}
            <div className="flex gap-2.5">
              <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#1B2631] text-white py-3 rounded-full font-bold text-[13px] hover:bg-black transition-all shadow-md shadow-black/10">
                <HeartOutlineIcon size={15} />
                Add To Wishlist
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#FF4D30] text-white py-3 rounded-full font-bold text-[13px] hover:bg-[#E6442B] transition-all shadow-md shadow-[#FF4D30]/25">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add To Cart
              </button>
            </div>

            {/* ── DELIVERY CARD ── */}
            <div className="flex items-center justify-between bg-[#F6FDF9] border border-[#D1FAE5] rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#22C55E] shadow-sm">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[12px] text-[#1A1A1A]">Delivery ৳500 inside Dhaka</p>
                  <p className="text-[10px] text-[#6B7280]">Free on orders above ৳50,000</p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-[#22C55E] border border-[#22C55E]/40 bg-white px-2 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0">
                FREE
              </span>
            </div>

            {/* ── 2×2 GUARANTEE CARDS ── */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2.5 bg-[#FFF4ED] border border-[#FFE8D6] rounded-2xl px-3 py-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#F97316] shadow-sm flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[11px] text-[#1A1A1A]">Money Back</p>
                  <p className="text-[10px] text-[#6B7280]">7-day guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#F0F5FF] border border-[#DBEAFE] rounded-2xl px-3 py-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#3B82F6] shadow-sm flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[11px] text-[#1A1A1A]">Premium Quality</p>
                  <p className="text-[10px] text-[#6B7280]">Certified wood</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#F8F4FF] border border-[#EDE9FE] rounded-2xl px-3 py-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#8B5CF6] shadow-sm flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[11px] text-[#1A1A1A]">Secure Payment</p>
                  <p className="text-[10px] text-[#6B7280]">Bank / MFS / COD</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#F0FDFA] border border-[#CCFBF1] rounded-2xl px-3 py-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#14B8A6] shadow-sm flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[11px] text-[#1A1A1A]">24/7 Support</p>
                  <p className="text-[10px] text-[#6B7280]">WhatsApp & phone</p>
                </div>
              </div>
            </div>

          </div>
          {/* ════ END RIGHT COLUMN ════ */}

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;