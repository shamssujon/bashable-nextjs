/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mighty.tools',
            port: '',
          },
        ],
      },
};

export default nextConfig;
