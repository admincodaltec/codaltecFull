interface SliderItemProps {
	image: string;
	title: string;
	description: string;
}

const SliderItem: React.FC<SliderItemProps> = ({image, title, description}) => {
	return (
		<div className='h-screen w-full relative pt-10 pb-24'>
			<div className='z-[2]  absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-100' />
			<img
				className='absolute top-0 left-0 w-full h-full object-cover z-[1]'
				src={`${image}`}
				alt={title}
			/>
			<div className='relative h-full flex container justify-end items-end z-[3]'>
				<article className='max-w-sm'>
					<h1 className='text-yellow-500 text-end text-6xl font-extrabold tracking-wide'>
						CODALTEC
					</h1>
					<span className='block h-1 w-96 bg-yellow-500 my-3' />
					<h3 className='text-white leading-[1] text-2xl font-normal text-end mb-2 min-h-[48px]'>
						{title}
					</h3>
				</article>
			</div>
		</div>
	);
};

export default SliderItem;
