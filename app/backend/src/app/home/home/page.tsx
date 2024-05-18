'use client';

import Link from 'next/link';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import SliderItem from '@/components/home/SliderItem';
import styles from '@/styles/Home.module.css';
import {FaChevronRight} from 'react-icons/fa';
import {Metadata} from 'next';

import PostsSection from '@/layouts/PostsSection';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		pauseOnHover: false,
	};

	return (
		<>
			<HeaderHome />
			<main>
				<section className='h-screen '>
					<Slider {...settings} className='overflow-x-hidden'>
						<SliderItem
							image={'/assets/expociencia-meta.jpeg'}
							title={'Esto es un testeo para el primer slider'}
							description={'Ahoasdasd asda sd a'}
						/>
						<SliderItem
							image={'/assets/CAPACITACION_BC.jpg'}
							title={'Capacitación dada por NASA'}
							description={'Ahoasdasd asda sd a'}
						/>
					</Slider>
				</section>
				<section className={styles.bussines}>
					<div className={`${styles.bussines__container} container mx-auto h-full`}>
						<div className={styles.bussines__container_left}>
							<h2 className={`${styles} text-3xl font-bold text-yellow-500`}>LÍNEAS DE NEGOCIO</h2>
							<article className={`${styles} text-lg text-white text-justify`}>
								En esta sección encontrarás el portafolio de productos y servicios que tiene nuestra
								corporación al servicio de nuestro país.
							</article>
							<Link
								className='flex items-center justify-end text-white text-2xl text-end'
								href={'/home'}
							>
								CONOCE NUESTRAS CAPACIDADES <FaChevronRight className='text-yellow-500 text-4xl' />
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.posts}>
					<div className={`${styles.posts__container} container mx-auto`}>
						<div>
							<h2 className={'text-6xl font-bold text-yellow-500'}>
								<span className='text-white text-4xl'>ÚLTIMAS</span>
								<br />
								NOTICIAS
							</h2>
							<Link className='text-white underline' href={'/home/posts'}>
								VER MÁS NOTICIAS
							</Link>
						</div>
						<PostsSection ulClassName={styles.bussines__container_right} maxPostsToShow={3} />
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
