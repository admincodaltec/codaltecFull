import Link from 'next/link';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Home.module.css';
import {FaChevronRight} from 'react-icons/fa';
import PostsSection from '@/layouts/PostsSection';
import SlidersSection from '@/layouts/SlidersSection';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';
import {useLocale} from 'next-intl';

export const metadata: Metadata = {
	title: 'Inicio',
};

export default function Home() {
	const tProducts = useTranslations('productsHome');
	const tPosts = useTranslations('postHome');
	const currentLocale = useLocale();
	return (
		<>
			<HeaderHome />
			<main>
				<section className='h-screen '>
					<SlidersSection />
				</section>
				<section className={styles.bussines}>
					<div className={`${styles.bussines__container} container mx-auto h-full`}>
						<div className={styles.bussines__container_left}>
							<h2 className={`${styles} text-3xl font-bold text-yellow-500`}>
								{tProducts('productos&servicios')}
							</h2>
							<article className={`${styles} text-lg text-white text-justify`}>
								{tProducts('productsDescription')}
							</article>
							<Link
								className='flex items-center justify-end text-white text-2xl text-end'
								href={'/home'}
							>
								{tProducts('productsLink')} <FaChevronRight className='text-yellow-500 text-4xl' />
							</Link>
						</div>
						<div className='flex justify-center items-center w-full h-full'>
							<img
								className='object-contain'
								src={currentLocale === 'en' ? '/assets/lines EN.png' : 'assets/lines ES.png'}
								alt='Líneas de negocio CODALTEC'
							/>
						</div>
					</div>
				</section>
				<section className={styles.posts}>
					<div className={`${styles.posts__container} container mx-auto`}>
						<div>
							<h2 className={'text-6xl font-bold text-yellow-500'}>
								<span className='text-white text-4xl'>{tPosts('postHomeTitle1')}</span>
								<br />
								{tPosts('postHomeTitle2')}
							</h2>
							<Link className='text-white underline' href={'/es/posts'}>
								{tPosts('postLink')}
							</Link>
						</div>
						<PostsSection ulClassName={styles.bussines__container_right} maxPostsToShow={3} />
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
