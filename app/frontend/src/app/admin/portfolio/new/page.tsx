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
	icon: z.instanceof(FileList).refine(files => files.length > 0, {
		message: 'La imagen es requerida',
	}),
	esName: z.string({message: 'El campo es requerido'}).min(4, {
		message: 'El Título debe tener mas de 4 caracteres.',
	}),
	enName: z.string({message: 'El campo es requerido'}).min(4, {
		message: 'El Título debe tener mas de 4 caracteres.',
	}),
	esDescription: z
		.string({message: 'El campo es requerido'})
		.min(4, {
			message: 'La descripción debe tener mas de 4 caracteres.',
		})
		.max(250, {message: 'La descripción debeter menos de 150 caracteres'}),
	enDescription: z
		.string({message: 'El campo es requerido'})
		.min(4, {
			message: 'La descripción debe tener mas de 4 caracteres.',
		})
		.max(250, {message: 'La descripción debeter menos de 150 caracteres'}),
});

export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const fileRef = form.register('icon');

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const dataFile = new FormData();
		setIsLoading(true);

		dataFile.append('youtube', 'wwww.codaltec.com');

		dataFile.append('image', values.icon[0]);
		dataFile.append('esName', values.esName);
		dataFile.append('enName', values.enName);
		dataFile.append('esDescription', values.esDescription);
		dataFile.append('enDescription', values.enDescription);

		const formDataObject: {[key: string]: FormDataEntryValue} = {};
		dataFile.forEach((value, key) => {
			formDataObject[key] = value;
		});

		console.log(formDataObject);

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}business`, {
				method: 'POST',
				body: dataFile,
			});

			setTimeout(() => {
				setIsLoading(false);
				if (response.ok) {
					toast('👍 Línea de negocio registrada con exito!');
					console.log('Archivo subido exitosamente');
					window.location.href = '/admin/portfolio';
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
						title={`Crear línea de negocio`}
						description='Agrega un nueva línea de negocio'
					/>
				</div>
				<Separator />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='icon'
							render={({field}) => (
								<FormItem>
									<FormLabel>Icono de la línea de negocio</FormLabel>
									<FormControl>
										<Input type='file' placeholder='shadcn' {...fileRef} />
									</FormControl>
									<FormDescription>Icono que aparecera para la línea de negocio.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='gap-8 md:grid md:grid-cols-2'>
							<FormField
								control={form.control}
								name='esName'
								render={({field}) => (
									<FormItem>
										<FormLabel>Título en español</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>Título que aparecera en español</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='enName'
								render={({field}) => (
									<FormItem>
										<FormLabel>Título en ingles</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>Título que aparecera en ingles</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='gap-8 md:grid md:grid-cols-2'>
							<FormField
								control={form.control}
								name='esDescription'
								render={({field}) => (
									<FormItem>
										<FormLabel>Descripción en español</FormLabel>
										<FormControl>
											<Textarea className='resize-none' placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>Descripción que aparecera en español</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='enDescription'
								render={({field}) => (
									<FormItem>
										<FormLabel>Descripción en ingles</FormLabel>
										<FormControl>
											<Textarea className='resize-none' placeholder='shadcn' {...field} />
										</FormControl>
										<FormDescription>Descripción que aparecera en ingles</FormDescription>
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
