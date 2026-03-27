import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryCardWithSingleImage from '../category-cards/SingleCardWithImage';

/**
 * CategorySlider Component
 * @param {Array} items - Array of category objects { id, image, title, productCount }
 */
const CategorySlider = ({ items = [], cardType = "singleCard" }) => {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2.5}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 4.5,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 24
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 8.5,
            spaceBetween: 24
          },
          // when window width is >= 1536px
          1536: {
            slidesPerView: 10.5,
            spaceBetween: 24
          }
        }}
        className="category-swiper px-4 sm:px-6 lg:px-20 py-8!"
      >
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            {
              cardType === "singleCard" && <CategoryCardWithSingleImage item={item} />
            }
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 sm:left-6 lg:left-20 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 swiper-button-disabled:opacity-20 hover:bg-black">
        <ChevronLeft size={20} />
      </button>
      <button className="swiper-button-next-custom absolute right-4 sm:right-6 lg:right-20 top-[40%] -translate-y-1/2 z-10 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 swiper-button-disabled:opacity-20 hover:bg-black">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CategorySlider;
