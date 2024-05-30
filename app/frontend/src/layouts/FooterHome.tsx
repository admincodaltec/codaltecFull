import FooterCard from '@/components/home/FooterCard';
import styles from '@/styles/FooterHome.module.css';
import Image from 'next/image';
import {FaXTwitter} from 'react-icons/fa6';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {useTranslations} from 'next-intl';

export default function FooterHome() {
	const tFooter = useTranslations('footer');
	return (
		<section className={styles.footer__content}>
			<div className='flex justify-around items-center container mx-auto max-w-4xl'>
				<FooterCard
					title={tFooter('contacto')}
					content={'Movil: +57 300 639 8324'}
					title1={'EMAIL'}
					content1={'info@codaltec.com'}
				/>
				<span className='bg-white w-[2px] h-full' />
				<FooterCard title={tFooter('horario')} content={tFooter('horarioDias')} />
				<span className='bg-white w-[2px] h-full' />
				<FooterCard
					title={tFooter('direccion')}
					content={
						<>
							<p>{tFooter('bogota')}</p>
							<br />
							<p>{tFooter('villavicencio')}</p>
						</>
					}
				/>
				<span className='bg-white w-[2px] h-full' />
				<FooterCard
					title={tFooter('siguenos')}
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
				<span className='bg-white w-[2px] h-full' />
				<FooterCard
					classStyles={styles.footer__lastcard}
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
	);
}
