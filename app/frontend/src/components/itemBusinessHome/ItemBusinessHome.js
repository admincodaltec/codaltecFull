import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function ItemBusinessHome() {
	const [t, i18n] = useTranslation('global');
	const url = 'https://codaltec-api.website:3000/api/v1/business/';
	const [business, setBusiness] = useState(null);

	useEffect(() => {
		axios.get(url).then(response => {
			setBusiness(response.data);
		});
	}, []);

	if (!business) return null;
	return (
		<div className='bussines__container-right'>
			<h2>{t('productsHome.productsBusiness')}</h2>
			{business.map(element => (
				<NavLink to={`/product/${element.id}`} className='bussines__cards' key={element.id}>
					{i18n.language === 'en' ? t(element.enName) : t(element.esName)}
					<img
						src='./assets/Icons/Sensores_Negro.svg'
						alt=''
						className='bussines__img bussines__img-mobile'
					/>
					<img
						src='./assets/Icons/Sensores_Blanco.svg'
						alt=''
						className='bussines__img bussines__img-desk'
					/>
				</NavLink>
			))}
		</div>
	);
}

export {ItemBusinessHome};
