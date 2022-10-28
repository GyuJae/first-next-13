const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    sassOptions: {
      includePaths: ["app", "pages", "components", "styles"].map(item => path.join(__dirname, item)),
    },
  
  },
}

module.exports = nextConfig
