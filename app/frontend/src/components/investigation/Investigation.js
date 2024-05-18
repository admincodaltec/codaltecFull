import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';
import './investigation.css';

function Investigation() {
	const [t] = useTranslation('global');
	return (
		<main>
			<section className='investigation__header'>
				<div className='container'>
					<article>
						<h1>{t('investigation.investigationTitle')}</h1>
					</article>
				</div>
			</section>
			<section className='investigation__content'>
				<div className='container'>
					<article>
						<p>{t('investigation.investigationDescription')}</p>
						<a href='https://www.google.com/'>{t('noticias.readMore')}...</a>
					</article>
					<NavLink to='/home'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>{t('products.backHome')}</p>
					</NavLink>
				</div>
			</section>
			<section className='teamInvestigation__content'>
				<div className='container'>
					<h2>{t('investigation.investigationTeams')}</h2>
					<div className='teamInvestigation__items'>
						<div className='teamInvestigation__item'>
							<div className='logo'>
								<img src='./assets/Logos/gdis.png' alt='' />
							</div>
							<FontAwesomeIcon icon={faCaretRight} />
							<article>
								<p>{t('investigation.investigationGids')}</p>
								<a
									rel='noopener noreferrer'
									target='_blank'
									href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000015930'
								>
									{t('noticias.readMore')}...
								</a>
							</article>
						</div>
						<div className='teamInvestigation__item'>
							<article>
								<p>{t('investigation.investigationKTEG')}</p>
								<a
									rel='noopener noreferrer'
									target='_blank'
									href='https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000014838'
								>
									{t('noticias.readMore')}...
								</a>
							</article>
							<FontAwesomeIcon icon={faCaretLeft} />
							<div className='logo'>
								<img src='./assets/Logos/kge.png' alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='laboratory'>
				<div className='container'>
					<h2>{t('investigation.investigationLaboratory')}</h2>
				</div>
				<img src='./assets/laboratory.jpg' alt='' />
				<div className='container'>
					<div className='laboratory__content'>
						<article>
							<p>{t('investigation.investigationLaboratoryDescription')}</p>
						</article>
						<a href='../assets/laboratorio.pdf' target='_blank' download rel='noopener noreferrer'>
							<p>{t('investigation.investigationMore')}</p>
							<FontAwesomeIcon icon={faCaretRight} />
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

export {Investigation};
