import React from 'react';
import {ItemPortafolio} from '../itemPortafolio/ItemPortafolio';
import './portfolio.css';
import {useTranslation} from 'react-i18next';

function Portfolio() {
	const [t] = useTranslation('global');
	return (
		<main>
			<section className='portafolio__header'>
				<div className='container'>
					<article>
						<h1>{t('portafolio.portafolioTitle')}</h1>
					</article>
				</div>
			</section>
			<section className='portafolio__content'>
				<div className='container'>
					<article className='portafolio__content-article'>
						<h2>{t('productsHome.productos&servicios')}</h2>
						<span></span>
						<h3>{t('productsHome.productsLink')}</h3>
					</article>

					<ItemPortafolio></ItemPortafolio>
				</div>
			</section>
		</main>
	);
}

export {Portfolio};
