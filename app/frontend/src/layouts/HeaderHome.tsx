'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from '../components/home/NavItem';
import NavMovile from './NavMovile';
import {useTranslations} from 'next-intl';
import {FaLanguage} from 'react-icons/fa6';
import {HiBars3BottomRight} from 'react-icons/hi2';
import {usePathname} from 'next/navigation';
import styles from '@/styles/HeaderHome.module.css';

export default function HeaderHome() {
	const tHeader = useTranslations('header');
	const tLenguage = useTranslations('language');
	const currentPath = usePathname();

	const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
	const [movileMenuVisible, setMovileMenuVisible] = useState(false);

	const toggleLanguageMenu = () => {
		setLanguageMenuVisible(!languageMenuVisible);
	};

	const toggleMovileMenu = () => {
		setMovileMenuVisible(!movileMenuVisible);
	};

	const switchSpanish = () => {
		if (currentPath.includes('/en')) {
			return currentPath.replace('/en', '/es');
		} else {
			return currentPath;
		}
	};

	const switchEnglish = () => {
		if (!currentPath.startsWith('/en')) {
			return '/en' + currentPath;
		}
		return currentPath;
	};

	return (
		<header>
			<section className={styles.header__content}>
				<div className='flex justify-between relative w-full container mx-auto py-2'>
					<nav className={styles.header__nav_desktop}>
						<ul className='flex'>
							<li className='flex items-center py-1 px-3'>
								<Link href='es/home'>
									<Image
										src='/assets/Logos/Codaltec_Icono.svg'
										alt='CODALTEC | Corporación de Alta Técnologia Logo'
										width={30}
										height={15}
									/>
								</Link>
							</li>
							<NavItem name={tHeader('inicio')} link={'/home'} />
							<NavItem
								name={tHeader('nosotros')}
								link={'/about-us'}
								subItems={[
									{name: tHeader('nuestrosInicios'), link: '/about-us/more#nuestros-inicios'},
									{name: tHeader('organigrama'), link: '/about-us/more#organigrama'},
									{name: tHeader('directivos'), link: '/about-us/more#directivos'},
								]}
							/>
							<NavItem name={tHeader('portafolio')} link={'/portfolio'} />
							<NavItem name={tHeader('noticias')} link={'/posts'} />
							<NavItem name={tHeader('investigación')} link={'/investigation'} />
							<NavItem
								name={tHeader('transparencia')}
								link={'/transparency'}
								subItems={[
									{name: tHeader('contratacion'), link: '/transparency/contracts'},
									{name: tHeader('controlInterno'), link: '/transparency/internal-control'},
									{name: tHeader('financial'), link: '/transparency/financials'},
								]}
							/>
							<NavItem name={tHeader('atention')} link={'/atention-citizen'} />
						</ul>
					</nav>
					<div className='flex items-center relative'>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={toggleLanguageMenu}
							className=' text-white transition duration-300 ease-in-out hover:text-yellow-500'
						>
							<FaLanguage className='text-2xl ' />
						</button>
						{languageMenuVisible && (
							<div className='flex flex-col gap-1 absolute top-full -left-1/2 transform -translate-x-1/2 bg-black/80 rounded-lg'>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<Link
									href={switchEnglish()}
									className='block text-center px-3 py-1 rounded-lg text-white transition duration-300 ease-in-out hover:text-yellow-500'
								>
									{tLenguage('ingles')}
								</Link>
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<Link
									href={switchSpanish()}
									className='block text-center px-3 py-1 rounded-lg text-white transition duration-300 ease-in-out hover:text-yellow-500'
								>
									{tLenguage('español')}
								</Link>
							</div>
						)}
					</div>
					<button onClick={toggleMovileMenu} className={styles.header__but_movile}>
						<HiBars3BottomRight className='text-3xl' />
					</button>
					{/* Mobile navigation */}
					{movileMenuVisible && <NavMovile />}
				</div>
			</section>
		</header>
	);
}
