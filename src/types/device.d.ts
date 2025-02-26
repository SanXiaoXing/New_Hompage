declare module 'next/server' {
  interface NextRequest {
    isMobile?: boolean
  }
}