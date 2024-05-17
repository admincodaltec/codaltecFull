import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow} from 'swiper';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

function ItemBusinessHomePhone() {
	const [t, i18n] = useTranslation('global');
	const url = 'https://codaltec-api.website:3000/api/v1/business/';
	const [business, setBusiness] = useState(null);

	useEffect(() => {
		axios.get(url).then(response => {
			setBusiness(response.data);
		});
	}, []);

	if (!business) return null;
	return (
		<Swiper
			className='swiper myBussines__mobile'
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			loop={true}
			modules={[EffectCoverflow]}
			coverflowEffect={{
				rotate: 20,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: true,
			}}
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
			}}
		>
			{business.map(element => (
				<SwiperSlide className='bussines__cards swiper-slide' key={element.id}>
					{i18n.language === 'en' ? t(element.enName) : t(element.esName)}
					<img
						src='./assets/Icons/Servicios_Blanco.svg'
						alt=''
						className='bussines__img bussines__img-desk'
					/>
					<img
						src='./assets/Icons/Servicios_Negro.svg'
						alt=''
						className='bussines__img bussines__img-mobile'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export {ItemBusinessHomePhone};
