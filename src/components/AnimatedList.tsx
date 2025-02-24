"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "王设计师",
      description: "视觉革命级体验",
      time: "25m ago",
      icon: "🎨",
      color: "#FF6B6B",
    },
    {
      name: "李工程师",
      description: "架构设计教科书级",
      time: "18m ago",
      icon: "🏗️",
      color: "#4ECDC4",
    },
    {
      name: "张前端",
      description: "动效丝滑如德芙",
      time: "12m ago",
      icon: "🌀",
      color: "#A55EEA",
    },
    {
      name: "陈产品",
      description: "交互直觉零学习",
      time: "8m ago",
      icon: "🤯",
      color: "#FD9644",
    },
    {
      name: "周架构师",
      description: "代码如诗可吟诵",
      time: "3m ago",
      icon: "📜",
      color: "#2D3436",
    },
    {
      name: "吴极客",
      description: "性能碾压竞品",
      time: "刚刚",
      icon: "🚀",
      color: "#EB3B5A",
    },
    {
      name: "郑黑客",
      description: "安全固若金汤",
      time: "1h ago",
      icon: "🛡️",
      color: "#20BF6B",
    },
    {
      name: "林艺术家",
      description: "配色引领潮流",
      time: "45m ago",
      icon: "🌈",
      color: "#FC5C65",
    },
    {
      name: "何极简派",
      description: "留白哲学典范",
      time: "30m ago",
      icon: "⛅",
      color: "#778CA3",
    },
    {
      name: "罗创新官",
      description: "创意突破天际",
      time: "5m ago",
      icon: "💡",
      color: "#F7B731",
    }
  ];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
