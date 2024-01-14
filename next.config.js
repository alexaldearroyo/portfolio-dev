/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    // Otras configuraciones de Next.js aquí
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Link',
              value: '/favicon.ico',
            },
          ],
        },
      ];
    },
  };
  