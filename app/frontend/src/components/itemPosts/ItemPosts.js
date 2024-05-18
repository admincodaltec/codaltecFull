import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function ItemPosts() {
	const url = 'https://codaltec-api.website:3000/api/v1/news/';
	const [post, setPost] = useState(null);
	const [t, i18n] = useTranslation('global');

	useEffect(() => {
		axios.get(url).then(response => {
			setPost(response.data);
		});
	}, []);

	if (!post) return null;
	return (
		<ul className='news__list'>
			{post
				.map(element => (
					<li key={element.id}>
						<NavLink to={`/post/${element.id}`} className='news__individual'>
							<img
								src={`https://codaltec-api.website:3000/public/images/${element.image}`}
								alt={element.esTitle}
								className='news__individual-img'
							/>
							<div className='news__individual-text'>
								<p className='news__title'>
									{i18n.language === 'en' ? t(element.enTitle) : t(element.esTitle)}
								</p>
								<p>
									{i18n.language === 'en' ? t(element.enDescription) : t(element.esDescription)}
								</p>
							</div>
							<p className='viewMore'>
								{t('noticias.readMore')} <FontAwesomeIcon icon={faCaretRight} />
							</p>
						</NavLink>
					</li>
				))
				.reverse()}
		</ul>
	);
}

export {ItemPosts};
