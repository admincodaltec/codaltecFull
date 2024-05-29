import {useState, useEffect} from 'react';

export interface Post {
	id: number;
	image: string;
	esTitle: string;
	esDescription: string;
	createdAt: string;
}

export function useGetPosts() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPosts(data);
				setIsLoading(false);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return {posts, isLoading, error};
}

export function useGetPostById(id: number) {
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news/${id}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPost(data);
				setIsLoading(false);
			} catch (error) {
				setError('Error fetching data');
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchPost();
	}, [id]);

	return {post, isLoading, error};
}
