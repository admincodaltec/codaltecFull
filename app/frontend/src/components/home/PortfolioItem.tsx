import React from 'react';
import styles from '@/styles/PortfolioItem.module.css';

interface PortfolioItem {
	image: string;
	title: string;
	description: string;
}

const DirectivesItem: React.FC<PortfolioItem> = ({image, title, description}) => {
	return (
		<li>
			<div className={`relative cursor-pointer rounded-xl shadow-xl h-96  ${styles.card}`}>
				<div className={`${styles.card__sides} ${styles.card__sides_front} bg-yellow-500`}>
					<picture className={`${styles.card__figure}`}>
						<img className='object-contain w-full h-full rounded-lg' src={image} alt={title} />
					</picture>
					<p className='text-black text-2xl text-center mb-1'>
						<strong>{title}</strong>
					</p>
				</div>
				<div className={`${styles.card__sides} ${styles.card__sides_back} bg-[#272727] `}>
					<p className='text-yellow-500 text-2xl text-center mb-1'>
						<strong>{title}</strong>
					</p>
					<p className='text-sm text-white text-justify'>{description}</p>
				</div>
			</div>
		</li>
	);
};

export default DirectivesItem;
