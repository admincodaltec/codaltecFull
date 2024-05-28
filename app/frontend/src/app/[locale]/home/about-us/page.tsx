import Link from 'next/link';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import styles from '@/styles/Aboutus.module.css';
import {FaChevronRight} from 'react-icons/fa';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Nosotros',
};

export default function Aboutus() {
	return (
		<>
			<HeaderHome />
			<main>
				<section className={styles.aboutus}>
					<div className={`${styles.aboutus__container} container mx-auto`}>
						<article className={styles.aboutus__article}>
							<h1 className='text-3xl font-bold text-end text-yellow-500'>¿QUIENES SOMOS?</h1>
							<div className={styles.aboutus__article_text}>
								<p className='text-white text-base text-justify'>
									Somos una Entidad Pública, de Derecho Privado, Sin Ánimo de Lucro, cuyo objeto
									social es el desarrollo, promoción y realización de actividades de ciencia,
									tecnología e innovación.
								</p>
							</div>
						</article>
					</div>
				</section>
				<section className={styles.values}>
					<div className={`${styles.values__container} container mx-auto`}>
						<article>
							<h2 className='text-2xl font-bold text-yellow-500'>MISIÓN</h2>
							<p className='text-white text-base text-justify'>
								Disminuir la brecha tecnológica del País en la Industria del Sector Defensa a través
								de la apropiación y generación de conocimiento, el desarrollo tecnológico y mediante
								la integración del sector productivo público y Privado, las universidades y el
								estado. Todo lo anterior con proyección social para el desarrollo de tecnologías
								duales, que potencien la producción tecnológica nacional y territorial
							</p>
						</article>
						<article>
							<h2 className='text-2xl font-bold text-yellow-500'>VISIÓN</h2>
							<p className='text-white text-base text-justify'>
								Ser reconocida como gestora de la disminución de la brecha tecnológica de la
								industria del Sector Defensa, convirtiéndose en la principal proveedora de
								soluciones en tecnología para este, buscando ocupar una posición de importancia en
								el mercado Latinoamericano.
							</p>
						</article>
					</div>
				</section>
				<section className={styles.aboutus__end}>
					<div className={`${styles.aboutus__end_container} container mx-auto`}>
						<div className={`${styles.aboutus__menu}`}>
							<h3 className='text-2xl font-bold text-yellow-500'>MÁS DE NOSTROS</h3>
							<ul className='flex flex-col gap-5 my-5'>
								<li>
									<Link href={'/home/about-us/more#nuestros-inicios'} className='text-white'>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> NUESTROS INICIOS
										</h4>
										<p className='text-sm ml-5'>Historia de CODALTEC</p>
									</Link>
								</li>
								<li>
									<Link href={'/home/about-us/more#organigrama'} className='text-white'>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> ORGANIGRAMA DE CODALTEC
										</h4>
										<p className='text-sm ml-5'>Estructura interna de CODALTEC</p>
									</Link>
								</li>
								<li>
									<Link href={'/home/about-us/more#directivos'} className='text-white'>
										<h4 className='flex items-center text-xl font-semibold'>
											<FaChevronRight className='text-yellow-500' /> DIRECTIVOS
										</h4>
									</Link>
								</li>
							</ul>
						</div>
						<div className={`${styles.aboutus__map}`}>
							<div className={`${styles.aboutus__map_sub}`}>
								<h4 className='text-lg text-end underline text-white'>
									BOGOTÁ (Carrera 38 No. 25B - 27 Pisos 3 - 4)
								</h4>
								<iframe
									title='Sede Bogotá CODALTEC'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1965901467544!2d-74.08773822460364!3d4.6321670989583765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd0d285c2dd%3A0x986736da11b04d13!2sCra.%2038%20%2325%20B%2066%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1705935261523!5m2!1ses!2sco'
									style={{border: 0}}
									loading='lazy'
								/>
								;
							</div>
							<div className={`${styles.aboutus__map_sub}`}>
								<h4 className='text-lg text-end underline text-white'>
									VILLAVICENCIO (Avenida 40 No. 24A - 71)
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
