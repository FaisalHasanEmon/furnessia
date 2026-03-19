import bank_asia from "/assets/emi/bank_asia.png"
import city_bank from "/assets/emi/city_bank.png"
import ismlami_bank from "/assets/emi/islami_bank.png"
import standard_bank from "/assets/emi/standard_bank.png"
import aib_bank from "/assets/emi/aib_bank.png"
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

// Bank Images
const bankImages = [
    { id: 1, img: bank_asia },
    { id: 2, img: city_bank },
    { id: 3, img: ismlami_bank },
    { id: 4, img: standard_bank },
    { id: 5, img: aib_bank },
]

const EMIBanner = () => {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6  lg:px-20 py-8 sm:py-12 lg:py-[96px]">
            <div className="grid grid-cols-1  lg:grid-cols-12 min-h-[502px]">
                {/* left side */}
                <div className="col-span-1 lg:col-span-5 border border-red-500 flex flex-col justify-between items-start gap-14 *:border">
                    {/* Heading & Title */}
                    <div>
                        <h2 className="font-playfair text-[56px] font-bold leading-16 tracking-tight">
                            Bring It Home Today{" "}
                            <span className="italic bg-linear-to-r from-[#FF6B4A] to-[#FF6B4A] bg-clip-text text-transparent">
                                Credit Card Not Required
                            </span>
                        </h2>
                        <p className="font-inter mt-6 text-xl font-normal text-[#6A7282] leading-[30px]">No Credit Card? No Problem. <br />Pay only 30% down payment and enjoy easy monthly installments up to 24 months.</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="font-inter text-base font-medium leading-6 text-white bg-[#F8361A] hover:bg-[#ff3407] px-6 py-3.5 rounded-full flex justify-center items-center gap-1.5">Apply 0% EMI <ArrowRight /></button>
                        <button className="font-inter text-base font-medium leading-6 text-[white] bg-[#1E2939] hover:bg-[#2d3748] px-6 py-3.5 rounded-full flex justify-center items-center gap-1.5">Learn More <ArrowRight /></button>
                    </div>
                    {/* Banks Marquee */}
                    <div className="flex gap-4 *:border *:border-red-500">
                        <div className="min-w-[125px] flex justify-center items-center"><h3 className="uppercase text-center text-[#00A63E] text-xl font-bold leading-[30px] tracking-tight font-albert">trusted by</h3></div>
                        <div>
                            <Swiper
                                modules={[Autoplay, FreeMode]}
                                loop={true}
                                slidesPerView="auto"
                                spaceBetween={30}
                                speed={6000}
                                freeMode={{
                                    enabled: true,
                                    momentum: false
                                }}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                grabCursor={true}
                            >
                                {bankImages.map((bank) => (
                                    <SwiperSlide key={bank.id} className="w-auto! flex items-center border p-2 bg-[#FFFFFF] rounded-lg">
                                        <img src={bank.img} alt={`bank-${bank.id}`} className="h-10 w-auto" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="col-span-1  lg:col-span-7 border border-green-500"></div>
            </div>
        </section >
    )
}
export default EMIBanner;