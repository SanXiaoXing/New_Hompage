"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "博客网站",
    title: "SanXiaoXing's Blog",
    src: "/blog.png",
    ctaText: "Let's Go",
    ctaLink: "https://blog.sanxiaoxing.cn",
    content: () => {
      return (
        <div className=" text-white p-6 rounded-xl max-w-lg mx-auto">
          <p className="text-gray-800 text-lg mb-4">
          本博客以个人经历、反思与见解为核心内容，基于 <strong>Astro</strong> 框架构建，通过原生 <strong>CSS</strong> 与轻量 <strong>JavaScript</strong> 脚本实现定制化设计与交互功能，兼顾静态页面的高效渲染与动态交互的灵活拓展。项目遵循 <strong>CC BY-NC-SA 4.0</strong> 协议，要求署名、非商业使用及相同方式共享，代码托管于 <strong>GitHub</strong> 并开放协作。依托 <strong>Vercel</strong> 的无服务器架构实现自动化部署，结合边缘网络加速全球访问，打造从内容沉淀到技术实践的开放式知识共享平台。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm"># Astro</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm"># Github</span>
            <span className="bg-purple-500 text-black px-3 py-1 rounded-full text-sm"># Node.js</span>
          </div>
        </div> 
      );
    },
  },
  {
    description: "主站网站",
    title: "SanXiaoXing's Homepage",
    src: "/homepageMain.png",
    ctaText: "Let's Go",
    ctaLink: "https://sanxiaoxing.cn",
    content: () => {
      return (
        <div className=" text-white p-6 rounded-xl max-w-lg mx-auto">
          <p className="text-gray-800 text-lg mb-4">
          本主站采用<strong> Next.js </strong>框架构建，结合 <strong>Tailwind CSS </strong>实现原子化样式设计。项目遵循 <strong>MIT</strong> 开源协议，代码托管于 <strong>GitHub</strong> 仓库并开放协作，开发者可自由访问、修改和二次分发。通过 <strong>Vercel</strong> 平台实现自动化部署，依托其全球CDN和Serverless架构保障稳定高效的访问体验，形成从开发、版本控制到持续交付的完整现代化技术闭环。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm"># Next.js</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm"># Git</span>
            <span className="bg-purple-500 text-black px-3 py-1 rounded-full text-sm"># Node.js</span>
            <span className="bg-red-500 text-black px-3 py-1 rounded-full text-sm"># React</span>
          </div>
        </div> 
      );
    },
  },

  {
    description: "匿名聊天网站",
    title: "SanXiaoXing's Chat",
    src: "/room.png",
    ctaText: "Let's Go",
    ctaLink: "https://room.sanxiaoxing.cn",
    content: () => {
      return (
        <div className=" text-white p-6 rounded-xl max-w-lg mx-auto">
          <p className="text-gray-800 text-lg mb-4">
          该匿名互动平台支持<strong>实时文字聊天</strong>、<strong>语音通话</strong>及<strong>屏幕共享</strong>功能，基于<strong>Next.js</strong>框架实现服务端渲染与动态交互，通过<strong>Tailwind CSS</strong>构建响应式界面，并依托<strong>LiveKit Cloud</strong>实时通信服务保障音视频流低延迟传输，形成从通信逻辑到用户体验的完整技术链路。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm"># Next.js</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm"># Tailwind CSS</span>
            <span className="bg-purple-500 text-black px-3 py-1 rounded-full text-sm"># LiveKit Cloud</span>
          </div>
        </div> 
      );
    },
  },
  {
    description: "休闲记录",
    title: "SanXiaoXing's Happy",
    src: "/happy.png",
    ctaText: "Let's Go",
    ctaLink: "https://happy.sanxiaoxing.cn",
    content: () => {
      return (
        <div className=" text-white p-6 rounded-xl max-w-lg mx-auto">
          <p className="text-gray-800 text-lg mb-4">
          该<strong>休闲类网站</strong>整合了<strong>实用工具集合</strong>与<strong>趣味互动模块</strong>，基于<strong>Hexo</strong>框架构建，依托静态站点生成优势实现快速部署与轻量化访问体验，形成资源聚合与娱乐探索相结合的内容生态。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm"># Hexo</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm"># Tailwind CSS</span>
          </div>
        </div> 
      );
    },
  },
];
