import { redirect } from 'next/navigation'

export default function Home() {
  // 这里只是占位，实际路由由中间件处理
  redirect('/desktop') 
}