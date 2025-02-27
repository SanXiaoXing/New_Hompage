// Copyright (c) 2025 SanXiaoXing. MIT License.
import { headers } from 'next/headers'; // 正确导入方式
import Mobile from './mobile/page'
import Desktop from './desktop/page'

export default async function Page() {
  const headersList = await headers();        // 通过导入的 API 调用
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile/i.test(userAgent);
  
  return isMobile ? <Mobile /> : <Desktop />;
}