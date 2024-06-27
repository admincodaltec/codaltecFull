import HeaderHome from '@/layouts/HeaderHome';
import ContractsSection from '@/layouts/ContractsSection';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';
import {useTranslations} from 'next-intl';
import { Metadata } from 'next';
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export const metadata: Metadata = {
	title: 'Contratación',
};

export default function Contracts() {
	const tTransparencia = useTranslations('transparency');
	const tContracts = useTranslations('contracts');
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title={tTransparencia('contratacion')} />
				<section className='container'>
					<p className='text-white text-justify '>{tContracts('contractContact')}</p>
					<br />
					<p className='text-white text-justify mb-6'>{tContracts('contractManual')}</p>
					<a
						className='text-yellow-500'
						href={'/assets/Manual.pdf'}
						download={'Manual para la adquisición de bienes'}
					>
						<BsFillFileEarmarkPdfFill className='text-yellow-500 text-lg' />
					</a>
					<div className='overflow-x-scroll md:overflow-x-auto'>
						<div className='min-w-[600px] '>
							<div className='header grid grid-cols-3 border-b border-white pb-2'>
								<div className='title text-center text-white text-2xl font-semibold'>
									<h2>{tContracts('individualContract')}</h2>
								</div>
								<div className='title text-center text-white text-2xl font-semibold'>
									<h2>{tContracts('date')}</h2>
								</div>
								<div className='title text-center text-white text-2xl font-semibold'>
									<h2>{tContracts('documents')}</h2>
								</div>
							</div>
							<div className='body py-4 '>
								<ContractsSection />
							</div>
						</div>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
