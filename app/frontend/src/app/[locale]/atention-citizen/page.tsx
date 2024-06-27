'use client';

import {useState} from 'react';
import BannerHeader from '@/components/home/BannerHeader';
import FooterHome from '@/layouts/FooterHome';
import HeaderHome from '@/layouts/HeaderHome';
import CardAtention from '@/components/home/CardAtention';
import styles from '@/styles/Transparency.module.css';
import {FaCaretDown} from 'react-icons/fa';
import Modal from '@/components/home/Modal';

export default function Atention() {
	const [showPqrsModal, setShowPqrsModal] = useState(false);

	const [showRequestModal, setShowRequestModal] = useState(false);

	const [showContactModal, setShowContactModal] = useState(false);
	return (
		<>
			<HeaderHome />

			<Modal title='Registro de PQRSD' show={showPqrsModal} onClose={() => setShowPqrsModal(false)}>
				<form action=''>
					<label className='form-control w-full '>
						<div className='label pb-0'>
							<span className='label-text'>Seleccione el tipo de persona:</span>
						</div>
						<select className='select select-bordered select-sm bg-transparent'>
							<option disabled selected>
								Seleccione una opción
							</option>
							<option>Jurídica</option>
							<option>Natural</option>
						</select>
						<div className='label pb-[4px] h-[16px]'>
							<span className='label-text-alt text-red-600'>Bottom Left label</span>
						</div>
					</label>

					<div className='grid grid-cols-2 gap-4'>
						<label className='form-control w-full '>
							<div className='label pb-0'>
								<span className='label-text'>Nombres:</span>
							</div>
							<input
								type='text'
								placeholder='Nombre'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
						<label className='form-control w-full '>
							<div className='label pb-0'>
								<span className='label-text'>Apellidos:</span>
							</div>
							<input
								type='text'
								placeholder='Apellido'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
					</div>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Seleccione el tipo de documento:</span>
						</div>
						<select className='select select-bordered select-sm  bg-transparent'>
							<option disabled selected>
								Seleccione una opción
							</option>
							<option>Cédula de ciudadania</option>
							<option>Cédula extranjera</option>
							<option>NIT</option>
							<option>NUIP</option>
							<option>Pasaporte</option>
						</select>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>

					<div className='grid grid-cols-2 gap-4'>
						<label className='form-control w-full'>
							<div className='label pb-0'>
								<span className='label-text'>Email:</span>
							</div>
							<input
								type='email'
								placeholder='info@codaltec.com'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
						<label className='form-control w-full'>
							<div className='label pb-0'>
								<span className='label-text'>Teléfono:</span>
							</div>
							<input
								type='number'
								placeholder='Teléfono'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
					</div>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Seleccione el tipo de solicitud:</span>
						</div>
						<select className='select select-bordered select-sm bg-transparent'>
							<option disabled selected>
								Seleccione una opción
							</option>
							<option>Petición</option>
							<option>Queja</option>
							<option>Solicitud</option>
							<option>Recurso</option>
							<option>Denuncia</option>
						</select>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Escriba acerca de la solicitud:</span>
						</div>
						<textarea
							placeholder='Solicitud...'
							className='textarea textarea-bordered textarea-sm w-full resize-none bg-transparent'
						/>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Escriba acerca de la solicitud:</span>
						</div>
						<input
							type='file'
							className='file-input file-input-bordered file-input-sm w-full bg-transparent'
						/>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>
					<p className='text-justify text-xs pb-4'>
						Al enviar la informacion contenida en este formulario, usted acepta la política de
						Habeas Data, conforme lo dispuesto por la Ley 1581 de 2012, Artículo 9°: Autorización
						del Titular; y el Decreto 1377 de 2012, Artículo 7°: Modo de obtener la autorización
					</p>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className='btn btn-warning btn-block '>Enviar</button>
				</form>
			</Modal>

			<Modal
				title='Consulta de PQRSD'
				show={showRequestModal}
				onClose={() => setShowRequestModal(false)}
			>
				<form action=''>
					<label className='form-control w-full '>
						<div className='label pb-0'>
							<span className='label-text'>Ingrese el número del radicado:</span>
						</div>
						<input
							type='text'
							placeholder='Radicado'
							className='input input-bordered w-full input-sm bg-transparent'
						/>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className='btn btn-warning btn-block '>Enviar</button>
				</form>
			</Modal>

			<Modal
				title='Formulario de contacto'
				show={showContactModal}
				onClose={() => setShowContactModal(false)}
			>
				<form action=''>
					<div className='grid grid-cols-2 gap-4'>
						<label className='form-control w-full '>
							<div className='label pb-0'>
								<span className='label-text'>Nombres:</span>
							</div>
							<input
								type='text'
								placeholder='Nombre'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
						<label className='form-control w-full '>
							<div className='label pb-0'>
								<span className='label-text'>Apellidos:</span>
							</div>
							<input
								type='text'
								placeholder='Apellido'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<label className='form-control w-full'>
							<div className='label pb-0'>
								<span className='label-text'>Email:</span>
							</div>
							<input
								type='email'
								placeholder='info@codaltec.com'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
						<label className='form-control w-full'>
							<div className='label pb-0'>
								<span className='label-text'>Teléfono:</span>
							</div>
							<input
								type='number'
								placeholder='Teléfono'
								className='input input-bordered w-full input-sm bg-transparent'
							/>
							<div className='label  pb-[4px] h-[16px]'>
								{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
							</div>
						</label>
					</div>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Área de interes:</span>
						</div>
						<select className='select select-bordered select-sm bg-transparent'>
							<option disabled selected>
								Seleccione una opción
							</option>
							<option>Radares e inhibidores</option>
							<option>Simuladores</option>
							<option>Servicios</option>
							<option>Consultorias</option>
							<option>Administración de recursos</option>
							<option>Garantia y soporte</option>
							<option>Seguridad electronica</option>
							<option>I + D + i</option>
							<option>Ventas</option>
							<option>Jurídica</option>
							<option>Financiera</option>
							<option>Otras</option>
						</select>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Observaciones o comentario:</span>
						</div>
						<textarea
							placeholder='Solicitud...'
							className='textarea textarea-bordered textarea-sm w-full resize-none bg-transparent'
						/>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>

					<label className='form-control w-full'>
						<div className='label pb-0'>
							<span className='label-text'>Escriba acerca de la solicitud:</span>
						</div>
						<input
							type='file'
							className='file-input file-input-bordered file-input-sm w-full bg-transparent'
						/>
						<div className='label  pb-[4px] h-[16px]'>
							{/* <span className='label-text-alt text-red-600'>Bottom Left label</span> */}
						</div>
					</label>
					<p className='text-justify text-xs pb-4'>
						Al enviar la informacion contenida en este formulario, usted acepta la política de
						Habeas Data, conforme lo dispuesto por la Ley 1581 de 2012, Artículo 9°: Autorización
						del Titular; y el Decreto 1377 de 2012, Artículo 7°: Modo de obtener la autorización
					</p>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className='btn btn-warning btn-block '>Enviar</button>
				</form>
			</Modal>

			<main className={`${styles.transparency__content} min-h-[60vh]`}>
				<BannerHeader title='ATENCIÓN AL CLIENTE' />
				<section className='container py-6'>
					<article className='p-4 bg-black rounded-lg'>
						<p className='text-white'>
							Ayúdanos a mejorar, en esta sección usted podrá radicar, hacer seguimiento y consultar
							los informes de sus PQRSD relacionadas con nuestros servicios. Para el CODALTEC es
							importante atender sus requerimientos, solicitudes de información o documentos,
							calificar un servicio, proponer acciones de mejora o elevar una denuncia (C.P.C. - Ley
							1755 de 2015).
						</p>
					</article>
					<article className='flex gap-5 items-center my-8 flex-col md:flex-row'>
						<h3 className='font-bold text-2xl text-white'>SELECCIONE LA OPCIÓN A DILIGENCIAR</h3>
						<FaCaretDown className='text-yellow-500 text-2xl  invisible md:visible' />
						<span className='block w-full md:w-1/2 h-1 bg-[#4f4f4f]' />
					</article>
					<div
						className={`grid gap-10 grid-cols-3 justify-center px-12 pb-10 ${styles.transparency__section}`}
					>
						<CardAtention title='REGISTRO DE PQRSD' onClick={() => setShowPqrsModal(true)} />

						<CardAtention title='CONSULTAR DE PQRSD' onClick={() => setShowRequestModal(true)} />

						<CardAtention
							title='FORMULARIO DE CONTACTO'
							onClick={() => setShowContactModal(true)}
						/>
					</div>
				</section>
			</main>
			<FooterHome />
		</>
	);
}
