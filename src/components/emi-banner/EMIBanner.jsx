import { CardIcon, WalletIcon, BuildingIcon, ClockIcon } from "../shared/icons/Icons";
import bank_asia from "/assets/emi/bank_asia.png"
import city_bank from "/assets/emi/city_bank.png"
import ismlami_bank from "/assets/emi/islami_bank.png"
import standard_bank from "/assets/emi/standard_bank.png"
import aib_bank from "/assets/emi/aib_bank.png"
import furniture_1 from "/assets/emi/img_1.png"
import furniture_2 from "/assets/emi/img_2.png"
import furniture_3 from "/assets/emi/img_3.png"
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import "./EMIBanner.css";

// Bank Images
const bankImages = [
    { id: 1, img: bank_asia },
    { id: 2, img: city_bank },
    { id: 3, img: ismlami_bank },
    { id: 4, img: standard_bank },
    { id: 5, img: aib_bank },
]

const ANIM_DURATION = 20; // must match CSS animation duration (seconds)

const EMIBanner = () => {
    const marqueeRef = useRef(null);
    const trackRef = useRef(null);
    const dragRef = useRef({ active: false, startX: 0, originX: 0 });
    const hoverRef = useRef(false);

    // Read the live translateX value from the running (or paused) animation
    const getLiveX = () => {
        if (!trackRef.current) return 0;
        return new DOMMatrix(getComputedStyle(trackRef.current).transform).m41;
    };

    // Stop animation at its current visual position
    const freeze = () => {
        const track = trackRef.current;
        if (!track || track.style.animation === 'none') return;
        const x = getLiveX();
        track.style.animation = 'none';
        track.style.transform = `translateX(${x}px)`;
    };

    // Resume CSS animation seamlessly from wherever the track is now
    const resume = () => {
        const track = trackRef.current;
        if (!track) return;
        const x = getLiveX();
        const half = track.scrollWidth / 2;          // one set of logos in px
        const progress = ((-x / half) % 1 + 1) % 1;   // normalise to [0, 1]
        const delay = -(progress * ANIM_DURATION);  // negative = start mid-way
        track.style.transform = '';
        track.style.animation = `marquee-scroll ${ANIM_DURATION}s ${delay}s linear infinite`;
    };

    /* ── Mouse ── */
    const onMouseEnter = () => {
        hoverRef.current = true;
        freeze();
        marqueeRef.current?.classList.add('paused');
    };
    const onMouseLeave = () => {
        hoverRef.current = false;
        if (!dragRef.current.active) {
            resume();
            marqueeRef.current?.classList.remove('paused');
        }
    };
    const onMouseDown = (e) => {
        e.preventDefault();
        dragRef.current = { active: true, startX: e.clientX, originX: getLiveX() };
        marqueeRef.current?.classList.add('dragging');
    };
    const onMouseMove = (e) => {
        if (!dragRef.current.active) return;
        const delta = e.clientX - dragRef.current.startX;
        trackRef.current.style.transform = `translateX(${dragRef.current.originX + delta}px)`;
    };
    const onMouseUp = () => {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        marqueeRef.current?.classList.remove('dragging');
        if (!hoverRef.current) resume();
    };

    /* ── Touch ── */
    const onTouchStart = (e) => {
        freeze();
        dragRef.current = { active: true, startX: e.touches[0].clientX, originX: getLiveX() };
    };
    const onTouchMove = (e) => {
        if (!dragRef.current.active) return;
        const delta = e.touches[0].clientX - dragRef.current.startX;
        trackRef.current.style.transform = `translateX(${dragRef.current.originX + delta}px)`;
    };
    const onTouchEnd = () => {
        dragRef.current.active = false;
        resume();
    };
    return (
        <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 xl:py-[96px] bg-[#FAF8F3]">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-10 lg:gap-8 xl:gap-0 min-h-[502px] ">
                {/* left side */}
                <div className="col-span-1 xl:col-span-5 flex flex-col justify-center items-stretch gap-6 sm:gap-8 lg:gap-14">
                    {/* Heading & Title */}
                    <div>
                        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold md:leading-15 tracking-tight ">
                            Bring It Home Today{" "}
                            <span className="italic bg-linear-to-r from-[#FF6B4A] to-[#FF6B4A] bg-clip-text text-transparent inline-block">
                                Credit Card Not Required
                            </span>
                        </h2>
                        <p className="font-inter mt-3 md:mt-6 text-base sm:text-lg md:text-xl font-normal text-[#6A7282] md:leading-[30px] leading-7">
                            No Credit Card? No Problem. <br />Pay only 30% down payment and enjoy easy monthly installments up to 24 months.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-start items-center  w-full">
                        <button className="font-albert text-base sm:text-lg font-medium leading-6 text-white bg-[#F8361A] hover:bg-[#ff3407] px-4 sm:px-8 py-3.5 sm:py-4 rounded-full flex justify-center items-center gap-2">
                            Apply 0% EMI <ArrowRight size={20} />
                        </button>
                        <button className="font-albert text-base sm:text-lg font-medium leading-6 text-[white] bg-[#1E2939] hover:bg-[#2d3748] px-4 sm:px-8 py-3.5 sm:py-4 rounded-full flex justify-center items-center gap-2">
                            Learn More <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Banks Marquee */}
                    <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-4 overflow-hidden ">
                        <div className="shrink-0 flex justify-start md:justify-center md:items-center w-full md:w-auto">
                            <h3 className="uppercase text-[#00A63E] text-lg sm:text-xl font-bold leading-[30px] tracking-tight font-albert">
                                trusted by
                            </h3>
                        </div>
                        <div
                            ref={marqueeRef}
                            className="marquee-wrapper w-full min-w-0"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            onTouchCancel={onTouchEnd}
                        >
                            <div ref={trackRef} className="marquee-track">
                                {/* Original set */}
                                {bankImages.map((bank) => (
                                    <div key={`a-${bank.id}`} className="marquee-item">
                                        <img src={bank.img} alt={`bank-${bank.id}`} />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {bankImages.map((bank) => (
                                    <div key={`b-${bank.id}`} className="marquee-item">
                                        <img src={bank.img} alt={`bank-${bank.id}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side - hidden on mobile */}
                <div className="col-span-1 xl:col-span-7 hidden sm:grid grid-cols-6 grid-rows-2 gap-4 *:rounded-2xl">
                    {/* 1st row */}
                    {/*Row-1 Column-1 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#44403C] to-[#1C1917]">
                        <div className="flex flex-col  gap-4">
                            <figure>
                                <CardIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">Down Payment</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">30%</span> <span className="text-xs">of tatal price</span></p>
                        </div>
                    </div>
                    {/*Row-1 Column-2 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914] ">
                        <div className="flex flex-col  gap-4">
                            <figure>
                                <WalletIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">cash emi</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">৳999</span> <span className="text-xs">/month minimum</span></p>
                        </div>
                    </div>
                    {/*Row-1 Column-3 */}
                    <div className="col-span-2 row-span-2 overflow-clip">
                        <img src={furniture_2} alt="Blue Sofa" className="object-cover w-full h-full" />
                    </div>
                    {/*Row-1 Column-4 */}
                    <div className="col-span-2 row-span-1 overflow-clip">
                        <img src={furniture_3} alt="Marune Sofa" className="object-cover w-full h-full" />
                    </div>
                    {/* 2nd row */}
                    {/*Row-2 Column-1 */}
                    <div className="col-span-2 row-span-1 overflow-clip">
                        <img src={furniture_1} alt="Bed" className="w-full h-full object-cover" />
                    </div>
                    {/*Row-2 Column-3 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#44403C] to-[#1C1917]">
                        <div className="flex flex-col  gap-4">
                            <figure>
                                <BuildingIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">bank partner</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">12+</span> <span className="text-xs">BRAC, City, EBL...</span></p>
                        </div>
                    </div>
                    {/*Row-2 Column-4 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914]">
                        <div className="flex flex-col  gap-4">
                            <figure>
                                <ClockIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">duration</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">3-24</span> <span className="text-xs">months available</span></p>
                        </div>
                    </div>
                </div>

                {/* right side - mobile devices */}
                <div className="col-span-1 md:hidden grid grid-cols-2  gap-3 *:rounded-2xl *:min-h-[204px]">
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#44403C] to-[#1C1917]">
                        <div className="flex flex-col gap-4">
                            <figure>
                                <CardIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">Down Payment</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">30%</span> <span className="text-xs">of tatal price</span></p>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914]">
                        <div className="flex flex-col gap-4">
                            <figure>
                                <WalletIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">cash emi</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">৳999</span> <span className="text-xs">/month minimum</span></p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 overflow-clip"><img src={furniture_1} alt="Bed" className="w-full h-full object-cover" /></div>
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#44403C] to-[#1C1917]">
                        <div className="flex flex-col gap-4">
                            <figure>
                                <BuildingIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">bank partner</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">12+</span> <span className="text-xs">BRAC, City, EBL...</span></p>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914]">
                        <div className="flex flex-col gap-4">
                            <figure>
                                <ClockIcon size={36} />
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">duration</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">3-24</span> <span className="text-xs">months available</span></p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1"><img src={furniture_3} alt="Red Sofa" className="w-full h-full object-cover" /></div>
                    <div className="col-span-2 row-span-1"><img src={furniture_2} alt="Sofa" className="w-full h-full object-cover" /></div>
                </div>
            </div>
        </section>
    );
};
export default EMIBanner;



