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
						<li className='grid grid-cols-2 p-2'>
							<div className='text-white px-4 text-center'>
								<p>{item.name}</p>
							</div>
							<div className='text-white px-4 text-center'>
								<a download={item.file} />
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
