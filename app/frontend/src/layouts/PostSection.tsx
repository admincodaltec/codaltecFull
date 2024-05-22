'use client';

import {useGetPosts} from '@/services/PostServices';
import styles from '@/styles/Post.module.css';
import {useEffect, useState} from 'react';

interface PostProps {
	params: {
		slug: string;
	};
}

interface Article {
	image: string;
	esTitle: string;
	createdAt: string;
	esDescription: string;
}

export default function PostSection({params}: PostProps) {
	const {posts, isLoading, error} = useGetPosts();
	const [news, setNews] = useState<Article[]>([]);
	const [post, setPost] = useState<Article>();
	const [dataLoaded, setDataLoaded] = useState(false);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (posts) {
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
			<section className={styles.post__banner}>
				<img
					className={styles.post__image}
					src={
						`http://localhost:8002/backend/public/images/${post?.image}` ||
						'/assets/codaltec-icon.PNG'
					}
					alt={post?.esTitle}
				/>
				<div className='container'>
					<h1 className={styles.post__title}>{post?.esTitle}</h1>
					<p className={styles.post__subtitle}>
						Fecha de publicación: {post?.createdAt.substring(0, 10)}
					</p>
				</div>
			</section>
			<section className='min-h-[400px] bg-[#2A2A2A]'>
				<div className='container py-5'>
					<article className='text-white'>
						<p>{post?.esDescription}</p>
					</article>
				</div>
			</section>
		</>
	);
}
