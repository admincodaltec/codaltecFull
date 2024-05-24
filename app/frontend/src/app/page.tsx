import Image from 'next/image';
import FooterCard from '@/components/home/FooterCard';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

export default function Welcome() {
	return (
		<div className='flex flex-col justify-between w-screen h-screen'>
			<header>
				<section className='flex justify-center px-0 py-10 bg-black/80 '>
					<div className='block md:hidden'>
						<Image
							src='/assets/Logos/Codaltec_B.svg'
							width={200}
							height={100}
							alt='CODALTEC | Corporación de Alta Tecnología Logo'
						/>
					</div>
					<div className='grid grid-cols-6 gap-5 container mx-auto '>
						<div className='flex items-center col-span-4'>
							<h1 className='text-2xl text-white tracking-wide'>
								SELECCIONE SU IDIOMA / SELECT YOUR LANGUAGE
							</h1>
							<i className='fa-solid fa-caret-right' />
						</div>
						<div className='flex gap-3 items-center justify-evenly col-span-2'>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button className='flex flex-col justify-center items-center w-48 bg-transparent outline-none border-none cursor-pointer'>
								<h4 className='text-lg text-yellow-600 tracking-[.35rem]'>BIENVENIDO</h4>
								<Image
									className='my-2'
									src='/assets/Logos/Codaltec_Icono.svg'
									width={100}
									height={60}
									alt='CODALTEC | Corporación de Alta Técnologia Logo'
								/>
								<h3 className='text-xl text-white'>ESPAÑOL</h3>
							</button>
							<span className='w-0.5 h-[100%] bg-white' />
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button className='flex flex-col justify-center items-center w-48 bg-transparent outline-none border-none cursor-pointer'>
								<h4 className='text-lg text-yellow-600 tracking-[.35rem]'>WELCOME</h4>
								<Image
									className='my-2'
									src='/assets/Logos/Codaltec_Icono.svg'
									width={100}
									height={60}
									alt='CODALTEC | Corporación de Alta Técnologia Logo'
								/>
								<h3 className='text-xl text-white'>ENGLISH</h3>
							</button>
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
					<div className='flex justify-around items-center container mx-auto '>
						<FooterCard
							title={'CONTACTO'}
							content={'Movil: +57 300 639 8324'}
							title1={'EMAIL'}
							content1={'info@codaltec.com'}
						/>
						<FooterCard
							title={'HORARIO DE ATENCIÓN'}
							content={'Lunes a Viernes 8:00 a. m. - 12:00 p. m. 1:00 p. m. - 5:00 p. m.'}
						/>
						<FooterCard
							title={'DIRECCIÓN'}
							content={
								<>
									<p>Oficina Principal Cra 50 # 15 - 35, Bogotá - Colombia</p> <br />{' '}
									<p>
										Oficina Villavicencio Avenida 40 No. 24A - 71 Tercer piso, Villavicencio - Meta
									</p>
								</>
							}
						/>
						<FooterCard
							title={'SIGUENOS'}
							content={
								<div className='flex gap-2'>
									<a className='text-xl' href='/' target='_blank' rel='noreferrer'>
										<FaXTwitter />
									</a>
									<a className='text-xl' href='/' target='_blank' rel='noreferrer'>
										<FaFacebook />
									</a>
									<a className='text-xl' href='/' target='_blank' rel='noreferrer'>
										<FaInstagram />
									</a>
									<a className='text-xl' href='/' target='_blank' rel='noreferrer'>
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
