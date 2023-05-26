/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   plugins: [
      [
         'styled-components',{ ssr: true, displayName: true, preprocess: false },
      ],
   ],
   compiler: {
      styledComponents: true,
   },
};

// eslint-disable-next-line no-undef
exports = nextConfig;
