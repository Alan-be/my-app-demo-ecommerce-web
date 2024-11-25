"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const VanishText = () => {
  return (
    <div className="bg-foreground px-4 py-24 md:py-36 w-full text-center">
      <h3 className="font-medium text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Conoce nuestros productos como
        <AnimatedText
          phrases={[
            "Sabritas",
            "Kinder",
            "Marinella",
            "Marketing Teams",
            "Small Businesses",
          ]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative mt-2 mb-14 w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="top-0 left-1/2 absolute w-full text-primary-light"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};