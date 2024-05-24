'use client';

import {useGetPostById} from '@/services/PostsServices';
import styles from '@/styles/Post.module.css';

interface PostProps {
	params: {
		slug: string;
	};
}

export default function Post({params}: PostProps) {
	const id = parseInt(params.slug, 10); // Asume que el slug es un ID numérico
	const {post, isLoading, error} = useGetPostById(id);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<section className={styles.post__banner}>
				<img
					className={styles.post__image}
					src={
						`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/images/${post?.image}` ||
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
			<section className={styles.post__content}>
				<div className='container py-5'>
					<article className='text-white'>
						<p>{post?.esDescription}</p>
					</article>
				</div>
			</section>
		</>
	);
}
