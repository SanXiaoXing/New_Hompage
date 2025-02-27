import ColourfulText from "@/components/ui/colourful-text";
import { BentoDemo } from "@/components/BentoGrid";

export default function Moblie() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-20 pb-20 gap-16 font-[geist]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <header className="fixed top-0 left-0 w-full flex items-center bg-white/30 backdrop-blur-md p-4">
          <img src="/favicon.svg" alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-l font-bold">SanXiaoXing</span>
        </header>
        <h1 className="text-4xl font-bold font-mycustom w-full items-center">
          <ColourfulText text="SanXiaoXing" />
        </h1>
        <BentoDemo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span className="text-gray-500 text-sm self-start">使用网页端更方便</span>
      </footer>
    </div>
  );
}