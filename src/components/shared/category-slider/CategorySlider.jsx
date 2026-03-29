import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryCardWithSingleImage from '../cards/category-cards/SingleCardWithImage';
import FeatureDoorCard from '../cards/feature-door-cards/FeatureDoorCard';

/**
 * CategorySlider Component
 * @param {Array} items - Array of category objects { id, image, title, productCount }
 */
const CategorySlider = ({ items = [], cardType = "singleCard" }) => {
  return (
    <div className="relative px-2 sm:px-5 lg:px-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={cardType === "singleCard" ? 2.5 : cardType === "featuredProductCards" ? 1.5 : 2.5}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: cardType === "singleCard" ? 4.5 : cardType === "featuredProductCards" ? 3 : 4.5,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: cardType === "singleCard" ? 6.5 : cardType === "featuredProductCards" ? 4.5 : 6.5,
            spaceBetween: 24
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: cardType === "singleCard" ? 8.5 : cardType === "featuredProductCards" ? 4.5 : 8.5,
            spaceBetween: 24
          },
          // when window width is >= 1536px
          1536: {
            slidesPerView: cardType === "singleCard" ? 10 : cardType === "featuredProductCards" ? 5.5 : 10,
            spaceBetween: 24
          }
        }}
        className="category-swiper px-4 sm:px-6 lg:px-20 py-8!"
      >
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            {
              cardType === "singleCard" && <CategoryCardWithSingleImage item={item} /> ||
              cardType === "featuredProductCards" && <FeatureDoorCard product={item} />
            }
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 sm:left-6 lg:left-15 top-[42.5%] -translate-y-1/2 z-10 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 swiper-button-disabled:opacity-20 hover:bg-black">
        <ChevronLeft size={20} />
      </button>
      <button className="swiper-button-next-custom absolute right-4 sm:right-6 lg:right-15 top-[42.5%] -translate-y-1/2 z-10 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 swiper-button-disabled:opacity-20 hover:bg-black">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CategorySlider;
