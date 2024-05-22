import {Metadata} from 'next';
import HeaderHome from '@/layouts/HeaderHome';
import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Posts.module.css';
import PostsSection from '@/layouts/PostsSection';

export const metadata: Metadata = {
	title: 'Noticias',
	description:
		'Últimas noticias y acontecimientos de interés nacional e internacional referentes a CODALTEC.',
};

export default function Posts() {
	return (
		<>
			<HeaderHome />
			<main>
				<BannerHeader title='NOTICIAS' image='newsBanner.jpg' />
				<section className={`${styles.portfolio__content} min-h-[60vh]`}>
					<div className='container mx-auto'>
						<article className='grid gap-2 items-center grid-cols-[1fr_2px_300px] py-5'>
							<h2 className='text-xl font-bold text-white'>
								BIENVENIDOS A NUESTRA SESION DE NOTICIAS, AQUI ENCONTRARAS LOS ULTIMOS
								ACONTECIMIENTOS DE INTERES, NACIONAL O INTERNACIONAL REFERENTES A CODALTEC
							</h2>
							<span className='w-[2px] h-full bg-white' />
						</article>
						<PostsSection ulClassName={`${styles.posts__content}`} />
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
