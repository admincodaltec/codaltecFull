import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import './contracts.css';

function Contract() {
	const [post, setPost] = useState([]);
	const {contractId} = useParams();
	const [t] = useTranslation('global');

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/contract/${contractId}`).then(response => {
			setPost(response.data);
		});
	}, [contractId]);

	return (
		<section className='contracts'>
			<div className='container'>
				<div className='contracts__top'>
					<h1>{t('contracts.individualContract')}</h1>
					<NavLink to='/contracts'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>{t('contracts.backContracts')}</p>
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
						<li className='contract__internal' key={post.id}>
							<div className='short'>
								<p>{post.processNumber}</p>
							</div>
							<div className='short'>
								<p>{post.processType}</p>
							</div>
							<div className='short'>
								<p>{post.state}</p>
							</div>
							<div className='large'>
								<p>{post.purpose}</p>
							</div>
							<div className='short'>
								<p>{post.amount}</p>
							</div>
							<div className='short'>
								<p>{post.date}</p>
							</div>
						</li>
						<div className='contract__documents'>
							<h2>{t('contracts.documents')}</h2>
							<div>
								<a
									target='_blank'
									download
									href={`https://codaltec-api.website:3000/public/documents/${post.file}`}
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faFilePdf} />
									{post.file}
								</a>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</section>
	);
}

export {Contract};
