import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowRightIcon, UploadIcon, PaletteIcon, ParcelIcon } from '../shared/icons/Icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const CustomizeProducts = () => {
    const steps = [
        {
            number: "01",
            title: "Share Your Vision",
            description: "Upload a photo, sketch, or describe your dream piece via WhatsApp.",
            icon: (<UploadIcon size={16} />),
            bgColor: "bg-[#FFF1F0]",
            iconColor: "text-[#FF5733]"
        },
        {
            number: "02",
            title: "Pick Materials",
            description: "Choose from 50+ wood types, fabrics, and finishes to match your taste.",
            icon: (<PaletteIcon size={16} />),
            bgColor: "bg-[#FFF4E6]",
            iconColor: "text-[#FF9F00]"
        },
        {
            number: "03",
            title: "We Deliver",
            description: "Free delivery & installation. 24-hour quote. Zero obligations.",
            icon: (<ParcelIcon size={16} />),
            bgColor: "bg-[#FFF0F6]",
            iconColor: "text-[#FF6B4E]"
        }
    ];

    const images = [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80"
    ];

    return (
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-16 lg:py-24 bg-[#FAF9F5] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

                {/* Left Content Column — narrower, ~40% */}
                <div className="w-full lg:w-[40%] space-y-6 shrink-0">
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-bold text-[#1A1A1A] font-playfair tracking-tight">
                            Do you want to <br />
                            <span className="text-[#FF5733] italic block mt-1">customize the products.</span>
                        </h2>
                        <p className="text-[#6B7280] text-sm md:text-base max-w-sm leading-relaxed font-albert">
                            Share your idea, sketch, or reference photo. Our craftsmen will build
                            it exactly the way you want.
                        </p>
                    </div>

                    {/* Process Steps List */}
                    <div className="space-y-3">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#FF5733]/10"
                            >
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-xs font-bold text-[#FF5733] font-albert opacity-70 w-5">
                                        {step?.number}
                                    </span>
                                    <div className={`${step.bgColor} ${step.iconColor} p-2.5 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-0.5 font-albert">
                                        {step?.title}
                                    </h4>
                                    <p className="text-[#9CA3AF] text-[12px] leading-tight font-albert">
                                        {step?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Row */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 bg-[#FF4D30] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#E6442B] transition-all hover:translate-x-1 shadow-lg shadow-[#FF4D30]/20 font-albert group">
                            WhatsApp <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 bg-[#1B2631] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-black transition-all hover:translate-x-1 shadow-lg shadow-[#1B2631]/10 font-albert group">
                            Messenger <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Social Proof */}
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400 font-albert overflow-hidden">
                                        {String.fromCharCode(81 + i)}
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-medium text-[#6B7280] font-albert tracking-wide">
                                2,500+ orders
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Visuals Column — wider, ~60%, with swiper */}
                <div className="w-full lg:w-[60%] relative">
                    {/* Swiper wrapper with px padding so nav arrows sit inside the column bounds */}
                    <div className="relative px-6">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.customize-swiper-prev',
                                nextEl: '.customize-swiper-next',
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 16
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                }
                            }}
                            className="customize-swiper"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="w-full rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                                        style={{ aspectRatio: '3 / 4' }}>
                                        <img
                                            src={img}
                                            alt={`Inspiration ${idx + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Arrows — positioned within the padded wrapper */}
                        <button className="customize-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#1B2631] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all hover:scale-110 active:scale-95">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="customize-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#1B2631] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all hover:scale-110 active:scale-95">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomizeProducts;