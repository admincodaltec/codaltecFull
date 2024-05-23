import {useState, useEffect} from 'react';

export interface InternalControl {
	id: number;
	name: string;
	date: string;
	file: string;
	createdAt: string;
}

export interface Financial {
	id: number;
	name: string;
	file: string;
	createdAt: string;
}

export function useGetInternalControl() {
	const [internalsControl, setInternalsControl] = useState<InternalControl[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}internal-control`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setInternalsControl(data);
				setIsLoading(false);
				console.log('INTERNALS: ', data);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {internalsControl, isLoading, error};
}

export function useGetFinancial() {
	const [financials, setFinancials] = useState<Financial[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}financial`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setFinancials(data);
				setIsLoading(false);
				console.log('INTERNALS: ', data);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {financials, isLoading, error};
}
