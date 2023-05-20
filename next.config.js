/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/bucket/:path*',
        destination: 'https://storage.googleapis.com/ppak.net/:path*'
      }
    ]
  },
  images: {
    domains: ['storage.googleapis.com', 'images.ctfassets.net'],
  },
  reactStrictMode: true,
}
