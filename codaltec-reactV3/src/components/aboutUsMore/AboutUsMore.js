import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import './aboutUsMore.css';
import {useTranslation} from 'react-i18next';

function AboutUsMore() {
	const [t] = useTranslation('global');
	return (
		<main className='moreAbout__page'>
			<section className='moreAbout__section' id='nuestrosInicios'>
				<div className='header__section'>
					<div className='container'>
						<h2 className='title'>{t('aboutUs.nuestrosInicios')}</h2>
						<NavLink to='/about-us' className='back__btn'>
							{t('moreAboutUs.regresar')} <FontAwesomeIcon icon={faCaretLeft} />
						</NavLink>
					</div>
				</div>
				<article className='container'>
					<p>{t('moreAboutUs.iniciosDescription')}</p>
				</article>
			</section>
			<section className='moreAbout__section' id='organigrama'>
				<div className='header__section'>
					<div className='container'>
						<h2 className='title'>{t('aboutUs.organigrama')}</h2>
						<NavLink to='/about-us' className='back__btn'>
							{t('moreAboutUs.regresar')} <FontAwesomeIcon icon={faCaretLeft} />
						</NavLink>
					</div>
				</div>
				<picture className='container'>
					<img src='../assets/organigrama_codaltec.png' alt='' />
				</picture>
			</section>
			<section className='moreAbout__section' id='directivos'>
				<div className='header__section'>
					<div className='container'>
						<h2 className='title'>{t('aboutUs.directivos')}</h2>
						<NavLink to='/about-us' className='back__btn'>
							{t('moreAboutUs.regresar')} <FontAwesomeIcon icon={faCaretLeft} />
						</NavLink>
					</div>
				</div>
				<ul className='directives container'>
					<li>
						<p>Coronel (R) CESAR FELIPE LEON GIRALDO</p>
						<p></p>
						<p>Gerente General</p>
						<p>Carrera 50 No. 15-35</p>
						<p> +57 310 212 2021</p>
						<p>Bogotá D.C. Colombia</p>
					</li>
					<li>
						<p>Coronel CARLOS ALBERTO GUTIERREZ SUAREZ</p>
						<p></p>
						<p>SubGerente</p>
						<p>Carrera 50 No. 15-35</p>
						<p>+57 310 211 2066</p>
						<p>Bogotá D.C. Colombia</p>
					</li>
					<li>
						<p>Mayor GUSTAVO ANDRÉS GONZALEZ CASTAÑEDA</p>
						<p></p>
						<p>Director Dirección de Producción y Desarrollo</p>
						<p>Avenida 40 No. 24A - 71</p>
						<p> (1) 755 7352</p>
						<p>Bogotá D.C. Colombia</p>
					</li>
					<li>
						<p>YOLANDA PARRA GUACANEME</p>
						<p></p>
						<p>Directora Dirección de Inventigación </p>
						<p>Avenida 40 No. 24A - 71</p>
						<p>(8) 684 8764</p>
						<p>Villavicencio - Meta</p>
					</li>
					<li>
						<p>GABRIEL ANDRES RUIZ MORALES</p>
						<p>Director Administrativo y Financiera</p>
						<p>Carrera 50 No. 15-35</p>
						<p>3133247921</p>
						<p>Bogotá D.C. Colombia</p>
					</li>
					<li>
						<p>ANDRES FELIPE GIRALDO QUICENO</p>
						<p></p>
						<p>Jefe Oficina de Planeación</p>
						<p>Carrera 50 No. 15-35</p>
						<p>3235761193</p>
						<p>Bogotá D.C. Colombia</p>
					</li>
				</ul>
			</section>
		</main>
	);
}

export {AboutUsMore};
