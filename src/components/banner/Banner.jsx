import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import delivery from "/assets/banner/features/delivery.png";
import emi from "/assets/banner/features/emi.png";
import quality from "/assets/banner/features/quality.png";
import return_policy from "/assets/banner/features/return.png";
import support from "/assets/banner/features/support.png";
import payment from "/assets/banner/features/payment.png";
import "./Banner.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ─── Slide Data ───────────────────────────────────────────────────────────────
const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80",
        tag: "UP TO 40% OFF",
        headline1: "Where Every Family",
        headline2: "Moment Feels Special",
        body: "Beautifully crafted dining furniture designed for real Bangladeshi homes. Free delivery across the country.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400&q=80",
        tag: "NEW ARRIVALS",
        headline1: "Crafted For",
        headline2: "Modern Living",
        body: "Premium quality furniture that transforms your space into a sanctuary of comfort and elegance.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1400&q=80",
        tag: "FREE DELIVERY",
        headline1: "Design That",
        headline2: "Tells Your Story",
        body: "Explore our handpicked collections — made to bring warmth and character to every Bangladeshi home.",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
        tag: "0% EMI AVAILABLE",
        headline1: "Furniture Built",
        headline2: "To Last Generations",
        body: "Solid craftsmanship, thoughtful design, and unbeatable prices — delivered free to your doorstep.",
    },
];

// ─── Feature Bar Items ────────────────────────────────────────────────────────
const features = [
    {
        icon: delivery,
        title: "Free Delivery",
        sub: "Orders ৳5,000+",
    },
    {
        icon: quality,
        title: "Premium Quality",
        sub: "100% Guaranteed",
    },
    {
        icon: return_policy,
        title: "Easy Returns",
        sub: "7-Day Policy",
    },
    {
        icon: payment,
        title: "Secure Payment",
        sub: "Debit, Credit, bKash & Nagad",
    },
    {
        icon: emi,
        title: "0% Bank OR Cash EMI",
        sub: "12+ Partners",
    },
    {
        icon: support,
        title: "24/7 Support",
        sub: "WhatsApp Ready",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Banner() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="max-w-[1920px] mx-auto px-3 md:px-6 font-sans py-6">
            {/* ── Hero Swiper ── */}
            <div className="relative w-full overflow-hidden rounded-[48px]">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    className="heroSwiper w-full"
                    style={{ "--swiper-pagination-color": "#ef4444", "--swiper-pagination-bullet-inactive-color": "rgba(255,255,255,0.5)", "--swiper-pagination-bullet-inactive-opacity": "1", "--swiper-pagination-bullet-size": "6px" }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-[1872px] min-h-[438px] ">
                                {/* Background image */}
                                <img
                                    src={slide?.image}
                                    alt={slide?.headline1}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-12 max-w-xl lg:max-w-2xl">
                                    <span className=" py-1 inline-flex items-center gap-1.5 bg-[#3C3432] italic text-[#F93914] text-[16px] font-semibold sm:text-xs  tracking-widest uppercase px-3  rounded-full w-fit mb-3 sm:mb-4">
                                        <span className=" w-1.5 h-1.5 rounded-full bg-[#FFFFFF] animate-pulse" />
                                        {slide.tag}
                                    </span>
                                    <h1 className="text-white font-playfair font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1">
                                        {slide.headline1}
                                    </h1>
                                    <h2 className="text-white/40 font-playfair font-bold italic leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4">
                                        {slide.headline2}
                                    </h2>
                                    <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 max-w-sm sm:max-w-md">
                                        {slide.body}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-lg shadow-red-500/30">
                                            Shop Now
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </button>
                                        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:scale-95 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 transition-all duration-200">
                                            Explore Collections
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Stats — right side */}
                                <div className="absolute bottom-10  sm:bottom-12 md:bottom-6 lg:bottom-12 lg:right-12 left-4 sm:left-4 md:right-2 flex md:justify-end items-stretch gap-1.5 sm:gap-2 ">
                                    {[
                                        { val: "2,500+", label: "Happy Families" },
                                        { val: "0% EMI", label: "Starting from ৳999/month" },
                                        { val: "4.8★", label: "Avg Rating" },
                                    ].map((stat) => (
                                        <div key={stat.val} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-white">
                                            <div className="font-bold text-xs sm:text-sm lg:text-3xl leading-tight">{stat.val}</div>
                                            <div className="text-white/60 text-[9px] sm:text-[10px] lg:text-sm leading-tight">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ── Custom Pagination: dashes + counter — overlaid on swiper ── */}
                <div className="absolute  bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-14 left-4 sm:left-6 z-10 flex items-center ml-3 md:ml-6 gap-3 pointer-events-none ">
                    <div className="flex items-center gap-1.5">
                        {slides.map((_, i) => (
                            <span
                                key={i}
                                className={`block h-[3px] rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 sm:w-10 bg-red-500" : "w-5 sm:w-7 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-white/70 text-xs font-mono tracking-wider">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                </div>
            </div>

            {/* ── Feature Bar ── */}
            <div className="mt-4 py-0.5 sm:mt-5 overflow-x-auto scrollbar-none">
                {/* <div className="flex items-center min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center lg:grid lg:grid-cols-6 gap-0 border border-gray-100 rounded-2xl divide-x divide-gray-100 shadow-sm bg-white"> */}
                <div className="flex items-center min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center  gap-5   rounded-2xl divide-x divide-gray-100 ">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="flex border border-gray-100 rounded-2xl shadow-sm bg-white items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 whitespace-nowrap sm:whitespace-normal min-w-[160px] sm:min-w-0"
                        >
                            <span className="text-gray-400 shrink-0"><img className="h-10 w-10 object-contain" src={f.icon} alt="Delivery Logo" /></span>
                            <div>
                                <p className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">{f.title}</p>
                                <p className="text-gray-400 text-[10px] sm:text-xs leading-tight mt-0.5">{f.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Swiper Pagination Overrides ── */}

        </section>
    );
}