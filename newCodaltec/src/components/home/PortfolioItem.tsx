import Link from 'next/link';
import React from 'react';

interface PortfolioItem {
	image: string;
	title: string;
	description: string;
}

const DirectivesItem: React.FC<PortfolioItem> = ({ image, title, description }) => {
	return (
		<li>
			<Link
				className="relative grid grid-rows-[32px_1fr] gap-4 p-6 rounded-xl shadow-xl"
				href={'/example'}
				style={{
					boxShadow: '7px 7px 14px rgba(0, 0, 0, 0.2), -7px -7px 10px rgba(255, 255, 255, 0.05)',
				}}
			>
				<picture className="flex justify-center items-center">
					<img className="object-contain w-8 h-8" src={`/assets/${image}`} alt={title} />
				</picture>
				<div className="flex flex-col">
					<p className="text-yellow-500 text-lg text-center mb-1">
						<strong>{title}</strong>
					</p>
					<p className="text-sm text-white text-center">{description}</p>
				</div>
			</Link>
		</li>
	);
};

export default DirectivesItem;
