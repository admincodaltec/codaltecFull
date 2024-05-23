import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import CardTransparency from '@/components/home/CardTransparency';
import {FaCaretDown} from 'react-icons/fa';
import styles from '@/styles/Transparency.module.css';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Transparencia',
};

export default function Transparency() {
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[60vh]`}>
				<BannerHeader title='TRANSPARENCIA' />
				<section className='container py-6'>
					<article className='p-4 bg-black rounded-lg'>
						<p className='text-white'>
							En cumplimiento de la Ley de Transparencia y del derecho de acceso a la información
							pública, Ley 1712 de marzo 6 de 2014 y la Resolución 1519 de 2020 emanada por el
							MINTIC, CODALTEC pone a disposición de la ciudadanía , información de interés general
							en los siguientes asuntos:
						</p>
					</article>
					<article className='flex gap-5 items-center my-8'>
						<h3 className='font-bold text-2xl text-white'>CONOCE MÁS</h3>
						<FaCaretDown className='text-yellow-500 text-2xl' />
						<span className='block w-3/4 h-1 bg-[#4f4f4f]' />
					</article>
					<div className='grid gap-6 grid-cols-3 justify-center px-12'>
						<CardTransparency
							link='/home/transparency/contracts'
							title='CONTRATACIÓN'
							text='La Corporación de Alta Tecnología para la Defensa, es una entidad de naturaleza civil, de derecho privado y sin ánimo de lucro, la cual podrá ser conformada tanto por entidades de carácter público como de carácter privado, reguladas en los artículos 1 y 3 del Decreto Ley 393 de 1991, en concordancia con lo establecido en el artículo 633 y subsiguientes del Código Civil. De naturaleza especial, dotada de personería jurídica, autonomía administrativa y capital independiente, de conformidad con el Documento Privado de Constitución. Es una entidad descentralizada indirecta que hace parte del Grupo Social y Empresarial del Sector Defensa - GSED.'
						/>
						<CardTransparency
							link='/home/transparency/internal-control'
							title='CONTROL INTERNO'
							text='CODALTEC trabaja en la consolidación de un Sistema de Control Interno, integrado por el esquema de organización y el conjunto de planes, métodos, principios, normas, procedimientos y mecanismos de verificación y evaluación corporativos para el logro de las metas y objetivos propuestos en el plan estratégico A continuación, encontrara enlaces de información relevante en esta materia.'
						/>
						<CardTransparency
							link='/home/transparency/financials'
							title='INFORMACIÓN FINANCIERA'
							text='En esta sección encontrarás la siguiente información: Estados financieros y sus notas. Permanencia Régimen Tributario Especial RTE. Dictamen del revisor fiscal.'
						/>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
