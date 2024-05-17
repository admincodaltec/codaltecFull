import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import './financial.css';

function Financial() {
	const [post, setPost] = useState([]);
	const [t] = useTranslation('global');

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/financial/`).then(response => {
			setPost(response.data);
		});
	}, []);

	return (
		<section className='financial'>
			<div className='container'>
				<div className='financial__top'>
					<h1>{t('financial.title')}</h1>
					<NavLink to='/transparency'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>{t('transparency.backTransparency')}</p>
					</NavLink>
				</div>
				<div className='financial__down'>
					<ul>
						{post
							.map(element => (
								<li key={element.id}>
									<a
										target='_blank'
										download
										href={`https://codaltec-api.website:3000/public/documents/${element.file}`}
										rel='noopener noreferrer'
									>
										<div className='left'>
											<FontAwesomeIcon icon={faFilePdf} />
											<p>{element.name}</p>
										</div>
										<div className='rigth'>
											<p>{t('financial.download')}</p>
										</div>
									</a>
								</li>
							))
							.reverse()}
					</ul>
				</div>
			</div>
		</section>
	);
}

export {Financial};
