"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center flex-col px-4 mb-8">
      
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        查看 👀   {" "}
        <LinkPreview
          url="https://github.com/SanXiaoXing/New_Hompage"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          源码
        </LinkPreview>{" "}
        将其 <strong>Clone</strong> 并制作自己的网站吧 🎉～
      </p>
    </div>
  );
}
