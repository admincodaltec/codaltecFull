// PostSection.tsx

import {useGetPosts} from '@/services/PostServices';
import PostItem from '@/components/home/PostItem';
import FadeLoader from 'react-spinners/FadeLoader';

interface PostsSectionProps {
	ulClassName?: string;
	maxPostsToShow?: number;
}

export default function PostsSection({ulClassName, maxPostsToShow}: PostsSectionProps) {
	const {posts, isLoading, error} = useGetPosts();

	return (
		<ul>
			{isLoading ? (
				<div className='flex h-full w-full justify-center items-center'>
					<FadeLoader color='#EAB308' />
				</div>
			) : error ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl'>
						Se produjo un error, intentelo mas tarde!
					</p>
				</div>
			) : posts.length === 0 ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl'>No hay posts disponibles.</p>
				</div>
			) : (
				<ul className={ulClassName}>
					{posts.slice(0, maxPostsToShow).map((article, index) => (
						<PostItem
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							uri={`${index}`}
							image={article.urlToImage}
							title={article.title}
						/>
					))}
				</ul>
			)}
		</ul>
	);
}
