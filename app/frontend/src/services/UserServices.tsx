export interface User {
	id: number;
	email: string;
	password: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
	try {
		const response = await fetch(`https://codaltec.com/apiback/v1/users?email=${email}`);
		console.log(response);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		if (response.status === 404) {
			return null;
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
