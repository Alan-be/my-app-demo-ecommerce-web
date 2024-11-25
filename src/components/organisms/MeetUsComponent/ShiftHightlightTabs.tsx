"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface CategoryData {
  id: number;
  name: string;
}

interface PropsMeetUs {
  data?: CategoryData[]; 
  setCategorySelected?: (id: number) => void; 
}

export const ShiftHightlightTabs: React.FC<PropsMeetUs> = ({
  data = TAB_DATA, 
  setCategorySelected,
}) => {
  const [selected, setSelected] = useState<number>(1);

  const changeSelected = (id: number) => {
    setSelected(id); 
    if (setCategorySelected) {
      setCategorySelected(id); 
    }
  };

  return (
    <div className="bg-foreground w-full">
      <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 mx-auto px-8 py-12 max-w-4xl">
        {data.map((item) => (
          <ToggleButton
            key={item.id}
            id={item.id}
            selected={selected}
            setSelected={changeSelected}
          >
            {item.name}
          </ToggleButton>
        ))}
      </div>
    </div>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: (id: number) => void;
  id: number;
}) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-secondary-light" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)} // Llama a `setSelected` con el ID del botón
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base ${
          selected === id
            ? "-translate-y-1 border-secondary-light bg-white text-primary-dark"
            : "border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

const TAB_DATA: CategoryData[] = [
  { id: 1, name: "Frituras" },
  { id: 2, name: "Chocolates" },
  { id: 3, name: "Vinos" },
  { id: 4, name: "Bebidas" },
];
