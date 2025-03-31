"use client";
import React from "react";
import { motion } from "framer-motion"; // 修正导入路径，原代码中的 "motion/react" 可能是笔误

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(131, 179, 32)",   // 绿色
    "rgb(47, 195, 106)",   // 青绿色
    "rgb(42, 169, 210)",   // 青色
    "rgb(4, 112, 202)",    // 蓝色
    "rgb(107, 10, 255)",   // 紫色
    "rgb(183, 0, 218)",    // 洋红色
    "rgb(218, 0, 171)",    // 粉色
    "rgb(230, 64, 92)",    // 红色
    "rgb(232, 98, 63)",    // 橙色
    "rgb(249, 129, 47)",   // 黄橙色
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColors((prev) => [...prev.slice(1), prev[0]]);
      setCount((prev) => prev + 1);
    }, 8000); // 将间隔从5000ms增加到8000ms
    
    return () => clearInterval(interval);
}, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`} // 使用 count 确保颜色变化时动画触发
      initial={{ y: 0 }}
      animate={{
        color: currentColors[index % currentColors.length], // 从旋转后的颜色数组中取色
        y: [0, -3, 0],           // 上下移动动画
        scale: [1, 1.01, 1],     // 缩放动画
        filter: ["blur(0px)", "blur(5px)", "blur(0px)"], // 模糊动画
        opacity: [1, 0.8, 1],    // 透明度动画
      }}
      transition={{
        duration: 0.5,           // 动画持续时间
        delay: index * 0.05,     // 每个字符的动画延迟，形成波浪效果
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}