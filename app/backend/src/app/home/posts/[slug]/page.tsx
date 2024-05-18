'use client';

import {useEffect, useState} from 'react';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Post.module.css';

interface PostProps {
	params: {
		slug: string;
	};
}

interface Article {
	urlToImage: string;
	title: string;
	publishedAt: string;
	description: string;
}

export default function Post({params}: PostProps) {
	const [news, setNews] = useState<Article[]>([]);
	const [post, setPost] = useState<Article>();
	const [dataLoaded, setDataLoaded] = useState(false);

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
				setNews(data.articles);
				setDataLoaded(true); // Indicar que los datos han sido cargados correctamente
				console.log(data.articles);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (dataLoaded) {
			const index = parseInt(params.slug, 10);
			if (index >= 0 && index < news.length) {
				const postActual = news[index];
				setPost(postActual);
			} else {
				console.error('El índice está fuera del rango del array');
			}
		}
	}, [dataLoaded, params.slug, news]);
	return (
		<>
			<HeaderHome />
			<main>
				<section className={styles.post__banner}>
					<img className={styles.post__image} src={post?.urlToImage} alt={post?.title} />
					<div className='container'>
						<h1 className={styles.post__title}>{post?.title}</h1>
						<p className={styles.post__subtitle}>
							Fecha de publicación: {post?.publishedAt.substring(0, 10)}
						</p>
					</div>
				</section>
				<section className='min-h-[400px] bg-[#2A2A2A]'>
					<div className='container py-5'>
						<article className='text-white'>
							<p>{post?.description}</p>
						</article>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
