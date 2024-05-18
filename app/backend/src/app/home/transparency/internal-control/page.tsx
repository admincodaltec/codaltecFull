import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';

export default function InternalControl() {
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title='CONTROL INTERNO' />
				<section className='container py-6 overflow-x-hidden min-w-[550px]'>
					<div className='header grid grid-cols-3 border-b border-white pb-2'>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>TÍTULO</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>FECHA</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>SOPORTE</h2>
						</div>
					</div>
					<ul className='body py-4'>
						<li className='grid grid-cols-3 p-2'>
							<div className='text-white px-4 text-center'>
								<p>Control interno Nuúmero uno</p>
							</div>
							<div className='text-white px-4 text-center'>
								<p>32/02/2024</p>
							</div>
							<div className='text-white px-4 text-center'>
								<p>nombre_archivo.pdf</p>
							</div>
						</li>
					</ul>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
