import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import DirectivesItem from '@/components/home/DirectivesItems';
import styles from '@/styles/Aboutus.module.css';
import Image from 'next/image';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Más de nosotros',
};

export default function AboutusMore() {
	return (
		<>
			<HeaderHome />
			<main className={styles.moreabout__page}>
				<section className={`${styles} pt-14`} id='nuestros-inicios'>
					<div className={styles.moreabout__page_header}>
						<div className={`${styles.moreabout__page_container} container mx-auto`}>
							<h2 className='text-2xl text-yellow-500 font-semibold'>NUESTROS INICIOS</h2>
						</div>
					</div>
					<article className='container mx-auto py-5'>
						<p className='text-white text-sm text-justify'>
							La Corporación de Alta Tecnología para la Defensa - CODALTEC, nace de la necesidad
							Sector Defensa de promover el desarrollo de capacidades en áreas tecnológicas para
							crear sus propias soluciones, apoyando el ambiente operacional de la Fuerza Pública y
							el sistema productivo del país. Es una entidad Pública, de Derecho Privado, Sin Ánimo
							de Lucro, cuyo objeto social es el desarrollo, promoción y realización de actividades
							de ciencia, tecnología e innovación. Fue creada el 7 de diciembre de 2012 y sus
							Miembros Fundadores fueron: El Ministerio de Defensa Nacional, la Industria Militar
							Colombiana - INDUMIL, la Corporación de la Industria Aeronáutica Colombiana - CIAC
							S.A, la Gobernación de Meta y la Alcaldía de Villavicencio. CODALTEC Está comprometida
							con el desarrollo de proyectos de I+D+i que le permitan a Colombia obtener las
							capacidades necesarias para la creación de un nuevo tejido industrial basado en el
							conocimiento y en la tecnología, capaz de posicionar al Sector Defensa como actor
							principal para el desarrollo de la economía colombiana a través de la inversión en
							educación e innovación. CODALTEC inició con dos apuestas SIMULACIÓN y SENSORES, que
							dentro de ellos se destacan; Simulador para Aeronave Remotamente Tripulado – SIMART,
							Simulador para el Vehículo Blindado de Transporte de Tropa Ligero - MARKAB, Simulador
							para Avión Monomotor Tipo Regional / Utilitario, Turbohélice – SIMAER, Simulador
							Sistema aéreo no tripulado para maniobra terrestre tipo RAVEN, Sistema Radar, Surface
							Intrusion Detection Radar - SINDER® y Sistema TADER®, CODALTEC fue reconocido como
							Centro Autónomo de Investigación en septiembre de 2018 según Resolución No. 0984 de
							2018 de COLCIENCIAS. Esto nos hace actores del Sistema Nacional de Ciencia Tecnología
							e Innovación de Colombia, reafirmando nuestro objetivo de fortalecer las capacidades
							científico, tecnológicas del Sector Defensa y civil con tecnologías de aplicación
							dual.
						</p>
					</article>
				</section>
				<section className='moreAbout__section' id='organigrama'>
					<div className={styles.moreabout__page_header}>
						<div className={`${styles.moreabout__page_container} container mx-auto`}>
							<h2 className='text-2xl text-yellow-500 font-semibold'>ORGANIGRAMA CODALTEC</h2>
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
							<h2 className='text-2xl text-yellow-500 font-semibold'>DIRECTIVOS</h2>
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
