import {useState, useEffect} from 'react';

export interface Portfolio {
	id: number;
	icon: string;
	esName: string;
	esDescription: string;
}

export function useGetPortafolio() {
	const [portafolios, setPortafolios] = useState<Portfolio[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}business`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPortafolios(data);
				setIsLoading(false);
				console.log('BUSSINES: ', data);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {portafolios, isLoading, error};
}
