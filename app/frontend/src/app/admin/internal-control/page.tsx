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
import {useGetInternalControl} from '@/services/TransparencyServices';
import {Heading} from '@/components/ui/heading';
import {CellActions} from '@/components/admin/internalControl/cellActions';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
import {CiFileOn} from 'react-icons/ci';
import {FaPlus} from 'react-icons/fa';
import {IInternalControl} from '@/app/constants/data';

export default function InternalContronl() {
	const {internalsControl, isLoading, error} = useGetInternalControl();
	const [contractsData, setContractsData] = useState<IInternalControl[]>([]);

	useEffect(() => {
		if (internalsControl) {
			setContractsData(internalsControl);
		}
	}, [internalsControl]);

	const handleDelete = (id: number) => {
		setContractsData(prev => prev.filter(slider => slider.id !== id));
	};

	return (
		<>
			<NavigationMenuDemo />
			<section className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
				<div className='flex items-start justify-between'>
					<Heading
						title={`Control Interno`}
						description='Acá podras ver los archivos del control interno que estan disponibles.'
					/>

					<Link
						href={'/admin/internal-control/new'}
						className={cn(buttonVariants({variant: 'default'}))}
					>
						<FaPlus className='mr-2 h-4 w-4' /> Agregar Nuevo
					</Link>
				</div>
				<Separator />
				<div className='rounded-md border'>
					<Table className='relative '>
						<TableHeader>
							<TableRow>
								<TableHead>Nombre</TableHead>
								<TableHead>Fecha</TableHead>
								<TableHead className='w-[100px]'>Documentos Adjuntos</TableHead>
								<TableHead>{''}</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{contractsData.map(item => (
								<TableRow key={item.id}>
									<TableCell className='font-medium'>{item.name}</TableCell>
									<TableCell>{item.date}</TableCell>
									<TableCell>
										<a
											className='w-10 h-10'
											href={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/documents/${item.file}`}
											download={item.file}
										>
											<CiFileOn />
										</a>
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