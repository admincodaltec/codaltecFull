import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import CardTransparency from '@/components/home/CardTransparency';
import {FaCaretDown} from 'react-icons/fa';
import styles from '@/styles/Transparency.module.css';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Transparencia',
};

export default function Transparency() {
	const tTransparencia = useTranslations('transparency');
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[60vh]`}>
				<BannerHeader title={tTransparencia('transparencyTitle')} />
				<section className='container py-6'>
					<article className='p-4 bg-black rounded-lg'>
						<p className='text-white'>{tTransparencia('transparencyDescription')}</p>
					</article>
					<article className='flex gap-5 items-center my-8'>
						<h3 className='font-bold text-2xl text-white'>{tTransparencia('conoceMas')}</h3>
						<FaCaretDown className='text-yellow-500 text-2xl' />
						<span className='block w-3/4 h-1 bg-[#4f4f4f]' />
					</article>
					<div className='grid gap-6 grid-cols-3 justify-center px-12'>
						<CardTransparency
							link='/home/transparency/contracts'
							title={tTransparencia('contratacion')}
							text={tTransparencia('contratacionDescription')}
						/>
						<CardTransparency
							link='/home/transparency/internal-control'
							title={tTransparencia('control')}
							text={tTransparencia('controlDescription')}
						/>
						<CardTransparency
							link='/home/transparency/financials'
							title={tTransparencia('financiera')}
							text={tTransparencia('financieraDescription')}
						/>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
