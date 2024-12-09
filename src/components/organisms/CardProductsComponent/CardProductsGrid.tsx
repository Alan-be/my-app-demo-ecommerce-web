import { getOrCreateCart } from "@/app/actions/actions";
import {  addProductToActiveCart, selectActiveCart, selectCart, setActiveCart } from "@/app/lib/features/shoppingCartSlice/shoppingCartSlice";
import { selectUserId, setCartId } from "@/app/lib/features/userSlice/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface PropertiesProducts {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
}

interface CardProductsGridProps {
  title: string;
  dataProducts?: PropertiesProducts[];
}

const CardProductsGrid: React.FC<CardProductsGridProps> = ({ title, dataProducts }) => {
    const user_id = useSelector(selectUserId);
    const cart = useSelector(selectCart)
    const dispatch = useDispatch();

    console.log(cart,"cart");
    
    const addCart = async (item:any) => {
      const cart_id = await getOrCreateCart(user_id);
      user_id ? dispatch(setActiveCart({customer_id: user_id,id: cart_id})) : dispatch(setActiveCart({}));
      dispatch(addProductToActiveCart({product_id: item.id, quantity: 1}))
    }
    
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
              <img
                className="group-hover:h-64 rounded-2xl w-full h-full transition-all duration-300 delay-150 ease object-cover"
                src={item.image_url}
                alt={item.name}
              />
              <div className="group-hover:mb-0 bottom-0 left-0 absolute bg-gray-100 dark:bg-gray-700 -mb-44 rounded-b-2xl w-full h-40 transition-all duration-300 delay-150 ease">
                <div className="p-6">
                  <div className="flex justify-between items-center gap-4 capitalize">
                    <div>
                      <h2 className="font-bold text-lg text-primary-light">
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
                      <button className="bg-primary-dark opacity-90 hover:opacity-100 px-4 py-2.5 rounded-xl font-medium text-gray-100" onClick={() => addCart(item)}>
                        Añadir al carrito
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
