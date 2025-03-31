// Copyright (c) 2025 SanXiaoXing. MIT License.
import { MacbookScrollDemo } from "@/components/MacScoll";
import { TextHoverEffectDemo } from "@/components/textHoverEffect";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BentoDemo } from "@/components/BentoGrid";
import { AnimatedTestimonialsList } from "@/components/AnimatedTestimonial";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Desktop() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[80%]">
        {/* 背景字体SanXiaoXing */}
        <div className="absolute inset-0 flex justify-center items-center ">
          <TextHoverEffectDemo />
        </div>
        {/* <DotPattern /> */}

        {/* Macbook滚动效果 */}
        <MacbookScrollDemo />

        {/* 添加的简单标题 */}
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          <AuroraText>Program -</AuroraText> 项目
        </h1>
        <AnimatedTestimonialsList />
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          <AuroraText>Summarize -</AuroraText> 概述
        </h1>
        <BentoDemo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
