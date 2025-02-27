// Copyright (c) 2025 SanXiaoXing. MIT License.
declare module 'next/server' {
  interface NextRequest {
    isMobile?: boolean
  }
}