import React, { useEffect, useState } from "react";
import { VanishText } from "./VanishText";
import { ShiftHightlightTabs } from "./ShiftHightlightTabs";
import { getCategories } from "@/app/actions/bridgeFunctions";

interface CategoryData {
  id: number;
  name: string;
}

interface MeetUsProps {
  setCategorySelected: (id: number) => void; // Define correctamente la prop
}

const MeetUs: React.FC<MeetUsProps> = ({ setCategorySelected }) => {
  const [categories, setCategories] = useState<CategoryData[]>(dataDummy);
  const [categorySelectedLocal, setCategorySelectedLocal] = useState<number>(1); // Estado local

  useEffect(() => {
    setCategorySelected(categorySelectedLocal); // Actualiza la categoría seleccionada externa
  }, [categorySelectedLocal, setCategorySelected]); // Incluye dependencias correctas

  useEffect(() => {
    const getAllCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    getAllCategories();
  }, []);

  return (
    <section className="flex flex-col items-center bg-background px-12 py-12 md:py-20 border-border rounded-2xl w-full">
      <VanishText />
      <ShiftHightlightTabs
        data={categories}
        setCategorySelected={setCategorySelectedLocal} // Pasa el setter local
      />
    </section>
  );
};

const dataDummy = [
  { id: 1, name: "Cargando" },
  { id: 2, name: "Cargando" },
  { id: 3, name: "Cargando" },
  { id: 4, name: "Cargando" },
];

export default MeetUs;
