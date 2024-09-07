import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import EmptySearch from "../../assets/images/empty-search.jpg";

const FilteredData = () => {
  const filteredProducts = useSelector((state) => state.product.filteredData);

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filteredProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bbold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10">
          <h3 className="font-semibold text-2xl text-red-500">
            No products found :(
          </h3>
          <img
            src={EmptySearch}
            alt="No search results - designed by freepik"
            className="h-80 w-96"
          />
        </div>
      )}
    </div>
  );
};

export default FilteredData;
