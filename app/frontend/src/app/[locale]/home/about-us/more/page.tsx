import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import DirectivesItem from '@/components/home/DirectivesItems';
import styles from '@/styles/Aboutus.module.css';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Más de nosotros',
};

export default function AboutusMore() {
	const tAboutUs = useTranslations('aboutUs');
	const tMoreAboutUs = useTranslations('moreAboutUs');
	return (
		<>
			<HeaderHome />
			<main className={styles.moreabout__page}>
				<section className={`${styles} pt-14`} id='nuestros-inicios'>
					<div className={styles.moreabout__page_header}>
						<div className={`${styles.moreabout__page_container} container mx-auto`}>
							<h2 className='text-2xl text-yellow-500 font-semibold'>
								{tAboutUs('nuestrosInicios')}
							</h2>
						</div>
					</div>
					<article className='container mx-auto py-5'>
						<p className='text-white text-sm text-justify'>{tMoreAboutUs('iniciosDescription')}</p>
					</article>
				</section>
				<section className='moreAbout__section' id='organigrama'>
					<div className={styles.moreabout__page_header}>
						<div className={`${styles.moreabout__page_container} container mx-auto`}>
							<h2 className='text-2xl text-yellow-500 font-semibold'>{tAboutUs('organigrama')}</h2>
						</div>
					</div>
					<picture className='flex justify-center py-5 container mx-auto'>
						<Image
							src='/assets/organigrama_codaltec.png'
							alt='Organigrama de CODALTEC'
							width={900}
							height={500}
						/>
					</picture>
				</section>
				<section className='moreAbout__section' id='directivos'>
					<div className={styles.moreabout__page_header}>
						<div className={`${styles.moreabout__page_container} container mx-auto`}>
							<h2 className='text-2xl text-yellow-500 font-semibold'>{tAboutUs('directivos')}</h2>
						</div>
					</div>
					<ul className={`${styles.moreabout__page_directives} container mx-auto py-5`}>
						<DirectivesItem
							name={'CR NILSSEN JANETH GUTIÉRREZ SUÁREZ'}
							position={'Gerente General'}
							address={'Carrera 38 No. 25B - 27 Pisos 3 - 4'}
							city={'Bogotá D.C. Colombia'}
						/>
						<DirectivesItem
							name={'MY GUSTAVO ANDRÉS GONZALEZ CASTAÑEDA'}
							position={'Director Dirección de Producción y Desarrollo'}
							address={'Carrera 38 No. 25B - 27 Pisos 3 - 4'}
							city={'Bogotá D.C. Colombia'}
						/>
						<DirectivesItem
							name={'CT IVAN CAMILO CALIXTO RODRIGUEZ'}
							position={'Director Comercial'}
							address={'Carrera 38 No. 25B - 27 Pisos 3 - 4'}
							city={'Bogotá D.C. Colombia'}
						/>
						<DirectivesItem
							name={'YOLANDA PARRA GUACANEME'}
							position={'Directora Dirección de Inventigación'}
							address={'Avenida 40 No. 24A - 71'}
							city={'Villavicencio - Meta'}
						/>
						<DirectivesItem
							name={'GABRIEL ANDRES RUIZ MORALES'}
							position={'Director Administrativo y Financiera'}
							address={'Carrera 38 No. 25B - 27 Pisos 3 - 4'}
							city={'Bogotá D.C. Colombia'}
						/>
					</ul>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
