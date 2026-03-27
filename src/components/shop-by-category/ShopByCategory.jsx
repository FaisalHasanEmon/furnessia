
import CategoryAndViewAll from "../shared/category-viewall/CategoryAndViewAll";
import CategorySlider from "../shared/category-slider/CategorySlider";

const categories = [
    { id: 1, title: "Chairs", image: "/assets/categories/chair.png" },
    { id: 2, title: "Beds", image: "/assets/categories/bed.png", productCount: "120+", showDots: true },
    { id: 3, title: "Sofas", image: "/assets/categories/sofa.png" },
    { id: 4, title: "Dining", image: "/assets/categories/chair.png" },
    { id: 5, title: "Living", image: "/assets/categories/sofa.png" },
    { id: 6, title: "Office", image: "/assets/categories/chair.png" },
    { id: 7, title: "Bedroom", image: "/assets/categories/bed.png" },
    { id: 8, title: "Storage", image: "/assets/categories/sofa.png" },
    { id: 9, title: "Tables", image: "/assets/categories/chair.png" },
    { id: 10, title: "Decor", image: "/assets/categories/sofa.png" },
    { id: 11, title: "Lighting", image: "/assets/categories/bed.png" },
    { id: 12, title: "Outdoor", image: "/assets/categories/chair.png" },
];

const ShopByCategory = () => {
    return (
        <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-24">
            <CategoryAndViewAll title="Shop by Category" navName="View All" navLink="/shop-by-category" />
            <div className="mt-8 lg:mt-12 -mx-4 sm:-mx-6 lg:-mx-20">
                <CategorySlider items={categories} />
            </div>
        </section>
    );
};

export default ShopByCategory;