import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import './laboratory.css';
import {NavLink} from 'react-router-dom';

function Laboratory() {
	return (
		<main>
			<section className='laboratory__header'>
				<div className='container'>
					<article>
						<h1>LABORATORIO ESPECIALIZADO EN SENSORES Y RADIOFRECUENCIA</h1>
					</article>
				</div>
			</section>
			<section className='laboratory__article'>
				<div className='laboratory__article-top container'>
					<p>
						BIENVENIDO A NUESTRA SESIÓN DE GRUPOS DE INVESTIGACIÓN Y DESARROLLO, CONOCE LOS
						PROFESIONALES QUE TENEMOS PARA NUESTROS PROYECTOS
					</p>
					<span></span>
					<NavLink to='/investigation'>
						<FontAwesomeIcon icon={faCaretLeft} />
						<p>VOLVER AL CENTRO DE INVESTIGACIÓN</p>
					</NavLink>
				</div>
				<div className='laboratory__article-down container'>
					<div className='content'>
						<p>
							En CODALTEC contamos con un laboratorio especializado con equipos, herramientas y
							elementos para diseño diagnostico y desarrollo de:
						</p>
						<ul>
							<li>
								<p>Dispositivos de radiofrecuencia</p>
							</li>
							<li>
								<p>Sistemas de telecomunicaciones</p>
							</li>
							<li>
								<p>Desarrollo de sistemas radar</p>
							</li>
							<li>
								<p>Sistemas embebidos y eletrónica digital</p>
							</li>
							<li>
								<p>Cámaras y sensores optrónicos</p>
							</li>
							<li>
								<p>Vehículos no tripulados</p>
							</li>
							<li>
								<p>Herramientas de software transversales</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='laboratory__pdf'>
				<div className='container'>
					<ul>
						<li>
							<p className='name'>DISPOSITIVOS DE RADIOFRECUENCIA</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>SISTEMAS DE TELECOMUNICACIONES</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>DISPOSITIVOS DE RADIOFRECUENCIA</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>DESARROLLO DE SISTEMAS RADAR</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>SISTEMAS EMBEBIDOS Y ELECTRÓNICA DIGITAL</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>CÁMARAS Y SENSORES OPTRÓNICOS</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>VEHÍCULOS NO TRIPULADOS</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
						<li>
							<p className='name'>HERRAMIENTAS DE SOFTWARE TRANSVERSALES</p>
							<span></span>
							<a href='https://www.google.com/'>
								<p className='description'>DESCARGUE AQUI EL CONTENIDO</p>
								<p className='link'>https://link.springer.com</p>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export {Laboratory};
