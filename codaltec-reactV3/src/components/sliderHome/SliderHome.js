import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderHome.css';
import {useTranslation} from 'react-i18next';

function SliderHome() {
	const [t, i18n] = useTranslation();
	const url = 'https://codaltec-api.website:3000/api/v1/sliders/';
	const [sliders, setSliders] = useState([]);

	useEffect(() => {
		axios.get(url).then(response => {
			setSliders(response.data);
		});
	}, []);

	if (!sliders) return null;
	return (
		<div className='hero'>
			<Swiper
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Navigation, Autoplay]}
				className='mySwiper'
			>
				{sliders
					.map(element => (
						<SwiperSlide className='swiper-slide' key={element.id}>
							<picture>
								<img
									src={`https://codaltec-api.website:3000/public/images/${element.image}`}
									alt={element.esTitle}
									className='img__xl'
								/>
							</picture>
							<div className='container'>
								<div className='swiper__text'>
									<h1 className='swiper__text-title'>
										{i18n.language === 'en' ? t(element.enTitle) : t(element.esTitle)}
									</h1>
									<article className='swiper__text-article'>
										{i18n.language === 'en' ? t(element.enDescription) : t(element.esDescription)}
									</article>
								</div>
							</div>
						</SwiperSlide>
					))
					.reverse()}
			</Swiper>
		</div>
	);
}

export {SliderHome};
