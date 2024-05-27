'use client';

import {useGetPortafolio} from '@/services/PortfolioServices';
import PortfolioItem from '@/components/home/PortfolioItem';
import {FadeLoader} from 'react-spinners';

export default function PortafolioSection() {
	const {portafolios, isLoading, error} = useGetPortafolio();
	return (
		<div className='w-full'>
			{isLoading ? (
				<div className='flex h-full w-full justify-center items-center py-6'>
					<FadeLoader color='#EAB308' />
				</div>
			) : error ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl py-3'>
						Se produjo un error, intentelo de nuevo mas tarde!
					</p>
				</div>
			) : portafolios.length === 0 ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl'>
						No hay líneas de negocio aun disponibles!
					</p>
				</div>
			) : (
				<ul className='grid grid-cols-3 gap-10 px-6'>
					{portafolios.map((item, index) => (
						<PortfolioItem
							key={index}
							image={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/images/${item.icon}`}
							title={item.esName}
							description={item.esDescription}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
