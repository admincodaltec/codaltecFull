'use client';

import {useEffect, useState} from 'react';
import HeaderHome from '@/layouts/HeaderHome';
import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Posts.module.css';
import PostItem from '@/components/home/PostItem';

interface Article {
	urlToImage: string;
	title: string;
}

export default function Posts() {
	const [news, setNews] = useState<Article[]>([]);

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
				console.log(data.articles);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<HeaderHome />
			<main>
				<BannerHeader title='NOTICIAS' image='newsBanner.jpg' />
				<section className={`${styles.portfolio__content} min-h-[60vh]`}>
					<div className='container mx-auto'>
						<article className='grid gap-2 items-center grid-cols-[1fr_2px_300px] py-5'>
							<h2 className='text-xl font-bold text-white'>
								BIENVENIDOS A NUESTRA SESION DE NOTICIAS, AQUI ENCONTRARAS LOS ULTIMOS
								ACONTECIMIENTOS DE INTERES, NACIONAL O INTERNACIONAL REFERENTES A CODALTEC
							</h2>
							<span className='w-[2px] h-full bg-white' />
						</article>
						<ul className={`${styles.posts__content}`}>
							{news.map((article, index) => (
								<PostItem
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									uri={`${index}`}
									image={article.urlToImage}
									title={article.title}
									isFirst={index === 0}
								/>
							))}
						</ul>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
