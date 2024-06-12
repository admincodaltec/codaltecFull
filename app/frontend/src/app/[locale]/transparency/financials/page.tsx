import HeaderHome from '@/layouts/HeaderHome';
import FinancialsSection from '@/layouts/FinancialsSection';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Estados Financieros',
};

export default function Financials() {
	const tTransparencia = useTranslations('transparency');
	const tFinancial = useTranslations('financial');
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title={tTransparencia('financiera')} />
				<section className='container py-6 overflow-x-hidden '>
					<div className='overflow-x-scroll md:overflow-x-auto'>
						<div className='min-w-[600px] '>
							<div className='header grid grid-cols-2 border-b border-white pb-2'>
								<div className='title text-center text-white text-2xl font-semibold'>
									<h2>{tFinancial('title')}</h2>
								</div>
								<div className='title text-center text-white text-2xl font-semibold'>
									<h2>{tFinancial('download')}</h2>
								</div>
							</div>
							<FinancialsSection />
						</div>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
