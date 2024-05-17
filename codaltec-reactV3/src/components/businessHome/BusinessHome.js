import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import './businessHome.css';
import {useTranslation} from 'react-i18next';

import {ItemBusinessHome} from '../itemBusinessHome/ItemBusinessHome';
import {ItemBusinessHomePhone} from '../itemBusinessHomePhone/ItemBusinessHomePhone';

function BusinessHome() {
	const [t] = useTranslation('global');
	return (
		<section className='bussines'>
			<div className='bussines__container container'>
				<div className='bussines__container-left'>
					<h2 className='bussines__title-mobile'>{t('productsHome.productsBusiness')}</h2>
					<h3>{t('productsHome.productos&servicios')}</h3>
					<span></span>
					<article>{t('productsHome.productsDescription')}</article>
					<span></span>
					<NavLink to='/portfolio'>
						{t('productsHome.productsLink')} <FontAwesomeIcon icon={faCaretRight} />
					</NavLink>
				</div>
				<ItemBusinessHome></ItemBusinessHome>
				<ItemBusinessHomePhone></ItemBusinessHomePhone>
			</div>
		</section>
	);
}

export {BusinessHome};
