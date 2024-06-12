'use client';

import {useGetContract} from '@/services/TransparencyServices';
import {FadeLoader} from 'react-spinners';

export default function ContractsSection() {
	const {contracts, isLoading, error} = useGetContract();
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
			) : contracts.length === 0 ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl py-3'>
						Aun no hay contratos subidos, intentelo más tarde!
					</p>
				</div>
			) : (
				<ul className='body py-4'>
					{contracts.map((item, index) => (
						<li className='grid grid-cols-3 py-2' key={index}>
							<div className='text-white px-4 text-center'>
								<p>{item.purpose}</p>
							</div>
							<div className='text-white px-4 text-center'>
								<p>{item.date}</p>
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
