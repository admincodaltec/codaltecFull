import HeaderHome from '@/layouts/HeaderHome';
import FinancialsSection from '@/layouts/FinancialsSection';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Estados Financieros',
};

export default function Financials() {
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title='ESTADOS FINANCIEROS' />
				<section className='container py-6 overflow-x-hidden '>
					<div className='header grid grid-cols-2 border-b border-white pb-2'>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>ESTADO FINANCIERO</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>SOPORTE</h2>
						</div>
					</div>
					<FinancialsSection />
				</section>
			</main>
			<FooterHome />
		</>
	);
}
