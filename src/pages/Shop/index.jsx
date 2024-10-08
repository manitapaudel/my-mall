import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bbold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 cursor-pointer">
        {product.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
