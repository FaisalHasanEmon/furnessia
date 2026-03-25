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
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-12 lg:px-[71px] py-3 md:py-4 bg-[#1E2939] text-white rounded-full hover:bg-[#2d3748] active:scale-95 transition-all duration-300"
                        >
                            <span className="text-sm sm:text-base md:text-lg">
                                Shop Now
                            </span>

                            <svg
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                width="14"
                                height="9"
                                viewBox="0 0 14 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.57741 0.244078C8.90285 -0.0813592 9.43048 -0.0813593 9.75592 0.244078L13.0893 3.57741C13.2455 3.73369 13.3333 3.94565 13.3333 4.16667C13.3333 4.38768 13.2455 4.59964 13.0893 4.75592L9.75592 8.08926C9.43049 8.41469 8.90285 8.41469 8.57741 8.08926C8.25197 7.76382 8.25197 7.23618 8.57741 6.91074L10.4882 5H0.833333C0.373096 5 0 4.6269 0 4.16667C0 3.70643 0.373096 3.33333 0.833333 3.33333H10.4882L8.57741 1.42259C8.25197 1.09715 8.25197 0.569515 8.57741 0.244078Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta