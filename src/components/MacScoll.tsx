import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
import ColourfulText from "./ui/colourful-text";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
            <span className="select-none">
              <h1 className="text-5xl ">Welcome to <ColourfulText text="SanXiaoXing's" /> website! 🌟 <br /> </h1>
              <span className="text-gray-500 text-xl select-none italic font-serif">
              Your joy shall bloom like petals kissed by dawn, <br />
              where starlight dances in the whispers of your soul.
              </span>
            </span>
        }
        badge={
          <Link href="https://github.com/SanXiaoXing">
            <Badge className="h-12 w-12 transform -rotate-12" />
          </Link>
        }
        src={`/Mac.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
    return (
        <img
            src="/favicon-fight_white.svg"
            alt="Badge"
            className={`${className} rounded-lg transform scale-110`}
        />
    );
};
