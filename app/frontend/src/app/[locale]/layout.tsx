import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';
import Provider from '@/context/Provider';

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import '../../styles/globals.css';

const inter = Montserrat({subsets: ['latin']});

export const metadata: Metadata = {
	icons: {
		icon: '/icon.ico',
	},
	title: {
		default: 'CODALTEC | Corporación de Alta Técnologia',
		template: '%s - CODALTEC | Corporación de Alta Técnologia',
	},
	description:
		'Entidad Pública, de Derecho Privado, Sin Ánimo de Lucro, cuyo objeto social es el desarrollo, promoción y realización de actividades de ciencia, tecnología e innovación.',
};

export default async function RootLayout({
	children,
	params: {locale},
}: {
	children: React.ReactNode;
	params: {locale: string};
}) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<NextIntlClientProvider messages={messages}>
				<body className={inter.className}>
					<Provider>{children}</Provider>
				</body>
			</NextIntlClientProvider>
		</html>
	);
}
