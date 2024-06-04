import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	defaultLocale: 'es',
	locales: ['es', 'en'],
});

export const config = {
	matcher: ['/', '/(en|es)/:path*'],
};
