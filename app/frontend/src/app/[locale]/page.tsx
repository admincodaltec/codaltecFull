import Link from 'next/link';
import Image from 'next/image';
import FooterCard from '@/components/home/FooterCard';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

export default function Welcome() {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<header>
				<section className={`flex justify-center px-0 py-10 bg-black/80`}>
					<div className='grid grid-cols-1 gap-5 container mx-auto md:grid-cols-6'>
						<div className='flex col-auto items-center md:col-span-4'>
							<h1 className='text-lg text-center text-white tracking-wide md:text-2xl md:text-left'>
								SELECCIONE SU IDIOMA / SELECT YOUR LANGUAGE
							</h1>
							<i className='fa-solid fa-caret-right' />
						</div>
						<div className='flex flex-col gap-3 items-center justify-evenly md:flex-row'>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<Link
								href={'/es/home/home'}
								className='flex flex-col justify-center items-center w-48 bg-transparent outline-none border-none cursor-pointer'
							>
								<h4 className='text-lg text-yellow-600 tracking-[.35rem]'>BIENVENIDO</h4>
								<Image
									className='my-2'
									src='/assets/Logos/Codaltec_Icono.svg'
									width={100}
									height={60}
									alt='CODALTEC | Corporación de Alta Técnologia Logo'
								/>
								<h3 className='text-xl text-white'>ESPAÑOL</h3>
							</Link>
							<span className='w-0.5 h-[100%] bg-white' />
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<Link
								href={'/en/home/home'}
								className='flex flex-col justify-center items-center w-48 bg-transparent outline-none border-none cursor-pointer'
							>
								<h4 className='text-lg text-yellow-600 tracking-[.35rem]'>WELCOME</h4>
								<Image
									className='my-2'
									src='/assets/Logos/Codaltec_Icono.svg'
									width={100}
									height={60}
									alt='CODALTEC | Corporación de Alta Técnologia Logo'
								/>
								<h3 className='text-xl text-white'>ENGLISH</h3>
							</Link>
						</div>
					</div>
				</section>
			</header>

			<main>
				<video
					className='absolute top-0 left-0 h-screen w-screen object-cover z-[-1]'
					src={'/assets/homeTranslate.mp4'}
					muted
					autoPlay
					loop
					typeof='video/mp4'
				/>
			</main>

			<footer>
				<section className='flex justify-center px-0 py-5 bg-black/80'>
					<div className='flex flex-col justify-around items-center container mx-auto md:flex-row'>
						<FooterCard
							classStyles='hidden md:flex'
							title={'CONTACTO'}
							content={'Movil: +57 300 639 8324'}
							title1={'EMAIL'}
							content1={'info@codaltec.com'}
						/>
						<FooterCard
							classStyles='hidden md:flex'
							title={'HORARIO DE ATENCIÓN'}
							content={'Lunes a Viernes 8:00 a. m. - 12:00 p. m. 1:00 p. m. - 5:00 p. m.'}
						/>
						<FooterCard
							classStyles='hidden md:flex'
							title={'DIRECCIÓN'}
							content={
								<>
									<p>Oficina Principal: Bogotá (Carrera 38 No. 25B - 27 Pisos 3 - 4)</p> <br />{' '}
									<p>Oficina Secundaria: Villavicencio (Avenida 40 No. 24A - 71 Piso 3)</p>
								</>
							}
						/>
						<FooterCard
							title={'SIGUENOS'}
							content={
								<div className='flex gap-2'>
									<a
										className='text-xl'
										href='https://x.com/Codaltec/'
										target='_blank'
										rel='noreferrer'
									>
										<FaXTwitter />
									</a>
									<a
										className='text-xl'
										href='https://www.facebook.com/codaltec/'
										target='_blank'
										rel='noreferrer'
									>
										<FaFacebook />
									</a>
									<a
										className='text-xl'
										href='https://www.instagram.com/codaltec/'
										target='_blank'
										rel='noreferrer'
									>
										<FaInstagram />
									</a>
									<a
										className='text-xl'
										href='https://www.youtube.com/@CODALTEC_Corp/videos'
										target='_blank'
										rel='noreferrer'
									>
										<FaYoutube />
									</a>
								</div>
							}
						/>
						<FooterCard
							classStyles='border-r-0 border-transparent'
							content={
								<>
									<Image
										className='my-2'
										width={200}
										height={40}
										src={'/assets/Logos/MINDEFENSA.svg'}
										alt='Ministerio de Defensa Nacional de Colombia'
										style={{objectFit: 'contain'}}
									/>
									<Image
										className='my-2'
										width={200}
										height={40}
										src={'/assets/Logos/GESED_Blanco.svg'}
										alt='Grupo Social y Empresarial de la Defensa GESED'
										style={{objectFit: 'contain'}}
									/>
								</>
							}
						/>
					</div>
				</section>
			</footer>
		</div>
	);
}
