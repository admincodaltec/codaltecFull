import {ReactNode} from 'react';
import {GrClose} from 'react-icons/gr';

interface ModalProps {
	title: string;
	show: boolean;
	onClose: () => void;
	children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({title, show, onClose, children}) => {
	return (
		<>
			{show && (
				<div className='fixed top-0 left-0 w-full h-full bg-opacity-70 backdrop-blur-xl flex justify-center items-center z-50 overflow-y-auto'>
					<div className='relative max-w-lg min-w-[350px] rounded-lg bg-[#3c3c3c] '>
						<div className='flex justify-between items-center px-4 py-2 border-b-[1px] border-zinc-600'>
							<h4 className='text-yellow-500 text-left text-1xl font-medium'>{title}</h4>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button className='p-1' onClick={onClose}>
								<GrClose className='text-base text-zinc-500' />
							</button>
						</div>
						<div className='px-4 py-2'>{children}</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
