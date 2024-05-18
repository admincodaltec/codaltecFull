import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './footerWelcome.css';

function FooterWelcome() {
	return (
		<footer>
			<section className='footerBlack'>
				<div className='footerBlack__container container'>
					<div className='footerBlack__card'>
						<span>
							<h5>CONTACTO</h5>
							<p>Movil: +57 300 639 8324</p>
						</span>
						<span>
							<h5>EMAIL</h5>
							<p>info@codaltec.com</p>
						</span>
					</div>
					<div className='footerBlack__card'>
						<span>
							<h5>HORARIO DE ATENCIÓN</h5>
							<p>
								Lunes a Viernes 8:00 a. m. - 12:00 p. m. <br />
								1:00 p. m. - 5:00 p. m.
							</p>
						</span>
					</div>
					<div className='footerBlack__card'>
						<span>
							<h5>DIRECCIÓN</h5>
							<p>
								Oficina Principal Cra 50 # 15 - 35 <br />
								Bogotá - Colombia
							</p>
							<br></br>
							<p>
								Oficina Villavicencio <br /> Avenida 40 No. 24A - 71 Tercer piso Villavicencio -
								Meta
							</p>
						</span>
					</div>
					<div className='footerBlack__card'>
						<h5>SIGUENOS</h5>
						<ul>
							<li>
								<a href='https://twitter.com/codaltec' target='_blank' rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/codaltec'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/codaltec/?igshid=mipxwbvoqzc2&hl=es-la'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/channel/UC9WLtbwdkANGHAr33KnW6pw'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
						</ul>
					</div>
					<div className='footerBlack__card'>
						<picture>
							<img src='./assets/Logos/MINDEFENSA.svg' alt='' />
						</picture>
						<picture>
							<img src='./assets/Logos/GESED_Blanco.svg' alt='' />
						</picture>
					</div>
				</div>
			</section>
			<section className='footerBlack__mobile'>
				<div className='container'>
					<a href='tel:'>
						<FontAwesomeIcon icon={faPhone} />
					</a>
					<span></span>
					<a href='mailto:'>
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
					<span></span>
					<div className='footerBlack__follow-mobile'>
						<p>SIGUENOS:</p>
						<ul>
							<li>
								<a href='https://twitter.com/codaltec' target='_blank' rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/codaltec'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/codaltec/?igshid=mipxwbvoqzc2&hl=es-la'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/channel/UC9WLtbwdkANGHAr33KnW6pw'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faYoutube} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
}

export {FooterWelcome};
