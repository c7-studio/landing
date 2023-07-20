/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
