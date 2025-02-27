// Copyright (c) 2025 SanXiaoXing. MIT License.
// src/types/next.d.ts
import type { NextURL } from 'next/dist/server/web/next-url'

declare module 'next/server' {
  interface NextRequest {
    nextUrl: NextURL
  }
}