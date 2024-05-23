import {useState, useEffect} from 'react';

export interface Slider {
	id: number;
	image: string;
	esTitle: string;
	esDescription: string;
	createdAt: string;
}

export function useGetSliders() {
	const [sliders, setSliders] = useState<Slider[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sliders`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setSliders(data);
				setIsLoading(false);
				console.log('SLIDERS: ', data);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {sliders, isLoading, error};
}
