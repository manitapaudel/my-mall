import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { categories, mockData } from "../../assets/mockData";
import HeroImage from "../../assets/images/hero-image.jpg";
import InfoSection from "../../components/InfoSection";
import CategoriesSection from "../../components/CategoriesSection";
import { setProducts } from "../../redux/productSlice";
import ProductCard from "../../components/ProductCard";
import Shop from "../Shop";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  });

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex fles-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <h2 className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop by categories
          </h2>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-montserrat text-white w-full md:w-9/12 mt-8 md:mt-0 h-96 2xl:h-[60vh] relative">
          <img
            src={HeroImage}
            alt="A stack of boxes on a trolley"
            className="h-full w-full opacity-80 object-cover"
          />
          <div className="absolute bottom-4 left-8">
            <h2 className="text-yellow-200 mb-3">Manita | my-mall</h2>
            <p className="text-3xl font-bold">Welcome to my-mall</p>
            <p className="text-xl mt-2.5 font-bold text-gray-800">
              Millions of products to choose from
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategoriesSection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bbold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {product.products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
