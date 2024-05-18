import * as Yup from 'yup';

export const PqrsdSchema = Yup.object().shape({
	personType: Yup.string().required('Seleccione una opción'),
	names: Yup.string().min(3, 'Digíte un nombre valido').required('Digíte los nombres'),
	lastNames: Yup.string().min(3, 'Digíte un apellido valido').required('Digíte los apellidos'),
	documentType: Yup.string().required('Seleccione una opción'),
	document: Yup.number()
		.min(7, 'Digíte un número de documento valido')
		.required('Digíte el número de documento'),
	email: Yup.string().email('Digite un email valido').required('Digíte el email'),
	phone: Yup.number()
		.min(7, 'Digíte un número de documento valido')
		.required('Digíte el numero de teléfono'),
	typeRequest: Yup.string().required('Seleccione una opción'),
	description: Yup.string()
		.min(10, 'Digíte una descripción valida')
		.max(256)
		.required('Digíte una descripción'),
});
