import React, {useEffect, useState} from 'react';
import './postHome.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

function PostHome() {
	const [t, i18n] = useTranslation('global');
	const url = 'https://codaltec-api.website:3000/api/v1/news/';
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			setPost(response.data);
		});
	}, []);

	if (!post) return null;
	return (
		<section className='news'>
			<div className='news__container container'>
				<div className='news__title'>
					<h2>
						<span>{t('postHome.postHomeTitle1')}</span>
						<br />
						{t('postHome.postHomeTitle2')}
					</h2>
					<NavLink to='/posts'>{t('postHome.postLink')}</NavLink>
				</div>
				<ul className='new__items'>
					{post
						.map(element => (
							<li key={element.id}>
								<NavLink to={`/post/${element.id}`}>
									<picture>
										<img
											src={`https://codaltec-api.website:3000/public/images/${element.image}`}
											alt={element.esTitle}
										/>
									</picture>
									<div className='news__items-article'>
										{i18n.language === 'en' ? t(element.enTitle) : t(element.esTitle)}
									</div>
								</NavLink>
							</li>
						))
						.reverse()
						.slice(0, 3)}

					<li className='news__items-btn'>
						<NavLink className='' to='/posts'>
							{t('postHome.postLink')}
						</NavLink>
					</li>
				</ul>
			</div>
		</section>
	);
}

export {PostHome};
