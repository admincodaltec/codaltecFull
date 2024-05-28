import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import styles from '@/styles/Investigation.module.css';
import {Metadata} from 'next';
import {FaAngleRight} from 'react-icons/fa';

export const metadata: Metadata = {
	title: 'Centro de investigación',
};

export default function Investigation() {
	return (
		<>
			<HeaderHome />
			<main>
				<BannerHeader title='CENTRO DE INVESTIGACIÓN' image='laboratory-gray.jpg' />
				<section className={`${styles.investigation__content}`}>
					<div className='container mx-auto py-6'>
						<article className='grid gap-2 items-center bg-black p-6 rounded-2xl'>
							<p className='text-white'>
								CODALTEC es una entidad de naturaleza civil, de derecho privado sin ánimo de lucro,
								adscrita al Ministerio de Defensa Nacional de Colombia y miembro del Grupo Social y
								Empresarial de la Defensa - GSED, CODALTEC está dedicada a la generación de
								tecnologías duales y conocimiento para el sector defensa y seguridad de Colombia
								mediante proyectos de CTeI e investigación aplicada en dos grandes líneas de
								investigación Tecnologías de software y simulación; y Sensores y radares. CODALTEC
								fue reconocida como Centro de Investigación por Resolución No. 0984 de 2018 de
								COLCIENCIAS y actualmente por Resolución 2289 de 2021 de Minciencias, reafirmando
								como actor del SNCTeI su objetivo de fortalecer las capacidades científico,
								tecnológicas del Sector Defensa y civil con tecnologías de aplicación dual. Su
								actividad principal como Centro de Investigación es la Investigación Aplicada,
								complementando con actividades de Desarrollo tecnológico, formación de capital
								humano, colaboración en actividades de CTeI y divulgación científica. Como
								resultados cuenta con productos como: artículos de investigación, capítulos de
								libro, documentos de trabajo, diseños industriales, prototipos tecnológicos, signos
								distintivos, software, consultorías, eventos, informes de investigación, contenido
								impreso/multimedia/virtual, cursos de corta duración, trabajos dirigidos/tutorias y
								proyectos de I+D+i.
							</p>
						</article>
					</div>
				</section>
				<section className={`${styles.investigationSecond__content}`}>
					<div className='flex flex-col gap-4 container mx-auto py-8'>
						<h2 className='text-3xl font-bold text-yellow-500 mb-2'>GRUPOS DE INVESTIGACIÓN</h2>
						<div className='grid gap-4 items-center grid-cols-[200px_1fr]'>
							<img src='/assets/Logos/gdis.png' alt='Team of investigation CODALTEC' />
							<article className='flex flex-col items-end bg-black p-5 rounded-2xl'>
								<p className='text-white'>
									GIDS es el Grupo de Investigación y Desarrollo de Sensores dedicado a desarrollar
									soluciones a nivel de hardware y software para la industria civil y militar
									mediante tecnologías novedosas de sensores que generen un impacto positivo a nivel
									región y país. Sus líneas de trabajo están enmarcadas en Sensores eléctricos;
									Radiofrecuencia y radar; Procesado digital de señales y análisis de datos y
									Tecnologías convergentes para el medio ambiente y la agricultura.
								</p>
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
								<p className='text-white'>
									KTEG es el Grupo Knowledge Technology Engineering quienes trabajan en el área de
									modelado y simulación generando conocimiento aplicable por la industria y academia
									colombiana. Investigación basada en la innovación de productos y tecnologías
									utilizadas en el sector defensa. Sus líneas de investigación abarcan entre otros:
									Software y Hardware para Simulación; Modelado y Simulación de Sistemas,
									Mundos/Escenarios Virtuales
								</p>
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
							LABORATORIO ESPECIALIZADO EN SENSORES Y RADIOFRECUENCIA
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
								CODALTEC cuenta en sus oficinas de Villavicencio con el Laboratorio Especializado en
								Sensores y Radiofrecuencia, donde se tienen instrumentos de medición de altas
								prestaciones como Osciloscopios, Analizadores de espectro portátiles y de gabinete,
								Generadores de Señales, Analizadores lógicos, Drones terrestres y aéreos, cámaras
								multiespectrales, sensores, y una gran variedad de Antenas con las que se estudian y
								desarrollan aplicaciones del espectro electromagnético. Este laboratorio
								especializado es la cuna de varios desarrollos de la Corporación en integración de
								sensores y uso del espectro, en proyectos como el Inhibidor de drones, Radar de
								Protección Perimetral, Sistemas de control de acceso y monitoreo, Centros de mando y
								Control entre otros. De igual forma el laboratorio está disponible para nuestros
								aliados, desarrollando también proyectos en I+D+i, trabajos de grado, pasantías y
								prácticas académicas para las instituciones de educación aliadas
							</p>
							<a
								className='flex justify-end items-center text-2xl font-bold text-white leading-[24px] text-right '
								href='/assets/laboratorio.pdf'
								download
							>
								CONOZCA MÁS DE NUESTRO LABORATORIO
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
