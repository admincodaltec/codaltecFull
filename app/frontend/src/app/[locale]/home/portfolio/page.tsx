import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import BannerHeader from '@/components/home/BannerHeader';
import PortafolioSection from '@/layouts/PortafolioSection';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Portafolio',
};

export default function Portfolio() {
	const tPortafolio = useTranslations('portafolio');
	const tPortafolioHome = useTranslations('productsHome');
	return (
		<>
			<HeaderHome />
			<main>
				<BannerHeader title={tPortafolio('portafolioTitle')} image='products.jpg' />
				<section className={'bg-[#1A1A1A] min-h-[60vh]'}>
					<div className='container mx-auto pb-12'>
						<article className='grid gap-2 items-center grid-cols-1 py-5 md:grid-cols-[1fr_2px_300px]'>
							<h2 className='text-4xl font-bold text-yellow-400 text-center'>
								{tPortafolioHome('productos&servicios')}
							</h2>
							<span className='w-[2px] h-full bg-white' />
							<h3 className='text-lg font-semibold text-gray-500 text-center md:text-3xl'>
								{tPortafolioHome('productsLink')}
							</h3>
						</article>
						<div className='py-4'>
							<PortafolioSection />
						</div>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
