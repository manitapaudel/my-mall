import { infoItems } from "../../assets/constants";

const InfoSection = () => {
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <Icon className="text-3xl text-red-600" />
            <h3 className="mt-4 text-x font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
