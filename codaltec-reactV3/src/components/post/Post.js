import React, {useEffect, useState} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import './post.css';

function Post() {
	const [t, i18n] = useTranslation('global');
	const [post, setPost] = useState([]);
	const {postId} = useParams();

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/news/${postId}`).then(response => {
			setPost(response.data);
		});
	}, [postId]);

	const [nextPost, setNextPost] = useState([]);

	useEffect(() => {
		axios.get('https://codaltec-api.website:3000/api/v1/news/').then(response => {
			if (parseInt(postId) === response.data.length) {
				setNextPost(response.data[0]);
			} else if (parseInt(postId) === 1) {
				setNextPost(response.data[response.data.length - 1]);
			} else {
				setNextPost(response.data[parseInt(postId) - 2]);
			}
		});
	}, [postId]);

	return (
		<main>
			<section className='new'>
				<div className='container'>
					<div className='new__image'>
						<img src={`https://codaltec-api.website:3000/public/images/${post.image}`} alt={post.esTitle} />
						<span></span>
						<NavLink className='new__nextNew' to={`/post/${nextPost.id}`}>
							<p className='new__nextNew-msg'>{t('noticias.noticiaNext')}</p>
							<img src={`https://codaltec-api.website:3000/public/images/${nextPost.image}`} alt='' />
							<p className='new__nextNew-title'>
								{i18n.language === 'en' ? t(nextPost.enTitle) : t(nextPost.esTitle)}
							</p>
						</NavLink>
					</div>
					<div className='new__article'>
						<h1 className='new__article-title'>
							{i18n.language === 'en' ? t(post.enTitle) : t(post.esTitle)}
						</h1>
						<article className='new__article-text'>
							<p>{i18n.language === 'en' ? t(post.enDescription) : t(post.esDescription)}</p>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}

export {Post};
