'use client';

import {useGetFinancial} from '@/services/TransparencyServices';
import {FadeLoader} from 'react-spinners';

export default function FinancialsSection() {
	const {financials, isLoading, error} = useGetFinancial();
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
			) : (
				<ul className='body py-4'>
					{financials.map((item, index) => (
						<li className='grid grid-cols-2 py-2' key={index}>
							<div className='text-white px-4 text-center'>
								<p>{item.name}</p>
							</div>
							<div className='text-white px-4 text-center'>
								<a
									target='_blanck'
									className='text-yellow-500 underline'
									href={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/documents/${item.file}`}
									download={item.file}
								>
									{item.file}
								</a>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
