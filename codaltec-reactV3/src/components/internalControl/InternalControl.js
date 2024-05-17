import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import './internalControl.css';

function InternalControl() {
	const [post, setPost] = useState([]);
	const [t] = useTranslation('global');

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/internal-control/`).then(response => {
			setPost(response.data);
		});
	}, []);

	return (
		<section className='internal'>
			<div className='container'>
				<div className='internal__top'>
					<h1>{t('controlInterno.controlTitle')}</h1>
					<NavLink to='/transparency'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>{t('transparency.backTransparency')}</p>
					</NavLink>
				</div>
				<div className='internal__down'>
					<ul>
						<li className='headTable'>
							<div className='left'>
								<p>{t('controlInterno.title')}</p>
							</div>
							<div className='center'>
								<p>{t('contracts.date')}</p>
							</div>
							<div className='rigth'>
								<p>{t('controlInterno.soport')}</p>
							</div>
						</li>
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
											<p>{element.name}</p>
										</div>
										<div className='center'>
											<p>{element.date}</p>
										</div>
										<div className='rigth'>
											<FontAwesomeIcon icon={faFilePdf} />
											<p>{element.file}</p>
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

export {InternalControl};
