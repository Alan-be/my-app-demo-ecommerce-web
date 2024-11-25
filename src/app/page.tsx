"use client"
import LogoHero from "@/components/organisms/LogoHero";
import MeetUs from "@/components/organisms/MeetUsComponent/MeetUs";
import {useEffect, useState } from "react";
import CardProductsGrid from "@/components/organisms/CardProductsComponent/CardProductsGrid";
import { getProducts } from "./actions/bridgeFunctions";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState<number>(1);
  const [data_products,setDataProducts] = useState<any>()

  useEffect(() => {

    const getProductsHome = async() =>  {

      const data = await getProducts(categorySelected,'category_id')
      setDataProducts(data)

    }

    getProductsHome()

  },[categorySelected])

  console.log(data_products,"aa");
  
  
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <LogoHero/>
      <MeetUs setCategorySelected={setCategorySelected} />
      <CardProductsGrid title="Conoce todos nuestros productos" dataProducts={data_products}/>

    </main>
  );
}
