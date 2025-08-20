import { NextResponse } from 'next/server'
import { withPWA } from 'next-pwa'
export default withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
},
  images: {
    domains: []
},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
},
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
},
        ]
},
    ]
  },
  async rewrites() {
    return [
      { source: '/about', destination: '/about-us' },
      { source: '/products', destination: '/our-products' },
    ]
  }
});