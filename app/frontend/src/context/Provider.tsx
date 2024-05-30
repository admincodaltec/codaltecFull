'use client';

import {AppProgressBar} from 'next-nprogress-bar';
import {ReactNode} from 'react';

interface ProviderProps {
	children: ReactNode;
}

export default function Provider({children}: ProviderProps) {
	return (
		<>
			<AppProgressBar color='#EAB308' height='4px' options={{showSpinner: false}} />
			{children}
		</>
	);
}
