import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import './aboutUs.css';
import {useTranslation} from 'react-i18next';

function AboutUs() {
	const [t] = useTranslation('global');
	return (
		<main>
			<section className='aboutUs'>
				<div className='aboutUs__container container'>
					<article className='aboutUs__article'>
						<h1>{t('aboutUs.aboutUsTitle')}</h1>
						<div className='aboutUs__article-text'>
							<p>{t('aboutUs.aboutUsDescription')}</p>
						</div>
					</article>
				</div>
			</section>
			<section className='values'>
				<div className='values__container container'>
					<article>
						<h2>{t('aboutUs.mision')}</h2>
						<p>{t('aboutUs.misionDescription')}</p>
					</article>
					<span></span>
					<article>
						<h2>{t('aboutUs.vision')}</h2>
						<p>{t('aboutUs.visionDescription')}</p>
					</article>
				</div>
			</section>
			<section className='moreAbout'>
				<div className='left'></div>
				<div className='right'></div>
				<div className='moreAbout__container container'>
					<div className='moreMenu'>
						<h3>{t('aboutUs.moreAbout')}</h3>
						<ul className='moreMenu__subItems'>
							<li>
								<NavLink to='/about-us/more#nuestrosInicios'>
									<h4>
										<FontAwesomeIcon icon={faCaretRight} /> {t('aboutUs.nuestrosInicios')}
									</h4>
									<p> {t('aboutUs.historiaCodaltec')}</p>
								</NavLink>
							</li>
							<li>
								<NavLink to='/about-us/more#organigrama'>
									<h4>
										<FontAwesomeIcon icon={faCaretRight} /> {t('aboutUs.organigrama')}
									</h4>
									<p>{t('aboutUs.estructura')}</p>
								</NavLink>
							</li>
							<li>
								<NavLink to='/about-us/more#directivos'>
									<h4>
										<FontAwesomeIcon icon={faCaretRight} /> {t('aboutUs.directivos')}
									</h4>
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='map'>
						<div className='sub-map'>
							<h4>{t('aboutUs.sedePrincipal')}</h4>
							<iframe
								title='myFrame'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3763592445894!2d-73.62379838510492!3d4.146167747370243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2ddbd68b4f83%3A0xc24ef97aa0ec4af6!2sParque%20de%20la%20Vida%20Cofrem!5e0!3m2!1ses!2sco!4v1662470439822!5m2!1ses!2sco'
								style={{border: 0}}
							></iframe>
						</div>
						<div className='sub-map'>
							<h4>{t('aboutUs.sedeVillavicencio')}</h4>
							<iframe
								title='myFrame2'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3763592445894!2d-73.62379838510492!3d4.146167747370243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2ddbd68b4f83%3A0xc24ef97aa0ec4af6!2sParque%20de%20la%20Vida%20Cofrem!5e0!3m2!1ses!2sco!4v1662470439822!5m2!1ses!2sco'
								style={{border: 0}}
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export {AboutUs};
