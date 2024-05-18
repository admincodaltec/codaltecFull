import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Autoplay, Navigation} from 'swiper';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {NavLink, useParams} from 'react-router-dom';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './product.css';

function Product() {
	const [t, i18n] = useTranslation('global');
	const [product, setProduct] = useState([]);
	const [subProducts, setSubProducts] = useState([]);
	const {productId} = useParams();

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/business/${productId}`).then(response => {
			setProduct(response.data);
		});
	}, [productId]);

	useEffect(() => {
		axios.get(`https://codaltec-api.website:3000/api/v1/products`).then(response => {
			const newData = response.data.filter(item => item.businessId === parseInt(productId));
			setSubProducts(newData);
		});
	}, [productId]);

	return (
		<main>
			<section className='products__header'></section>
			<section className='products__content'>
				<div className='container'>
					<div className='products__content-title'>
						<h2>
							{t('productsHome.productsLink')} <FontAwesomeIcon icon={faCaretRight} />
						</h2>
						<h1>{i18n.language === 'en' ? t(product.enName) : t(product.esName)}</h1>
						<NavLink to='/portfolio' className='products__btnBack'>
							<FontAwesomeIcon icon={faCaretLeft} />
							<div>{t('products.backPortafolio')}</div>
						</NavLink>
					</div>
					<div className='products__slider'>
						<Swiper
							className='myProducts__slider'
							effect='coverflow'
							centeredSlides={true}
							slidesPerView='auto'
							modules={[EffectCoverflow, Autoplay, Navigation]}
							navigation={true}
							coverflowEffect={{
								rotate: 20,
								stretch: 0,
								depth: 200,
								modifier: 1,
								slideShadows: true,
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
						>
							{subProducts.map(element => (
								<SwiperSlide className='product__slide swiper-slide' key={element.id}>
									<img
										src={`https://codaltec-api.website:3000/public/images/${element.image}`}
										alt=''
										className='product__slide-img'
									/>
									<article className='product__slide-article'>
										<h4>{i18n.language === 'en' ? t(element.enName) : t(element.esName)}</h4>
										<p>
											{i18n.language === 'en' ? t(element.enDescription) : t(element.esDescription)}
										</p>
									</article>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='product__btns'>
						<NavLink to='/portfolio'>
							<FontAwesomeIcon icon={faCaretLeft} />
							<div>{t('products.backPortafolio')}</div>
						</NavLink>
						<NavLink to='/home'>
							<div>{t('products.backHome')}</div>
							<FontAwesomeIcon icon={faCaretRight} />
						</NavLink>
					</div>
				</div>
			</section>
		</main>
	);
}

export {Product};
