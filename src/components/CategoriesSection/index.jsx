import { categories } from "../../assets/constants";

const CategoriesSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map(({ title, imageSrc }) => (
        <div
          key={title}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={imageSrc}
            alt={`Image of a ${title}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
