import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';
import './transparency.css';

function Transparency() {
	const [t] = useTranslation('global');
	return (
		<section className='transparency'>
			<div className='container'>
				<h1>{t('transparency.transparencyTitle')}</h1>
				<article className='transparency__article'>
					<p>{t('transparency.transparencyDescription')}</p>
				</article>
				<div className='transparencyItems'>
					<div className='transparencyItems__top'>
						<h2>
							{t('transparency.conoceMas')} <FontAwesomeIcon icon={faCaretDown} />
						</h2>
						<span></span>
					</div>
					<div className='transparencyItems__down'>
						<NavLink className='transparency__item' to='/contracts'>
							<div className='transparency__item-header'>
								<h3>{t('transparency.contratacion')}</h3>
							</div>
							<div className='transparency__item-body'>
								<img alt=''></img>
								<article>
									<p>{t('transparency.contratacionDescription')}</p>
								</article>
								<span>{t('noticias.readMore')}</span>
							</div>
						</NavLink>
						<NavLink className='transparency__item' to='/internal-control'>
							<div className='transparency__item-header'>
								<h3>{t('transparency.control')}</h3>
							</div>
							<div className='transparency__item-body'>
								<img alt=''></img>
								<article>
									<p>{t('transparency.controlDescription')}</p>
								</article>
								<span>{t('noticias.readMore')}</span>
							</div>
						</NavLink>
						<NavLink className='transparency__item' to='/financial'>
							<div className='transparency__item-header'>
								<h3>{t('transparency.financiera')}</h3>
							</div>
							<div className='transparency__item-body'>
								<img alt=''></img>
								<article>
									<p>{t('transparency.financieraDescription')}</p>
								</article>
								<span>{t('noticias.readMore')}</span>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
}

export {Transparency};
