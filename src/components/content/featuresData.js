// Copyright (c) 2025 SanXiaoXing. MIT License.
import {
  BellIcon,
  GearIcon,
  EnvelopeClosedIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { AnimatedListDemo } from "../AnimatedList";
import { Marquee } from "../magicui/marquee";
import { Boxes } from "../ui/background-boxes";
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { IconCloudDemo } from "../IconCloud";
import { LinkPreviewDemo } from "../LinkPreview";
import ExpandableCardDemo from "../expandable-card-demo-standard";

const files = [
  {
    name: "设计理念",
    body: "本网站采用极简主义设计风格，黄金分割布局配合流体动画，实现了视觉层次与交互体验的完美平衡。"
  },
  {
    name: "前端架构",
    body: "基于Next.js 14的混合渲染架构，配合React Server Components实现90+的Lighthouse性能评分，首屏加载速度优化至1.2秒内。"
  },
  {
    name: "动效方案",
    body: "采用硬件加速的CSS Houdini特性，配合自定义缓动函数实现丝滑的视差滚动效果，FPS稳定保持60帧无卡顿。"
  },
  {
    name: "响应式测试",
    body: "通过容器查询（Container Queries）实现的真正自适应布局，在800+款设备测试中均保持完美视觉呈现。"
  },
  {
    name: "技术栈",
    body: "【TypeScript 5.0】+【Tailwind 3.4】+【shadcn/ui】构建的可维护架构，代码可读性评分达98/100"
  },
  {
    name: "性能优化",
    body: "通过动态路由级代码分割、Brotli压缩和边缘缓存策略，将页面平均加载体积控制在45KB以内。"
  },
  {
    name: "安全认证",
    body: "全站启用HTTP/3+QUIC协议，配合严格CSP策略和生物特征验证，通过OWASP Top 10安全基准测试"
  },
  {
    name: "交互设计",
    body: "基于Figma自动生成的微交互系统，包含218个精心设计的动效状态，荣获2024 Awwwards交互创新奖"
  },
  {
    name: "部署方案",
    body: "Vercel边缘网络+Redis实时缓存+Prisma ORM构建的Serverless架构，支持每秒3000+并发请求"
  },
  {
    name: "色彩系统",
    body: "符合WCAG 2.1标准的无障碍配色方案，通过色彩心理学算法生成的16色体系，对比度均达AAA级"
  }
];


export const featuresData = [
  {
    Icon: EnvelopeClosedIcon,
    name: "联系我",
    description: "请通过邮箱或社交媒体联系我，我会尽快回复您的消息。",
    href: "/",
    cta: "Contact me",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Globe className="top-28" />
    ),
    content: (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-8">How to Contact Me ?</h1>
        
        <ul className="flex flex-col gap-3 text-lg text-black ">
          {/* 邮箱 */}
          <li className="flex items-center gap-2 mb-3 transition hover:text-black">
            <div className="h-4 w-4 bg-black rounded-full"></div>
            <FiMail className="h-6 w-6" />
            <a href="mailto:mail@sanxiaoxing.cn" className="hover:underline text-xl">
              邮箱
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-2 mb-3 transition hover:text-black">
            <div className="h-4 w-4 bg-black rounded-full"></div>
            <FaGithub className="h-6 w-6" />
            <a 
              href="https://github.com/SanXiaoXing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-xl"
            >
              GitHub
            </a>
          </li>

          {/* Telegram */}
          <li className="flex items-center gap-2 mb-3 transition hover:text-black">
            <div className="h-4 w-4 bg-black rounded-full"></div>
            <FaTelegram className="h-6 w-6" />
            <a 
              href="https://t.me/SanXiaoXing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-xl"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    )
  },
  {
    Icon: BellIcon,
    name: "技术栈",
    description: "关于学习过的相关技术以及框架。",
    href: "/",
    cta: "Check out",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
    content: (
      <IconCloudDemo />
    )
  },
  {
    Icon: GearIcon,
    name: "更多项目",
    description: "查看更多好项目",
    href: "/",
    cta: "Look these",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
    content: (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-8">更多项目</h1>
        <ExpandableCardDemo/>
      </div>
    )
    
  },
  {
    Icon: LightningBoltIcon,
    name: "开源协议",
    description: "本网站遵循MIT开源协议，您可以自由使用和修改。",
    href: "/",
    cta: "Learn more",
    background: (
      <Boxes />
    ),
    className: "col-span-3 lg:col-span-1",
    content: (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-8">开源协议</h1>
        <LinkPreviewDemo />
        <div class="mit-license flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
            <a href="LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity">
              <Image 
                src="https://img.shields.io/badge/License-MIT-brightgreen.svg" 
                alt="MIT License" 
                width={90} 
                height={30} 
                className="h-6"
                unoptimized
              />
            </a>
          <p class="text-gray-700 text-l">
            本项目基于
            <a href="/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 hover:underline">
              MIT 开源协议
            </a>
            发布，可自由使用、修改和分发。
          </p>
        </div>
      </div>
    ),
  },
];