import {FaCaretDown} from 'react-icons/fa';

interface CardAtentionProps {
	title: string;
	onClick: () => void;
}

const CardAtention: React.FC<CardAtentionProps> = ({title, onClick}) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button
			className='flex flex-col rounded-lg bg-[#4f4f4f] hover:scale-95 transition-transform duration-300'
			onClick={onClick}
		>
			<div className='flex justify-center items-center p-3 bg-yellow-500 rounded-t-lg w-full h-24'>
				<p className='font-bold text-3xl text-center text-white leading-[1.5rem]'>{title}</p>
			</div>
			<div className='flex flex-col justify-center items-center w-full rounded-b-lg p-3'>
				<p className='text-center text-white text-xl font-medium'>
					INGRESE <br /> AQUI
				</p>
				<FaCaretDown className='text-yellow-500 text-4xl' />
			</div>
		</button>
	);
};

export default CardAtention;
