import Link from 'next/link';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Aboutus.module.css';
import {FaChevronRight} from 'react-icons/fa';
import {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';

export const metadata: Metadata = {
	title: 'Nosotros',
};

export default function Aboutus() {
	const currentLocale = useLocale();
	const tAboutUs = useTranslations('aboutUs');

	return (
		<>
			<HeaderHome />
			<main>
				<section className={styles.aboutus}>
					<div className={`${styles.aboutus__container} container mx-auto`}>
						<article className={styles.aboutus__article}>
							<h1 className='text-3xl font-bold text-center text-yellow-500 md:text-end'>
								{tAboutUs('aboutUsTitle')}
							</h1>
							<div className={styles.aboutus__article_text}>
								<p className='text-white text-base text-justify'>
									{tAboutUs('aboutUsDescription')}
								</p>
							</div>
						</article>
					</div>
				</section>
				<section className={styles.values}>
					<div className={`${styles.values__container} container mx-auto`}>
						<article>
							<h2 className='text-2xl font-bold text-yellow-500'>{tAboutUs('mision')}</h2>
							<p className='text-white text-base text-justify'>{tAboutUs('misionDescription')}</p>
						</article>
						<article>
							<h2 className='text-2xl font-bold text-yellow-500'>{tAboutUs('vision')}</h2>
							<p className='text-white text-base text-justify'>{tAboutUs('visionDescription')}</p>
						</article>
					</div>
				</section>
				<section className={styles.aboutus__end}>
					<div className={`${styles.aboutus__end_container} container mx-auto`}>
						<div className={`${styles.aboutus__menu}`}>
							<h3 className='text-2xl font-bold text-yellow-500'>{tAboutUs('moreAbout')}</h3>
							<ul className='flex flex-col gap-5 my-5'>
								<li>
									<Link
										href={`/${currentLocale}/about-us/more#nuestros-inicios`}
										className='text-white'
									>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> {tAboutUs('nuestrosInicios')}
										</h4>
										<p className='text-sm ml-5'>{tAboutUs('historiaCodaltec')}</p>
									</Link>
								</li>
								<li>
									<Link href={`/${currentLocale}/about-us/more#organigrama`} className='text-white'>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> {tAboutUs('organigrama')}
										</h4>
										<p className='text-sm ml-5'>{tAboutUs('estructura')}</p>
									</Link>
								</li>
								<li>
									<Link href={`/${currentLocale}/about-us/more#directivos`} className='text-white'>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> {tAboutUs('directivos')}
										</h4>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`${styles.aboutus__map}`}>
							<div className={`${styles.aboutus__map_sub}`}>
								<h4 className='text-lg text-end underline text-white'>
									{tAboutUs('sedePrincipal')}
								</h4>
								<iframe
									title='Sede Bogotá CODALTEC'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1965901467544!2d-74.08773822460364!3d4.6321670989583765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd0d285c2dd%3A0x986736da11b04d13!2sCra.%2038%20%2325%20B%2066%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1705935261523!5m2!1ses!2sco'
									style={{border: 0}}
									loading='lazy'
								/>
							</div>
							<div className={`${styles.aboutus__map_sub}`}>
								<h4 className='text-lg text-end underline text-white'>
									{tAboutUs('sedeVillavicencio')}
								</h4>
								<iframe
									title='Sede Villavicencio CODALTEC'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1406.9389083915705!2d-73.63589989247852!3d4.136660393849036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e095bb16fe7%3A0xad10283d31ca1f10!2sCamara%20de%20Comercio%20de%20Villavicencio!5e0!3m2!1ses!2sco!4v1705935172862!5m2!1ses!2sco'
									style={{border: 0}}
									loading='lazy'
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
