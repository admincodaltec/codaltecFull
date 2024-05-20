import {useState, useEffect} from 'react';

export interface Post {
	urlToImage: string;
	title: string;
	// Otras propiedades de los posts
}

export function useGetPosts() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://newsapi.org/v2/top-headlines?country=us&apiKey=3349874d9bfe4e1bb0a0341166b279ad'
				);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPosts(data.articles);
				setIsLoading(false);
				console.log('MONDA', data);
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
