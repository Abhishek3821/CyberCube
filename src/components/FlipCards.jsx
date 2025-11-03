"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // keep only what you use
import { div } from "framer-motion/client";

const FlipCards = ({ cards }) => {
  return (
    <div className="py-14">
      <h1 className="mx-auto text-center w-full text-white text-5xl font-semibold">
        Tailored cyber risk solutions for each industry segment
      </h1>
      <div className="min-h-screen py-20 bg-black flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group perspective-1000 h-80 w-full"
            >
              {/* Outline behind the card */}
              <div className="absolute inset-0 -translate-x-3 translate-y-3 border-2 border-white pointer-events-none"></div>

              {/* Flipping card */}
              <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side with full image */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden border-2 border-white overflow-hidden`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${card.front.image})`,
                    }}
                  ></div>

                  {/* Overlay (optional for readability) */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Title & Arrow */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                    <h3 className="text-xl font-bold tracking-wide leading-tight">
                      {card.front.title}
                    </h3>
                    <div className="flex justify-end items-end">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-10 border-2 border-white flex flex-col justify-between bg-black text-white`}
                >
                  <div className="flex flex-col items-start h-full">
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-lg leading-relaxed mb-6">
                        {card.back.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    {card.back.buttonText && (
                      <button className="flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all duration-300">
                        {card.back.buttonText}
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
