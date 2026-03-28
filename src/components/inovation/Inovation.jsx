import { ArrowRightIcon } from "../shared/icons/Icons";
import CategoryAndViewAll from "../shared/category-viewall/CategoryAndViewAll";
import sofa from "/assets/inovation/sofa.png";
import kitchen from "/assets/inovation/dining.png";

const Inovation = () => {
    return (
        <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12 lg:py-24 space-y-4">
            {/* 1st layout with Title and view all button */}
            <CategoryAndViewAll title="Inovation" navName="View all" navLink="/inovation" />

            {/* 2nd layout with image */}
            <div className="lg:mt-12 flex flex-col md:flex-row gap-4 md:gap-8 min-h-[400px]">
                {/* 1st card: Sofa */}
                <div className="relative bg-[#F3F4F6] rounded-2xl md:rounded-3xl p-6 sm:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[450px] flex-1 overflow-hidden group">
                    {/* Button on top right area */}
                    <div className="flex justify-end relative z-20">
                        <button className="bg-[#1F2937] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium hover:bg-black transition-all duration-300 cursor-pointer group/btn">
                            Explore Now <ArrowRightIcon className="text-white transition-transform duration-300 group-hover/btn:translate-x-1" size={14} />
                        </button>
                    </div>

                    {/* Sofa image - positioned strategically */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none z-10">
                        <img
                            src={sofa}
                            alt="Yellow Sofa"
                            className="max-w-[80%] sm:max-w-[90%] md:max-w-full max-h-[70%] object-contain transform translate-y-4 md:translate-y-0 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Subheading on bottom left */}
                    <p className="font-playfair text-xl sm:text-2xl text-[#1F2937] relative z-20 w-full sm:w-2/3 leading-snug">
                        Timeless Comfort. Modern Design.
                    </p>
                </div>

                {/* 2nd card: Kitchen Background */}
                <div className="relative rounded-2xl md:rounded-3xl p-6 sm:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[450px] flex-1 overflow-hidden group">
                    {/* Kitchen image tag instead of background */}
                    <img
                        src={kitchen}
                        alt="Kitchen"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>

                    {/* Heading on top left */}
                    <h3 className="font-playfair text-white text-2xl sm:text-3xl lg:text-4xl leading-tight relative z-20 max-w-[80%] drop-shadow-md">
                        Design Your Dream Kitchen
                    </h3>

                    {/* Button on bottom right */}
                    <div className="flex justify-end relative z-20">
                        <button className="bg-[#1F2937] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium hover:bg-black transition-all duration-300 cursor-pointer group/btn">
                            Start Custom Design <ArrowRightIcon className="text-white transition-transform duration-300 group-hover/btn:translate-x-1" size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inovation;