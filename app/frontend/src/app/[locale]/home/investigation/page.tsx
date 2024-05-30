import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import styles from '@/styles/Investigation.module.css';
import {Metadata} from 'next';
import {FaAngleRight} from 'react-icons/fa';
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
	title: 'Centro de investigación',
};

export default function Investigation() {
	const tInvestigation = useTranslations('investigation');
	return (
		<>
			<HeaderHome />
			<main>
				<BannerHeader title={tInvestigation('investigationTitle')} image='laboratory-gray.jpg' />
				<section className={`${styles.investigation__content}`}>
					<div className='container mx-auto py-6'>
						<article className='grid gap-2 items-center bg-black p-6 rounded-2xl'>
							<p className='text-white'>{tInvestigation('investigationDescription')}</p>
						</article>
					</div>
				</section>
				<section className={`${styles.investigationSecond__content}`}>
					<div className='flex flex-col gap-4 container mx-auto py-8'>
						<h2 className='text-3xl font-bold text-yellow-500 mb-2'>
							{tInvestigation('investigationTeams')}
						</h2>
						<div className='grid gap-4 items-center grid-cols-[200px_1fr]'>
							<img src='/assets/Logos/gdis.png' alt='Team of investigation CODALTEC' />
							<article className='flex flex-col items-end bg-black p-5 rounded-2xl'>
								<p className='text-white'>{tInvestigation('investigationGids')}</p>
								<a
									className='font-semibold text-yellow-500'
									href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000015930'
									target='_blank'
									rel='noopener noreferrer'
								>
									LEER MÁS...
								</a>
							</article>
						</div>
						<div className='grid gap-4 items-center grid-cols-[1fr_200px]'>
							<article className='flex flex-col items-end bg-black p-5 rounded-2xl'>
								<p className='text-white'>{tInvestigation('investigationKTEG')}</p>
								<a
									className='font-semibold text-yellow-500'
									href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000014838'
									target='_blank'
									rel='noopener noreferrer'
								>
									LEER MÁS...
								</a>
							</article>
							<img src='/assets/Logos/kge.png' alt='Team of investigation CODALTEC' />
						</div>
					</div>
				</section>
				<section className='bg-[#1A1A1A] pt-6'>
					<div className='container'>
						<h2 className='text-3xl font-bold text-center text-yellow-500'>
							{tInvestigation('investigationLaboratory')}
						</h2>
					</div>
					<img
						className='w-full h-80 object-cover my-2'
						src='/assets/laboratory.jpg'
						alt='Team of investigation CODALTEC'
					/>
					<div className='container py-4 '>
						<article className='grid gap-4 grid-cols-[1fr_30%] bg-[#2A2A2A] p-5 rounded-xl'>
							<p className='text-white text-justify'>
								{tInvestigation('investigationLaboratoryDescription')}{' '}
							</p>
							<a
								className='flex justify-end items-center text-2xl font-bold text-white leading-[24px] text-right '
								href='/assets/laboratorio.pdf'
								download
							>
								{tInvestigation('investigationMore')}
								<p className='text-5xl text-yellow-500'>
									<FaAngleRight />
								</p>
							</a>
						</article>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
