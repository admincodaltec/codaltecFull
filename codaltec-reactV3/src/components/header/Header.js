import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import {useTranslation} from 'react-i18next';

function Header() {
	const [stateLenguage, setStateLenguage] = useState(false);
	const [t, i18n] = useTranslation('global');

	const languageEs = () => {
		setStateLenguage(!stateLenguage);
		i18n.changeLanguage('es');
		localStorage.setItem('lng', 'es');
	};

	const languageEn = () => {
		setStateLenguage(!stateLenguage);
		i18n.changeLanguage('en');
		localStorage.setItem('lng', 'en');
	};

	const [stateMenuMobile, setStateMenuMobile] = useState(false);
	const location = useLocation();
	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({inline: 'start', block: 'start', behavior: 'smooth'});
			}
		} else {
			window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
		}
	}, [location]);
	return (
		<header>
			<section className='header'>
				<div className='header__container container'>
					<nav className='header__nav'>
						<ul>
							<li>
								<NavLink to='/home'>
									<img src='../assets/Logos/Codaltec_Icono.svg' alt='CODALTEC' />
								</NavLink>
							</li>
							<li>
								<NavLink to='/home'>{t('header.inicio')}</NavLink>
							</li>
							<li>
								<NavLink to='/about-us'>{t('header.nosotros')}</NavLink>
								<ul className='header__subNav'>
									<li>
										<NavLink to='/about-us/more#nuestrosInicios'>
											{t('header.nuestrosInicios')}
										</NavLink>
									</li>
									<li>
										<NavLink to='/about-us/more#organigrama'>{t('header.organigrama')}</NavLink>
									</li>
									<li>
										<NavLink to='/about-us/more#directivos'>{t('header.directivos')}</NavLink>
									</li>
								</ul>
							</li>
							<li>
								<NavLink to='/portfolio'>{t('header.portafolio')}</NavLink>
							</li>
							<li>
								<NavLink to='/posts'>{t('header.noticias')}</NavLink>
							</li>
							<li>
								<NavLink to='/investigation'>{t('header.investigación')}</NavLink>
								<ul className='header__subNav'>
									<li>
										<a
											rel='noopener noreferrer'
											target='_blank'
											href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000015930'
										>
											GIDS
										</a>
									</li>
									<li>
										<a
											href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000014838'
											rel='noopener noreferrer'
											target='_blank'
										>
											KTEG
										</a>
									</li>
								</ul>
							</li>
							<li>
								<NavLink to='/transparency'>{t('header.transparencia')}</NavLink>
								<ul className='header__subNav'>
									<li>
										<NavLink to='/contracts'>{t('header.contratacion')}</NavLink>
									</li>
									<li>
										<NavLink to='/internal-control'>{t('header.controlInterno')}</NavLink>
									</li>
									<li>
										<NavLink to='/financial'>{t('header.financial')}</NavLink>
									</li>
								</ul>
							</li>
							<li>
								<NavLink to='/atention'>{t('header.atention')}</NavLink>
							</li>
						</ul>
					</nav>
					<div className='header__search'>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
						<input type='text' />
						<div className='header__language'>
							<button className='buttonLanguage' onClick={() => setStateLenguage(!stateLenguage)}>
								<img src='../assets/Icons/espanol.png' alt='Icon of language CODALTEC' />
							</button>
							{stateLenguage && (
								<div className='selectLanguage'>
									<button onClick={languageEn}>{t('language.ingles')}</button>
									<button onClick={languageEs}>{t('language.español')}</button>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='header__mobile container'>
					<div className='left'>
						<div
							className='header__mobile-btn'
							onClick={() => setStateMenuMobile(!stateMenuMobile)}
						>
							<FontAwesomeIcon icon={faBars} />
						</div>
						<NavLink to='/home'>
							<img src='../assets/Logos/Codaltec_Icono.svg' alt='CODALTEC' />
						</NavLink>
						{stateMenuMobile && (
							<div className='menu__mobile'>
								<nav>
									<button onClick={() => setStateMenuMobile(false)}>
										<FontAwesomeIcon icon={faXmark} />
									</button>

									<ul>
										<img src='../assets/Logos/Codaltec_Blanco.svg' alt='' />
										<li>
											<NavLink to='/home'>{t('header.inicio')}</NavLink>
										</li>
										<li>
											<NavLink to='/about-us'>{t('header.nosotros')}</NavLink>
										</li>
										<li>
											<NavLink to='/portfolio'>{t('header.portafolio')}</NavLink>
										</li>
										<li>
											<NavLink to='/posts'>{t('header.noticias')}</NavLink>
										</li>
										<li>
											<NavLink to='/investigation'>{t('header.investigación')}</NavLink>
										</li>
										<li>
											<NavLink to='/transparency'>{t('header.transparencia')}</NavLink>
										</li>
										<li>
											<NavLink to='/atention'>{t('header.atention')}</NavLink>
										</li>
									</ul>
								</nav>
							</div>
						)}
					</div>
					<div className='header__language'>
						<button className='buttonLanguage' onClick={() => setStateLenguage(!stateLenguage)}>
							<img src='../assets/Icons/espanol.png' alt='Icon of language CODALTEC' />
						</button>
						{stateLenguage && (
							<div className='selectLanguage'>
								<button onClick={languageEn}>{t('language.ingles')}</button>
								<button onClick={languageEs}>{t('language.español')}</button>
							</div>
						)}
					</div>
				</div>
			</section>
		</header>
	);
}

export {Header};
