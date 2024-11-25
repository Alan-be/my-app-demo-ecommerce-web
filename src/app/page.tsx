"use client"
import LogoHero from "@/components/organisms/LogoHero";
import MeetUs from "@/components/organisms/MeetUsComponent/MeetUs";
import {useState } from "react";
import CardProductsGrid from "@/components/organisms/CardProductsComponent/CardProductsGrid";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState<number>(1);
  
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <LogoHero/>
      <MeetUs setCategorySelected={setCategorySelected} />
      <CardProductsGrid title="Conoce todos nuestros vinos"/>

    </main>
  );
}
