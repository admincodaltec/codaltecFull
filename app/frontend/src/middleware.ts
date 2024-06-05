import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	defaultLocale: 'es',
	locales: ['es', 'en'],
	localePrefix: 'as-needed',
});

export const config = {
	matcher: ['/((?!api|_next/static|assets/|/assets/).*)'],
};
