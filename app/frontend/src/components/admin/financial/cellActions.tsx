import {AlertModal} from '../modal/alertModal';
import {Button} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {toast} from 'sonner';
import {useState} from 'react';
import {IFinancial} from '@/app/constants/data';
import {SlOptions} from 'react-icons/sl';

interface IcellActionsProps {
	data: IFinancial;
	onDelete: (id: number) => void;
}

export const CellActions: React.FC<IcellActionsProps> = ({data, onDelete}) => {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);

	const onConfirm = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/financial/${data.id}`, {
				method: 'DELETE',
			});
			if (!response.ok) {
				throw new Error('Failed to delete the slider');
			}
			onDelete(data.id);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
			setOpen(false);
			toast('👍 Registro eleminado con exito!');
		}
	};

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={onConfirm}
				loading={loading}
			/>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<span className='sr-only'>Open menu</span>
						<SlOptions className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Opciones</DropdownMenuLabel>
					<DropdownMenuItem>Actualizar</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setOpen(true)}>Eliminar</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};
