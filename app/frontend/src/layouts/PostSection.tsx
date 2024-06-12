'use client';

import {useGetPostById} from '@/services/PostsServices';
import styles from '@/styles/Post.module.css';
import {useLocale} from 'next-intl';

interface PostProps {
	params: {
		slug: string;
	};
}

export default function Post({params}: PostProps) {
	const currentLocale = useLocale();
	const id = parseInt(params.slug, 10);
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
					<h1 className={styles.post__title}>
						{currentLocale === 'es' ? post?.esTitle : post?.enTitle}
					</h1>
					<p className={styles.post__subtitle}>
						{currentLocale === 'es' ? 'Fecha de publicación: ' : 'Date of publication: '}{' '}
						{post?.createdAt.substring(0, 10)}
					</p>
				</div>
			</section>
			<section className={`${styles.post__content} bg-[#2a2a2a]`}>
				<div className='container py-5'>
					<article className='text-white'>
						<p>{currentLocale === 'es' ? post?.esDescription : post?.enDescription}</p>
					</article>
				</div>
			</section>
		</>
	);
}
