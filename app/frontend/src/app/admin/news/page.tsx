'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {NavigationMenuDemo} from '@/layouts/admin/HeaderAdmin';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {Separator} from '@/components/ui/separator';
import {useGetPosts} from '@/services/PostsServices';
import {Heading} from '@/components/ui/heading';
import {CellActions} from '@/components/admin/posts/cellActions';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
import {FaPlus} from 'react-icons/fa';
import {Posts} from '@/app/constants/data';

export default function News() {
	const {posts, isLoading, error} = useGetPosts();
	const [postsData, setPostsData] = useState<Posts[]>([]);

	useEffect(() => {
		if (posts) {
			setPostsData(posts);
		}
	}, [posts]);

	const handleDelete = (id: number) => {
		setPostsData(prev => prev.filter(slider => slider.id !== id));
	};

	return (
		<>
			<NavigationMenuDemo />
			<section className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
				<div className='flex items-start justify-between'>
					<Heading
						title={`Noticias`}
						description='Acá podras ver las noticias que estan disponibles.'
					/>

					<Link href={'/admin/news/new'} className={cn(buttonVariants({variant: 'default'}))}>
						<FaPlus className='mr-2 h-4 w-4' /> Agregar Nuevo
					</Link>
				</div>
				<Separator />
				<div className='rounded-md border'>
					<Table className='relative '>
						<TableHeader>
							<TableRow>
								<TableHead>Título</TableHead>
								<TableHead>Descripción</TableHead>
								<TableHead className='w-[100px]'>Imagen</TableHead>
								<TableHead>{''}</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{postsData.map(item => (
								<TableRow key={item.id}>
									<TableCell className='font-medium'>{item.esTitle}</TableCell>
									<TableCell>{item.esDescription}</TableCell>
									<TableCell>
										<img
											className='w-12 h-12 object-contain'
											src={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/images/${item.image}`}
											alt={item.esTitle}
										/>
									</TableCell>
									<TableCell>
										<CellActions data={item} onDelete={handleDelete} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</section>
		</>
	);
}
