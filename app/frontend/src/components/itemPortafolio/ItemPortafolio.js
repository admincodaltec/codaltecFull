import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function ItemPortafolio() {
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
		<ul>
			{business.map(element => (
				<li key={element.id}>
					<NavLink to={`/product/${element.id}`} className='bussines__cards'>
						{i18n.language === 'en' ? t(element.enName) : t(element.esName)}
						<img
							src='./assets/Icons/Sensores_Blanco.svg'
							alt=''
							className='bussines__img bussines__img-mobile'
						/>
						<img
							src='./assets/Icons/Sensores_Negro.svg'
							alt=''
							className='bussines__img bussines__img-desk'
						/>
					</NavLink>
					<article>
						<p>{i18n.language === 'en' ? t(element.enDescription) : t(element.esDescription)}</p>
					</article>
					<iframe title='myFrame2' src={element.youtube}></iframe>
				</li>
			))}
		</ul>
	);
}

export {ItemPortafolio};
