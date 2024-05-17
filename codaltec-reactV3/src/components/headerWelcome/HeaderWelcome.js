import React from 'react';
import {useNavigate} from 'react-router-dom';
import './headerWelcome.css';
import {useTranslation} from 'react-i18next';

function HeaderWelcome() {
	const [t, i18n] = useTranslation('global');
	console.log(t);
	const navigate = useNavigate();

	const languageEs = () => {
		navigate('/home');
		i18n.changeLanguage('es');
		localStorage.setItem('lng', 'es');
	};

	const languageEn = () => {
		navigate('/home');
		i18n.changeLanguage('en');
		localStorage.setItem('lng', 'en');
	};

	return (
		<header>
			<section className='header__welcome'>
				<div className='logo__mobile'>
					<img src='./assets/Logos/Codaltec_B.svg' alt='CODALTEC LOGO' />
				</div>
				<div className='container'>
					<div className='header__welcome-title'>
						<h1>SELECCIONE SU IDIOMA / SELECT YOUR LENGUAGE</h1>
						<i className='fa-solid fa-caret-right'></i>
					</div>
					<div className='header__welcome-btn'>
						<button className='btn__lenguage' onClick={languageEs}>
							<h4>BIENVENIDO</h4>
							<img src='./assets/Logos/Codaltec_Icono.svg' alt='' />
							<h3>ESPAÑOL</h3>
						</button>
						<span></span>
						<button className='btn__lenguage' onClick={languageEn}>
							<h4>WELCOME</h4>
							<img src='./assets/Logos/Codaltec_Icono.svg' alt='' />
							<h3>ENGLISH</h3>
						</button>
					</div>
				</div>
			</section>
		</header>
	);
}

export {HeaderWelcome};
