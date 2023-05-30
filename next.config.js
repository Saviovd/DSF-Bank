/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   compiler: {
      styledComponents: true,
   }
};

// eslint-disable-next-line no-undef
exports = nextConfig;
