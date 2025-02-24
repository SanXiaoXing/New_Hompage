import { MacbookScrollDemo } from "@/components/MacScoll";
import { TextHoverEffectDemo } from "@/components/textHoverEffect";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BentoDemo } from "@/components/BentoGrid";

export default function Home() {
  return (
    
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[80%]">
        <div className="absolute inset-0 flex justify-center items-center ">
          <TextHoverEffectDemo />
        </div>
        <DotPattern />
        <MacbookScrollDemo />
        <BentoDemo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
    
  );
}
