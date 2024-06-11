import '../../styles/globals.css';
import {Toaster} from '@/components/ui/sonner';
import {Inter as FontSans} from 'next/font/google';
import {cn} from '@/lib/utils';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata = {
	title: 'Admin CODALTEC',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
