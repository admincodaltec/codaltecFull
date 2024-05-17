import React from 'react';

interface BannerHeaderProps {
	title: string;
	image?: string;
}

const BannerHeader: React.FC<BannerHeaderProps> = ({title, image}) => {
	return (
		<section
			style={{backgroundImage: `url("/assets/${image}")`}}
			className='bg-center bg-cover bg-no-repeat h-64 py-12'
		>
			<div className='flex mx-auto container justify-end items-end h-full'>
				<article className='p-1 rounded bg-' style={{backgroundColor: 'rgb(0 0 0 / 0.8)'}}>
					<h1 className='text-4xl font-bold text-white'>{title}</h1>
				</article>
			</div>
		</section>
	);
};

export default BannerHeader;
