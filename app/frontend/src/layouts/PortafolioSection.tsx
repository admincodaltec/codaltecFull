'use client';

import {useGetPortafolio} from '@/services/PortfolioServices';
import PortfolioItem from '@/components/home/PortfolioItem';
import styles from '@/styles/Portfolio.module.css';
import {FadeLoader} from 'react-spinners';
import {useLocale} from 'next-intl';

export default function PortafolioSection() {
	const currentLocale = useLocale();
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
						No hay líneas de negocio aún Cargadas!
					</p>
				</div>
			) : (
				<ul className={`grid gap-10 px-6 ${styles.portfolio__section}`}>
					{portafolios.map((item, index) => (
						<PortfolioItem
							key={index}
							image={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/images/${item.icon}`}
							title={currentLocale === 'es' ? item.esName : item.enName}
							description={currentLocale === 'es' ? item.esDescription : item.enDescription}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
