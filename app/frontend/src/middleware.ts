import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	defaultLocale: 'es',
	locales: ['es', 'en'],
	localePrefix: 'as-needed',
});

export const config = {
	matcher: [
		'/((?!api|_next/static|assets/|/assets/|favicon.ico|/api/|api/auth/login|auth/login|admin/|/admin).*)',
	],
};
