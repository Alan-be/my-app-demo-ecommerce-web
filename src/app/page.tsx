"use client"
import LogoHero from "@/components/organisms/LogoHero";
import MeetUs from "@/components/organisms/MeetUsComponent/MeetUs";
import {useEffect, useState } from "react";
import CardProductsGrid from "@/components/organisms/CardProductsComponent/CardProductsGrid";
import { getAllProducts, getProducts } from "./actions/bridgeFunctions";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveCart } from "./lib/features/shoppingCartSlice/shoppingCartSlice";
import { selectProducts, setProducts } from "./lib/features/productsSlice/productsSlice";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState<number>(1);
  const [data_products,setDataProducts] = useState<any>()
  const shoppingCart = useSelector(selectActiveCart);
  const productsAll = useSelector(selectProducts)

  console.log(productsAll,"prod");
  

  const dispatch = useDispatch()
  
  useEffect(() => {

    const getProductsHome = async() =>  {

      const data = await getProducts(categorySelected,'category_id')
      const all_products = await getAllProducts()
      setDataProducts(data)
      dispatch(setProducts(all_products));


    }

    getProductsHome()

  },[categorySelected])

  
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <LogoHero/>
      <MeetUs setCategorySelected={setCategorySelected} />
      <CardProductsGrid title="Conoce todos nuestros productos" dataProducts={data_products}/>

    </main>
  );
}
