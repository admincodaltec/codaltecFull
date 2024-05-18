import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {ItemPosts} from '../itemPosts/ItemPosts';
import {useTranslation} from 'react-i18next';
import './posts.css';

function Posts() {
	const [t] = useTranslation('global');
	return (
		<main>
			<section className='news__header'>
				<div className='container'>
					<article>
						<h1>{t('noticias.noticiasTitle')}</h1>
					</article>
				</div>
			</section>
			<section className='news__content'>
				<div className='container'>
					<article className='news__content-article'>
						<p>{t('noticias.noticiasDescription')}</p>
						<span></span>
						<NavLink to='/home'>
							<p>{t('products.backHome')}</p>
							<FontAwesomeIcon icon={faCaretRight} />
						</NavLink>
					</article>
					<article className='news__content-articleMobile'>
						<p>
							{t('noticias.ultimas')} <span>{t('noticias.noticiasTitle')}</span>
						</p>
						<NavLink to='/home'>
							<FontAwesomeIcon icon={faCaretLeft} />
							<p>{t('products.backHome')}</p>
						</NavLink>
					</article>
					<ItemPosts></ItemPosts>
				</div>
			</section>
		</main>
	);
}

export {Posts};
