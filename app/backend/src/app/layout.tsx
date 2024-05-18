import type {Metadata} from 'next';
import {Inter, Montserrat} from 'next/font/google';
import '../styles/globals.css';

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

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
