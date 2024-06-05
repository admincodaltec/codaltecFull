const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	output: 'standalone',
	async rewrites() {
		return [
			// Reescribe las rutas en inglés con prefijo /en
			{
				source: '/en/:path*',
				destination: '/en/:path*',
				locale: false,
			},
			// Reescribe las rutas sin prefijo (español por defecto)
			{
				source: '/:path*',
				destination: '/:path*',
				locale: false,
			},
		];
	},
};

module.exports = withNextIntl(nextConfig);
