export const metadata = {
	title: 'Admin CODALTEC',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang=''>
			<body>{children}</body>
		</html>
	);
}
