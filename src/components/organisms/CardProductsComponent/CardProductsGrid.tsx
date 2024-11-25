import React from "react";

interface PropertiesProducts {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface CardProductsGridProps {
  title: string;
  dataProducts?: PropertiesProducts[];
}

const CardProductsGrid: React.FC<CardProductsGridProps> = ({ title, dataProducts }) => {
  return (
    <div className="bg-gray-200 dark:bg-background p-8 sm:p-16 w-screen">
      <div className="mb-4 p-4 font-medium text-center text-lg dark:text-gray-100 first-letter:capitalize leading-tight">
        <h1 className="md:text-3xl">{title}</h1>
      </div>
      {/* productos */}
      {dataProducts && dataProducts.length > 0 ? (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-fit">
          {dataProducts.map((item) => (
            <div key={item.id} className="relative bg-gray-200 shadow-lg rounded-2xl h-[400px] overflow-hidden group">
              {/* Aquí puedes personalizar el contenido con las propiedades del producto */}
              <img
                className="group-hover:h-64 rounded-2xl w-full h-full transition-all duration-300 delay-150 ease object-cover"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png"
                alt={item.name}
              />
              <div className="group-hover:mb-0 bottom-0 left-0 absolute bg-gray-100 dark:bg-gray-700 -mb-44 rounded-b-2xl w-full h-40 transition-all duration-300 delay-150 ease">
                <div className="p-6">
                  <div className="flex justify-between items-center gap-4 capitalize">
                    <div>
                      <h2 className="font-bold text-lg text-red-600">
                        {item.name}
                      </h2>
                      <p className="dark:text-gray-100">{item.category}</p>
                    </div>
                    <div>
                      <p className="font-bold text-3xl dark:text-gray-100">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="block mt-4">
                    <div className="bottom-2 left-5 absolute">
                      <button className="bg-red-600 opacity-90 hover:opacity-100 px-4 py-2.5 rounded-xl font-medium text-gray-100">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">No products available.</p>
      )}
    </div>
  );
};

export default CardProductsGrid;
