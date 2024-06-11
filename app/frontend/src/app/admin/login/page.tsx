'use client';

import {useState} from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setCurrentUser] = useState('');

	const handleSubmit = async (e: {preventDefault: () => void}) => {
		e.preventDefault();

		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users?email=${email}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setCurrentUser(data);
				console.log(currentUser);
			} catch (error) {
				console.log(error);
			}
		};

		if (!currentUser) {
			alert('User not found');
		} else {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
				}),
			});
			if (!response.ok) {
				const errorMessage = `Error: ${response.status} - ${response.statusText}`;
				console.error(errorMessage);
				return;
			}
			const data = await response.json();
			console.log(data);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<button>Login</button>
			</form>
		</div>
	);
}
