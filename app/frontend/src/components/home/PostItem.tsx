import Link from 'next/link';
import React from 'react';
import {useLocale} from 'next-intl';

interface PostItemProps {
	uri: string;
	image: string;
	title: string;
	isFirst?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({uri, image, title, isFirst}) => {
	const currentLocale = useLocale();
	return (
		<Link
			href={`/${currentLocale}/home/posts/${uri}`}
			className={`relative rounded-lg z-0 ${
				isFirst ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
			} hover:scale-105 transition-transform duration-300`}
		>
			<div className='z-10 rounded-lg absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-100' />
			<img
				className='absolute object-cover top-0 left-0 w-full h-full rounded-lg'
				src={`${image}`}
				alt={title}
			/>
			<div className='h-full w-full flex items-end relative p-4 z-20'>
				<p className={`text-white leading-[1.2] ${isFirst ? 'text-2xl' : 'text-base'}`}>{title}</p>
			</div>
		</Link>
	);
};

export default PostItem;
