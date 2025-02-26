import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsList() {
  const testimonials = [
    {
      quote:
        "博客页面，这是我个人经历、反思和见解的集合。它反映了我的旅程，也证明了我作为一名开发人员的成长。我希望你喜欢读它。",
      name: "博客页面",
      designation: "一个简单的博客，天天开心啊",
      src: "/blog.png",
      href: "https://blog.sanxiaoxing.cn",
    },
    {
      quote:
        "GIthub Profile 是我的个人资料页面，并通过个性化的设计，展现我的个人风格，并且可以在 Github 上找到我的开源项目。",
      name: "GIthub Profile",
      designation: "SanXiaoXing",
      src: "/Github_profile.png",
      href: "https://github.com/SanXiaoXing",
    },
    {
      quote:
        "一个简单的聊天室应用程序，允许用户匿名相互通信。它是基于livekit 和 Next.js的匿名聊天室构建的，为通信提供了一个安全且私密的环境。",
      name: "匿名聊天室",
      designation: "一个简单的聊天室应用程序",
      src: "/room.png",
      href: "https://room.sanxiaoxing.cn",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
