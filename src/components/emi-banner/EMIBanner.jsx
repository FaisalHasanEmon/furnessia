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
        <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[96px] bg-[#FAF8F3]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[502px] ">
                {/* left side */}
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-stretch gap-6 sm:gap-8 lg:gap-14">
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
                        <button className="font-albert text-base sm:text-lg font-medium leading-6 text-white bg-[#F8361A] hover:bg-[#ff3407] px-5 sm:px-8 py-3.5 sm:py-4 rounded-full flex justify-center items-center gap-2">
                            Apply 0% EMI <ArrowRight size={20} />
                        </button>
                        <button className="font-albert text-base sm:text-lg font-medium leading-6 text-[white] bg-[#1E2939] hover:bg-[#2d3748] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full flex justify-center items-center gap-2">
                            Learn More <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Banks Marquee */}
                    <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-4 overflow-hidden">
                        <div className="shrink-0 flex justify-start md:justify-center items-center">
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

                {/* right side */}
                <div className="col-span-1  lg:col-span-7 grid grid-cols-6 grid-rows-2 gap-4 *:rounded-2xl">
                    {/* 1st row */}
                    {/*Row-1 Column-1 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#44403C] to-[#1C1917]">
                        <div className="flex flex-col  gap-4">
                            {/* Image */}
                            <figure>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_226_34534" fill="white">
                                        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
                                    </mask>
                                    <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
                                    <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34534)" />
                                    <path d="M23.3335 13.333H12.6668C11.9304 13.333 11.3335 13.93 11.3335 14.6663V21.333C11.3335 22.0694 11.9304 22.6663 12.6668 22.6663H23.3335C24.0699 22.6663 24.6668 22.0694 24.6668 21.333V14.6663C24.6668 13.93 24.0699 13.333 23.3335 13.333Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.3335 16.667H24.6668" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">Down Payment</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">30%</span> <span className="text-xs">of tatal price</span></p>
                        </div>
                    </div>
                    {/*Row-1 Column-2 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914] ">
                        <div className="flex flex-col  gap-4">
                            {/* Image */}
                            <figure>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_226_34542" fill="white">
                                        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
                                    </mask>
                                    <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
                                    <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34542)" />
                                    <path d="M22.6667 14.6667V12.6667C22.6667 12.4899 22.5964 12.3203 22.4714 12.1953C22.3464 12.0702 22.1768 12 22 12H13.3333C12.9797 12 12.6406 12.1405 12.3905 12.3905C12.1405 12.6406 12 12.9797 12 13.3333C12 13.687 12.1405 14.0261 12.3905 14.2761C12.6406 14.5262 12.9797 14.6667 13.3333 14.6667H23.3333C23.5101 14.6667 23.6797 14.7369 23.8047 14.8619C23.9298 14.987 24 15.1565 24 15.3333V18M24 18H22C21.6464 18 21.3072 18.1405 21.0572 18.3905C20.8071 18.6406 20.6667 18.9797 20.6667 19.3333C20.6667 19.687 20.8071 20.0261 21.0572 20.2761C21.3072 20.5262 21.6464 20.6667 22 20.6667H24C24.1768 20.6667 24.3464 20.5964 24.4714 20.4714C24.5964 20.3464 24.6667 20.1768 24.6667 20V18.6667C24.6667 18.4899 24.5964 18.3203 24.4714 18.1953C24.3464 18.0702 24.1768 18 24 18Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 13.333V22.6663C12 23.02 12.1405 23.3591 12.3905 23.6092C12.6406 23.8592 12.9797 23.9997 13.3333 23.9997H23.3333C23.5101 23.9997 23.6797 23.9294 23.8047 23.8044C23.9298 23.6794 24 23.5098 24 23.333V20.6663" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

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
                            {/* Image */}
                            <figure>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_226_34555" fill="white">
                                        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
                                    </mask>
                                    <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
                                    <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34555)" />
                                    <path d="M14 24.6663V12.6663C14 12.3127 14.1405 11.9736 14.3905 11.7235C14.6406 11.4735 14.9797 11.333 15.3333 11.333H20.6667C21.0203 11.333 21.3594 11.4735 21.6095 11.7235C21.8595 11.9736 22 12.3127 22 12.6663V24.6663H14Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.0002 18H12.6668C12.3132 18 11.9741 18.1405 11.724 18.3905C11.474 18.6406 11.3335 18.9797 11.3335 19.3333V23.3333C11.3335 23.687 11.474 24.0261 11.724 24.2761C11.9741 24.5262 12.3132 24.6667 12.6668 24.6667H14.0002" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 16H23.3333C23.687 16 24.0261 16.1405 24.2761 16.3905C24.5262 16.6406 24.6667 16.9797 24.6667 17.3333V23.3333C24.6667 23.687 24.5262 24.0261 24.2761 24.2761C24.0261 24.5262 23.687 24.6667 23.3333 24.6667H22" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6665 14H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6665 16.667H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6665 19.333H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6665 22H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">bank partner</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">12+</span> <span className="text-xs">BRAC, City, EBL...</span></p>
                        </div>
                    </div>
                    {/*Row-2 Column-4 */}
                    <div className="col-span-1 row-span-1 p-4 bg-linear-to-t from-[#FF6B4A] to-[#F93914]">
                        <div className="flex flex-col  gap-4">
                            {/* Image */}
                            <figure>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_226_34568" fill="white">
                                        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
                                    </mask>
                                    <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
                                    <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34568)" />
                                    <g clip-path="url(#clip0_226_34568)">
                                        <path d="M18.0002 24.6663C21.6821 24.6663 24.6668 21.6816 24.6668 17.9997C24.6668 14.3178 21.6821 11.333 18.0002 11.333C14.3183 11.333 11.3335 14.3178 11.3335 17.9997C11.3335 21.6816 14.3183 24.6663 18.0002 24.6663Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 14V18L20.6667 19.3333" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_226_34568">
                                            <rect width="16" height="16" fill="white" transform="translate(10 10)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </figure>
                            <p className="text-[#FFFFFF]/70 inline-block *:block text-[10px] space-y-6 leading-3.5 font-inter"><span className="uppercase font-bold ">duration</span> <span className="font-playfair text-[40px] text-[#FFFFFF]">3-24</span> <span className="text-xs">months available</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EMIBanner;



