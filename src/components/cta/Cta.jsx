import { ArrowRightIcon } from "../shared/icons/Icons"
import cta_bg from "/assets/cta/cta_bg.png"

const Cta = () => {
    return (
        <section
            style={{ backgroundImage: `url(${cta_bg})` }}
            className="bg-cover bg-center bg-no-repeat min-h-[377px] border " >
            <div className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-[160px] flex justify-center items-center h-full">
                <div className="bg-[#FFFFFF]/10 p-4 md:p-6 lg:py-12 w-full rounded-2xl flex flex-col justify-center items-center">
                    <h2 className="uppercase text-[#FFFFFF] font-playfair font-extrabold text-[32px] md:text-[40px] leading-normal tracking-widest text-center mb-4">Let’s Bring Your Dream <br /> Space to Life</h2>
                    <p className="text-[#FFFFFF] font-albert font-normal text-base md:text-xl leading-[30px] text-center mb-12">From idea and design to custom production and installation — Furnessia supports your project every step of the way.</p>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-12 lg:px-[71px] py-3 md:py-4 bg-[#1E2939] text-white rounded-full hover:bg-[#2d3748] active:scale-95 transition-all duration-300 group"
                        >
                            <span className="text-sm sm:text-base md:text-lg">
                                Shop Now
                            </span>

                            <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta