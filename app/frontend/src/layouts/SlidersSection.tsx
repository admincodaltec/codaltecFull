'use client';

import {useGetSliders} from '@/services/SliderServices';
import {FadeLoader} from 'react-spinners';
import SliderItem from '@/components/home/SliderItem';
import Slider from 'react-slick';
import {useLocale} from 'next-intl';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlidersSection() {
	const currentLocale = useLocale();
	const {sliders, isLoading, error} = useGetSliders();

	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
	};

	return (
		<div className='w-full'>
			{isLoading ? (
				<div className='flex h-screen w-screen justify-center items-center py-6'>
					<FadeLoader color='#EAB308' />
				</div>
			) : error ? (
				<div className='flex h-full w-full justify-center items-center'>
					<p className='text-yellow-500 text-center text-3xl py-3'>
						Se produjo un error, intentelo de nuevo mas tarde!
					</p>
				</div>
			) : sliders.length === 0 ? (
				<Slider {...settings} className='overflow-x-hidden'>
					<SliderItem
						image={'/assets/expociencia-meta.jpeg'}
						title={'CODALTEC'}
						description={'Corporación de Alta Técnologia'}
					/>
				</Slider>
			) : (
				<Slider {...settings} className='overflow-x-hidden'>
					{sliders.map((item, index) => (
						<SliderItem
							key={index}
							image={`${process.env.NEXT_PUBLIC_HOST_URL}/backend/public/images/${item.image}`}
							title={currentLocale === 'es' ? item.esTitle : item.enTitle}
							description={currentLocale === 'es' ? item.esDescription : item.enDescription}
						/>
					))}
				</Slider>
			)}
		</div>
	);
}
