import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Replace with your actual image domain(s)
          },
        ],
      },
};
 
export default nextConfig;