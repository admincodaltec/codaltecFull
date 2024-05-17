import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import './contracts.css';

function Contracts() {
	const [post, setPost] = useState([]);
	const [t] = useTranslation('global');

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/contract/`).then(response => {
			setPost(response.data);
		});
	}, []);

	return (
		<section className='contracts'>
			<div className='container'>
				<div className='contracts__top'>
					<h1>{t('transparency.contratacion')}</h1>
					<NavLink to='/transparency'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>{t('transparency.backTransparency')}</p>
					</NavLink>
				</div>
				<div className='contracts__down'>
					<ul>
						<li className='headTable'>
							<div className='short'>
								<p>{t('contracts.number')}</p>
							</div>
							<div className='short'>
								<p>{t('contracts.type')}</p>
							</div>
							<div className='short'>
								<p>{t('contracts.state')}</p>
							</div>
							<div className='large'>
								<p>{t('contracts.object')}</p>
							</div>
							<div className='short'>
								<p>{t('contracts.amount')}</p>
							</div>
							<div className='short'>
								<p>{t('contracts.date')}</p>
							</div>
						</li>
						{post
							.map(element => (
								<li key={element.id}>
									<NavLink to={`/contracts/${element.id}`}>
										<div className='short'>
											<p>{element.processNumber}</p>
										</div>
										<div className='short'>
											<p>{element.processType}</p>
										</div>
										<div className='short'>
											<p>{element.state}</p>
										</div>
										<div className='large'>
											<p>{element.purpose}</p>
										</div>
										<div className='short'>
											<p>{element.amount}</p>
										</div>
										<div className='short'>
											<p>{element.date}</p>
										</div>
									</NavLink>
								</li>
							))
							.reverse()}
					</ul>
				</div>
			</div>
		</section>
	);
}

export {Contracts};
