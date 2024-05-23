import HeaderHome from '@/layouts/HeaderHome';
import ContractsSection from '@/layouts/ContractsSection';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Contratos',
};

export default function Contracts() {
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title='CONTRATACIÓN' />
				<section className='container'>
					<p className='text-white text-justify mb-6'>
						¡Bienvenido/a a nuestra sección de contratos! Aquí podrás acceder y descargar fácilmente
						los contratos organizados por año. ¿Necesitas algo específico? No dudes en enviarnos un
						correo electrónico con los detalles del contrato que buscas a{' '}
						<span className='text-yellow-500'>info@codaltec.com.</span> Estamos aquí para ayudarte.
						¡Explora y descarga con confianza!
					</p>
					<div className='header grid grid-cols-3 border-b border-white pb-2'>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>NOMBRE</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>AÑO</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>SOPORTE - DESCARGAR</h2>
						</div>
					</div>
					<div className='body py-4 min-w-[550px] overflow-x-hidden'>
						<ContractsSection />
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
