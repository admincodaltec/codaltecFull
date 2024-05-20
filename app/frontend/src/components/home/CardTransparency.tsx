import React from 'react';
import Link from 'next/link';

interface CardTransparencyProps {
	title: string;
	link: string;
	text: string;
}

const CardTransparency: React.FC<CardTransparencyProps> = ({title, text, link}) => {
	return (
		<Link
			href={link}
			className='flex flex-col rounded-lg bg-[#4f4f4f] hover:scale-95 transition-transform duration-300'
		>
			<div className='flex justify-center items-center bg-yellow-500 p-4 rounded-t-lg h-24'>
				<h3 className='font-semibold text-3xl text-center leading-[1.5rem]'>{title}</h3>
			</div>
			<div className='relative pt-4 pr-4 pl-4 pb-10 rounde-b-lg h-full'>
				<p className='font-extralight text-sm text-justify text-white'>{text}</p>
				<p className='absolute font-extralight text-yellow-500 right-4 bottom-4 italic'>
					LEER MÁS...
				</p>
			</div>
		</Link>
	);
};

export default CardTransparency;
