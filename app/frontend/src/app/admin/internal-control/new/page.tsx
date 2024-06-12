'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import {NavigationMenuDemo} from '@/layouts/admin/HeaderAdmin';
import {Heading} from '@/components/ui/heading';
import {Separator} from '@/components/ui/separator';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {toast} from 'sonner';
import {Loader2} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';

const formSchema = z.object({
	file:
		typeof window !== 'undefined'
			? z.instanceof(FileList).refine(files => files.length > 0, {
					message: 'El archivo es requerida',
			  })
			: z.any(),
	name: z.string({message: 'El campo es requerido'}).min(4, {
		message: 'El Título debe tener más de 4 caracteres.',
	}),
	date: z.string({message: 'El campo es requerido'}).min(2, {
		message: 'El Título debe tener más de 4 caracteres.',
	}),
});

export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const fileRef = form.register('file');

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const dataFile = new FormData();
		setIsLoading(true);

		dataFile.append('file', values.file[0]);
		dataFile.append('name', values.name);
		dataFile.append('date', values.date);

		const formDataObject: {[key: string]: FormDataEntryValue} = {};
		dataFile.forEach((value, key) => {
			formDataObject[key] = value;
		});

		console.log(formDataObject);

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}internal-control`, {
				method: 'POST',
				body: dataFile,
			});

			setTimeout(() => {
				setIsLoading(false);
				if (response.ok) {
					toast('👍 Archivo de control interno registrados con exito!');
					console.log('Archivo subido exitosamente');
					window.location.href = '/admin/internal-control';
				} else {
					toast('❌ Se produjo un error al cargar el registro');
					console.error('Error en la subida del archivo');
				}
			}, 2000);
		} catch (error) {
			toast('❌ Se produjo un error ');
			console.error('Error en la solicitud', error);
		}
	}

	return (
		<>
			<NavigationMenuDemo />
			<div className='flex-1 space-y-4 p-4 pt-6 md:p-8'>
				<div className='flex items-start justify-between'>
					<Heading
						title={`Crear un archivo de control interno`}
						description='Agrega un nuevo registro para control interno'
					/>
				</div>
				<Separator />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='file'
							render={({field}) => (
								<FormItem>
									<FormLabel>
										Archivos (.zip .rar .pdf) para el registro nuevo de control interno
									</FormLabel>
									<FormControl>
										<Input type='file' placeholder='shadcn' {...fileRef} />
									</FormControl>
									<FormDescription>Archivos que aparecerán para poder descargar.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='gap-8 md:grid md:grid-cols-2'>
							<FormField
								control={form.control}
								name='name'
								render={({field}) => (
									<FormItem>
										<FormLabel>Nombre del registro</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>
											Título que aparecera en la tabla de control interno
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='date'
								render={({field}) => (
									<FormItem>
										<FormLabel>Fecha del registro</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>
											Fecha que aparecera en la tabla de control interno
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						{isLoading ? (
							<Button disabled>
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
								Cargando...
							</Button>
						) : (
							<Button type='submit'>Submit</Button>
						)}
					</form>
				</Form>
			</div>
		</>
	);
}
