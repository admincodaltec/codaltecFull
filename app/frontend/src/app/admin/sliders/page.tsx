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
import {useGetSliders} from '@/services/SliderServices';
import {Heading} from '@/components/ui/heading';
import {CellActions} from '@/components/admin/sliders/cellActions';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
import {FaPlus} from 'react-icons/fa';
import {Slider} from '@/app/constants/data';

export default function Sliders() {
	const {sliders} = useGetSliders();
	const [sliderData, setSliderData] = useState<Slider[]>([]);

	useEffect(() => {
		if (sliders) {
			setSliderData(sliders);
		}
	}, [sliders]);

	const handleDelete = (id: number) => {
		setSliderData(prev => prev.filter(slider => slider.id !== id));
	};

	return (
		<>
			<NavigationMenuDemo />
			<section className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
				<div className='flex items-start justify-between'>
					<Heading
						title={`Sliders`}
						description='Acá podras ver los sliders que estan disponibles'
					/>

					<Link href={'/admin/sliders/new'} className={cn(buttonVariants({variant: 'default'}))}>
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
							{sliderData.map(item => (
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
