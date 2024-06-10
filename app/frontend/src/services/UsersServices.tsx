import {useEffect, useState} from 'react';

export interface User {
	id: number;
	email: string;
	password: string;
}

export function useGetUser(email: string) {
	const [user, setUser] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users?email=${email}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setUser(data);
				setIsLoading(false);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {user, isLoading, error};
}
