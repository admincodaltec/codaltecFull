'use client';

import PostItem from '@/components/home/PostItem';
import {useGetPosts} from '@/services/PostServices';
import {FadeLoader} from 'react-spinners';

interface PostsSectionProps {
	maxPostsToShow?: number;
	ulClassName?: string;
}

const PostsSection: React.FC<PostsSectionProps> = ({maxPostsToShow, ulClassName}) => {
	const {posts, isLoading, error} = useGetPosts();
	return (
		<ul className='w-full'>
			{isLoading ? (
				<div className='flex h-full w-full justify-center items-center'>
					<FadeLoader color='#EAB308' />
				</div>
			) : error ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl'>
						Se produjo un error, intentelo de nuevo mas tarde!
					</p>
				</div>
			) : posts.length === 0 ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl'>No hay posts disponibles.</p>
				</div>
			) : maxPostsToShow ? (
				<ul className={ulClassName}>
					{posts.slice(0, maxPostsToShow).map((article, index) => (
						<PostItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={article.id}
							uri={`${article.id}`}
							image={
								`http://localhost:8002/backend/public/images/${article.image}` ||
								'/assets/codaltec-icon.PNG'
							}
							title={article.esTitle}
						/>
					))}
				</ul>
			) : (
				<ul className={ulClassName}>
					{posts.slice(0, maxPostsToShow).map((article, index) => (
						<PostItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={article.id}
							uri={`${article.id}`}
							image={
								`http://localhost:8002/backend/public/images/${article.image}` ||
								'/assets/codaltec-icon.PNG'
							}
							title={article.esTitle}
							isFirst={index === 0}
						/>
					))}
				</ul>
			)}
		</ul>
	);
};

export default PostsSection;
