export interface User {
	id: number;
	email: string;
	password: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
	try {
		console.log(`${process.env.API_URL}users?email=${email}`);

		const response = await fetch(`${process.env.API_URL}users?email=${email}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data: User[] = await response.json();
		return data.length > 0 ? data[0] : null;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
