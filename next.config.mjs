/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                hostname: 'image.tmdb.org'
            }
        ]
    }
};

export default nextConfig;
