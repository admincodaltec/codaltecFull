'use client';

import {usePathname} from 'next/navigation';
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/HeaderHome.module.css';
import NavItem from '../components/home/NavItem';
import {useTranslations} from 'next-intl';
import {FaLanguage} from 'react-icons/fa6';

export default function HeaderHome() {
	const tHeader = useTranslations('header');
	const tLenguage = useTranslations('language');
	const currentPath = usePathname();

	const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

	const toggleLanguageMenu = () => {
		setLanguageMenuVisible(!languageMenuVisible);
	};

	const switchSpanish = () => {
		if (currentPath.includes('/en')) {
			return currentPath.replace('/en', '/es');
		} else {
			return currentPath;
		}
	};

	const switchEnglish = () => {
		if (currentPath.includes('/es')) {
			return currentPath.replace('/es', '/en');
		} else {
			return currentPath;
		}
	};

	return (
		<header>
			<section className={styles.header__content}>
				<div className='flex justify-between w-full container mx-auto py-2'>
					<nav className='flex self-center'>
						<ul className='flex'>
							<li className='flex items-center py-1 px-3'>
								<Link href='/home/home'>
									<Image
										src='/assets/Logos/Codaltec_Icono.svg'
										alt='CODALTEC | Corporación de Alta Técnologia Logo'
										width={30}
										height={15}
									/>
								</Link>
							</li>
							<NavItem name={tHeader('inicio')} link={'/home/home'} />
							<NavItem
								name={tHeader('nosotros')}
								link={'/home/about-us'}
								subItems={[
									{name: tHeader('nuestrosInicios'), link: '/home/about-us/more#nuestros-inicios'},
									{name: tHeader('organigrama'), link: '/home/about-us/more#organigrama'},
									{name: tHeader('directivos'), link: '/home/about-us/more#directivos'},
								]}
							/>
							<NavItem name={tHeader('portafolio')} link={'/home/portfolio'} />
							<NavItem name={tHeader('noticias')} link={'/home/posts'} />
							<NavItem name={tHeader('investigación')} link={'/home/investigation'} />
							<NavItem
								name={tHeader('transparencia')}
								link={'/home/transparency'}
								subItems={[
									{name: tHeader('contratacion'), link: '/home/transparency/contracts'},
									{name: tHeader('controlInterno'), link: '/home/transparency/internal-control'},
									{name: tHeader('financial'), link: '/home/transparency/financials'},
								]}
							/>
							<NavItem name={tHeader('atention')} link={'/home/atention-citizen'} />
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
				</div>
			</section>
		</header>
	);
}
