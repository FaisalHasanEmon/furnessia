import CategoryAndViewAll from "../shared/category-viewall/CategoryAndViewAll";
import CategorySlider from '../shared/category-slider/CategorySlider';
import { useState, useEffect } from "react";


const ModernAndDurableDoors = () => {
  const [doorProducts, setDoorProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/doorProducts.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDoorProducts(data);
      } catch (error) {
        console.error("Error fetching door products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-12 text-center">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </section>
    );
  }
  return (

    <section className="max-w-480 mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12 lg:py-24 space-y-4 bg-[#FFFFFF]">
      <CategoryAndViewAll
        title="Modern & Durable Doors"
        navName="View all"
        navLink="/modern-and-durable-doors"
      />
      <div className="lg:mt-12 -mx-4 sm:-mx-6 lg:-mx-20 ">
        <CategorySlider items={doorProducts} cardType="featuredProductCards" />
      </div>
    </section>

  );
};


export default ModernAndDurableDoors;
