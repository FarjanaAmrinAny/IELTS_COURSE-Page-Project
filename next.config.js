/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'api.10minuteschool.com',
      'cdn.10minuteschool.com',
      'img.youtube.com',
      'i.ytimg.com'
    ],
  },
  //experimental: {
    //serverComponentsExternalPackages: ['your-package'],
  //},
}

module.exports = nextConfig