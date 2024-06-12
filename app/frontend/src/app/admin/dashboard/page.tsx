'use client';

import {NavigationMenuDemo} from '@/layouts/admin/HeaderAdmin';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {useGetSliders} from '@/services/SliderServices';
import {useGetPortafolio} from '@/services/PortfolioServices';
import {useGetPosts} from '@/services/PostsServices';
import {useGetContract} from '@/services/TransparencyServices';

export default function Dashboard() {
	const {sliders} = useGetSliders();
	const {portafolios} = useGetPortafolio();
	const {posts} = useGetPosts();
	const {contracts} = useGetContract();
	return (
		<>
			<NavigationMenuDemo />
			<section className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Hola, Bienvenido de nuevo 👋</h2>
				</div>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
					<Card>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>Sliders</CardTitle>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='h-4 w-4 text-muted-foreground'
							>
								<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
							</svg>
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>{sliders.length}</div>
							<p className='text-xs text-muted-foreground'>Subidos hasta el momento</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>Líneas de Negocio</CardTitle>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='h-4 w-4 text-muted-foreground'
							>
								<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
							</svg>
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>{portafolios.length}</div>
							<p className='text-xs text-muted-foreground'>Subidos hasta el momento</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>Noticias</CardTitle>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='h-4 w-4 text-muted-foreground'
							>
								<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
							</svg>
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>{posts.length}</div>
							<p className='text-xs text-muted-foreground'>Subidas hasta el momento</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>Contratos</CardTitle>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='h-4 w-4 text-muted-foreground'
							>
								<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
							</svg>
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>{contracts.length}</div>
							<p className='text-xs text-muted-foreground'>Subidos hasta el momento</p>
						</CardContent>
					</Card>
				</div>
			</section>
		</>
	);
}
