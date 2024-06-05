import HeaderHome from '@/layouts/HeaderHome';
import InternalsSection from '@/layouts/InternalsSection';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Control Interno',
};

export default function InternalControl() {
	const tInternal = useTranslations('controlInterno');
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title={tInternal('controlTitle')} />
				<section className='container py-6 overflow-x-hidden min-w-[550px]'>
					<div className='header grid grid-cols-3 border-b border-white pb-2'>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>{tInternal('title')}</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>{tInternal('controlDate')}</h2>
						</div>
						<div className='title text-center text-white text-2xl font-semibold'>
							<h2>{tInternal('soport')}</h2>
						</div>
					</div>
					<InternalsSection />
				</section>
			</main>
			<FooterHome />
		</>
	);
}
