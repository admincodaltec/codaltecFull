import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "./atention.css";

import { Modal } from "../modal/Modal";

function Atention() {
    const [t] = useTranslation("global");
    // Estados ventanas modales
    const [statePqrs, setStatePqrs] = useState(false);
    const [stateAnonymous, setStateAnonymous] = useState(false);
    const [stateQuery, setStateQuery] = useState(false);
    const [stateContact, setStateContact] = useState(false);

    // Estados inputs Formulario PQRS General
    const [personPqrsd, setPersonPqrsd] = useState("");
    const [namePqrsd, setNamePqrsd] = useState("");
    const [apellidosPqrsd, setApellidosPqrsd] = useState("");
    const [typedocumentPqrsd, setTypedocumentPqrsd] = useState("");
    const [documentPqrsd, setDocumentPqrsd] = useState("");
    const [subjectPqrsd, setSubjectPqrsd] = useState("");
    const [emailPqrsd, setEmailPqrsd] = useState("");
    const [phonePqrsd, setPhonePqrsd] = useState("");
    const [descriptionPqrsd, setDescriptionPqrsd] = useState("");
    const [filePqrsd, setFilePqrsd] = useState("");

    const onInputFileChangePqrsd = (e) => {
        console.log(e.target.files[0]);
        setFilePqrsd(e.target.files[0]);
    };

    // Estados inputs Formulario Anonimo
    const [subjectAnonymous, setSubjectAnonymous] = useState("");
    const [emailAnonymous, setEmailAnonymous] = useState("");
    const [phoneAnonymous, setPhoneAnonymous] = useState("");
    const [descriptionAnonymous, setDescriptionAnonymous] = useState("");
    const [fileAnonymous, setFileAnonymous] = useState("");

    const onInputFileChange = (e) => {
        console.log(e.target.files[0]);
        setFileAnonymous(e.target.files[0]);
    };

    // Estados inputs Formulario Contact
    const [nameContact, setNameContact] = useState("");
    const [apellidosContact, setApellidosContact] = useState("");
    const [emailContact, setEmailContact] = useState("");
    const [phoneContact, setPhoneContact] = useState("");
    const [subjectContact, setSubjectContact] = useState("");
    const [descriptionContact, setDescriptioContact] = useState("");

    // Estado input Formulario Query
    const [valueQuery, setValueQuery] = useState("");
    // const [query, setQuery] = useState('');

    //Post API
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    const clearForm = () => {
        setNameContact("");
        setApellidosContact("");
        setEmailContact("");
        setPhoneContact("");
        setSubjectContact("");
    };

    const onSubmitPqrsd = async (e) => {
        e.preventDefault();
        const dataFile = new FormData();
        dataFile.append("state", "Recibido");
        dataFile.append("typePerson", personPqrsd);
        dataFile.append("name", namePqrsd);
        dataFile.append("apellidos", apellidosPqrsd);
        dataFile.append("typeDocument", typedocumentPqrsd);
        dataFile.append("document", documentPqrsd);
        dataFile.append("email", emailPqrsd);
        dataFile.append("phone", phonePqrsd);
        dataFile.append("subject", subjectPqrsd);
        dataFile.append("description", descriptionPqrsd);
        dataFile.append("file", filePqrsd);

        await axios
            .post(
                "https://codaltec-api.website:3000/api/v1/pqrs",
                dataFile,
                config
            )
            .then(function (res) {
                console.log(res);
                Swal.fire({
                    title: "Envio exitoso",
                    icon: "success",
                    html: `<p style='font-size:16px;'>Su PQRS ha sido enviada con exito. 
						Por favor guarde el siguiente número de radicado: </p>
						<p style='font-size:18px; font-weight: bold'>${res.data.id}</p>`,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then((response) => {
                    if (response.isConfirmed) {
                        window.location.reload();
                    }
                });
            })
            .catch(function (error) {
                Swal.fire(
                    "Error!",
                    error,
                    "Por favor verifique que los campos este correctos."
                );
            });
    };

    const onSubmitContact = async (e) => {
        e.preventDefault();
        const dataContact = {
            name: nameContact,
            apellidos: apellidosContact,
            email: emailContact,
            phone: phoneContact,
            subject: subjectContact,
            description: descriptionContact,
        };

        let timerInterval;
        Swal.fire({
            title: "Espere un momento por favor",
            timer: 2000,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        });

        await axios
            .post(
                "https://codaltec-api.website:3000/api/v1/contact",
                dataContact
            )
            .then(function (res) {
                console.log(res);
                Swal.fire({
                    title: "Envio exitoso",
                    icon: "success",
                    text: "Su solicitud ha sido enviada",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then((response) => {
                    if (response.isConfirmed) {
                        clearForm();
                    }
                });
            })
            .catch(function (error) {
                Swal.fire(
                    "Error!",
                    "Por favor verifique que los campos este correctos."
                );
            });
    };

    const onSubmitAnonymous = async (e) => {
        e.preventDefault();
        const dataFile = new FormData();
        dataFile.append("typePerson", "Anonimo");
        dataFile.append("typeDocument", "Anonimo");
        dataFile.append("state", "Recibido");
        dataFile.append("name", "Anonimo");
        dataFile.append("document", "Anonimo");
        dataFile.append("apellidos", " ");
        dataFile.append("subject", subjectAnonymous);
        dataFile.append("email", emailAnonymous);
        dataFile.append("phone", phoneAnonymous);
        dataFile.append("description", descriptionAnonymous);
        dataFile.append("file", fileAnonymous);

        await axios
            .post(
                "https://codaltec-api.website:3000/api/v1/pqrs",
                dataFile,
                config
            )
            .then(function (res) {
                console.log(res);
                Swal.fire({
                    title: "Envio exitoso",
                    icon: "success",
                    html: `<p style='font-size:16px;'>Su PQRS ha sido enviada con exito. 
						Por favor guarde el siguiente número de radicado: </p>
						<p style='font-size:18px; font-weight: bold'>${res.data.id}</p>`,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then((response) => {
                    if (response.isConfirmed) {
                        window.location.reload();
                    }
                });
            })
            .catch(function (error) {
                Swal.fire(
                    "Error!",
                    error,
                    "Por favor verifique que los campos este correctos."
                );
            });
    };

    const onSubmitQuery = async (e) => {
        e.preventDefault();

        await axios
            .get(`https://codaltec-api.website:3000/api/v1/pqrs/${valueQuery}`)
            .then(function (res) {
                if (res.data.hasOwnProperty("data")) {
                    Swal.fire({
                        title: "¡AVISO!",
                        icon: "warning",
                        html: "<p style=font-size:14px;>La PQRSD no fue encontrada, intentelo de nuevo.</p>",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                    });
                } else {
                    Swal.fire({
                        html: `<p style='font-size:18px; font-weight: bold; text-align:center '>Información de la PQRSD</p></br>
							<p style='font-size:14px; text-align: left'><strong style=font-size:14px>Estado de la PQRSD: </strong> ${res.data.state} </p></br>
							<p style='font-size:14px; text-align: left'><strong style=font-size:14px>Respuesta de la PQRSD: </strong> ${res.data.answer} </p>`,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section className="atention">
            <Modal stateModal={statePqrs} changeStateModal={setStatePqrs}>
                <h3>REGISTRO DE PQRSD</h3>
                <button
                    className="modal__change"
                    onClick={() => {
                        setStateAnonymous(!stateAnonymous);
                        setStatePqrs(!statePqrs);
                    }}
                >
                    ANÓNIMO
                </button>
                <form method="post">
                    <div className="form__group">
                        <label>Seleccione el tipo de persona:</label>
                        <select
                            name="personPqrsd"
                            onChange={(e) => setPersonPqrsd(e.target.value)}
                        >
                            <option value="0">Seleccione una opción</option>
                            <option value="Jurídica">Jurídica</option>
                            <option value="Natural">Natural</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Nombres:*</label>
                        <input
                            type="text"
                            name="namePqrsd"
                            onChange={(e) => setNamePqrsd(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Apellidos:*</label>
                        <input
                            type="text"
                            name="apellidosPqrsd"
                            onChange={(e) => setApellidosPqrsd(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Seleccione el tipo de documento:</label>
                        <select
                            name="typedocumentPqrsd"
                            onChange={(e) =>
                                setTypedocumentPqrsd(e.target.value)
                            }
                        >
                            <option value="0">Seleccione una opción</option>
                            <option value="Cedula ciudadania">
                                Cédula de ciudadania
                            </option>
                            <option value="Cedula extranjeria">
                                Cédula de extranjería
                            </option>
                            <option value="NIT">NIT</option>
                            <option value="NUIP">NUIP</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Número de documento:*</label>
                        <input
                            type="number"
                            name="documentPqrsd"
                            onChange={(e) => setDocumentPqrsd(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Email:*</label>
                        <input
                            type="email"
                            name="emailPqrsd"
                            onChange={(e) => setEmailPqrsd(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Teléfono:*</label>
                        <input
                            type="number"
                            name="phonePqrsd"
                            onChange={(e) => setPhonePqrsd(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Tipo de solicitud:</label>
                        <select
                            name="subjectPqrsd"
                            onChange={(e) => setSubjectPqrsd(e.target.value)}
                        >
                            <option value="0">Seleccione una opción</option>
                            <option value="Petición">Petición</option>
                            <option value="Queja">Queja</option>
                            <option value="Recurso">Recurso</option>
                            <option value="Solicitud">Solicitud</option>
                            <option value="Denuncia">Denuncia</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Escriba acerca de la solicitud:*</label>
                        <textarea
                            name="descriptionPqrsd"
                            onChange={(e) =>
                                setDescriptionPqrsd(e.target.value)
                            }
                        ></textarea>
                    </div>
                    <input
                        className="input-file"
                        type="file"
                        name="file"
                        onChange={onInputFileChangePqrsd}
                    />
                    <p>
                        Al enviar la informacion contenida en este formulario,
                        usted acepta la política de Habeas Data, conforme lo
                        dispuesto por la Ley 1581 de 2012, Artículo 9°:
                        Autorización del Titular; y el Decreto 1377 de 2012,
                        Artículo 7°: Modo de obtener la autorización
                    </p>
                    <button
                        className="modal__send"
                        type="submit"
                        onClick={onSubmitPqrsd}
                    >
                        ENVIAR
                    </button>
                </form>
            </Modal>
            <Modal
                stateModal={stateAnonymous}
                changeStateModal={setStateAnonymous}
            >
                <h3>REGISTRO DE PQRSD</h3>
                <button
                    className="modal__change"
                    onClick={() => {
                        setStateAnonymous(!stateAnonymous);
                        setStatePqrs(!statePqrs);
                    }}
                >
                    A NOMBRE PROPIO
                </button>
                <form method="post">
                    <div className="form__group">
                        <label>Tipo de solicitud: {subjectAnonymous}</label>
                        <select
                            name="subjectAnonymous"
                            onChange={(e) =>
                                setSubjectAnonymous(e.target.value)
                            }
                        >
                            <option value="0">Seleccione una opción</option>
                            <option value="Peticion">Petición</option>
                            <option value="Queja">Queja</option>
                            <option value="Recurso">Recurso</option>
                            <option value="Solicitud">Solicitud</option>
                            <option value="Denuncia">Denuncia</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Email:*</label>
                        <input
                            type="email"
                            name="emailAnonymous"
                            onChange={(e) => setEmailAnonymous(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Otro medio de notificación:*</label>
                        <input
                            type="text"
                            name="phoneAnonymous"
                            onChange={(e) => setPhoneAnonymous(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Escriba acerca de la solicitud:*</label>
                        <textarea
                            name="descriptionAnonymous"
                            onChange={(e) =>
                                setDescriptionAnonymous(e.target.value)
                            }
                        ></textarea>
                    </div>
                    <input
                        className="input-file"
                        type="file"
                        name="file"
                        onChange={onInputFileChange}
                    />

                    <p>
                        Al enviar la informacion contenida en este formulario,
                        usted acepta la política de Habeas Data, conforme lo
                        dispuesto por la Ley 1581 de 2012, Artículo 9°:
                        Autorización del Titular; y el Decreto 1377 de 2012,
                        Artículo 7°: Modo de obtener la autorización
                    </p>
                    <button
                        className="modal__send"
                        type="submit"
                        onClick={onSubmitAnonymous}
                    >
                        ENVIAR
                    </button>
                </form>
            </Modal>
            <Modal stateModal={stateContact} changeStateModal={setStateContact}>
                <h3>FORMULARIO DE CONTACTO</h3>
                <form method="post">
                    <div className="form__group">
                        <label>Nombres:*</label>
                        <input
                            type="text"
                            name="nameContact"
                            onChange={(e) => setNameContact(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Apellido:*</label>
                        <input
                            type="text"
                            name="apellidosContact"
                            onChange={(e) =>
                                setApellidosContact(e.target.value)
                            }
                        />
                    </div>
                    <div className="form__group">
                        <label>Email:*</label>
                        <input
                            type="email"
                            name="emailContact"
                            onChange={(e) => setEmailContact(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Teléfono:*</label>
                        <input
                            type="number"
                            name="phoneContact"
                            onChange={(e) => setPhoneContact(e.target.value)}
                        />
                    </div>
                    <div className="form__group">
                        <label>Área de interes: {subjectContact}</label>
                        <select
                            name="subject"
                            onChange={(e) => setSubjectContact(e.target.value)}
                        >
                            <option value="0">Seleccione una opción</option>
                            <option value="Radares e inhibidores">
                                Radares e inhibidores
                            </option>
                            <option value="Simuladores">Simuladores</option>
                            <option value="Servicios">Servicios</option>
                            <option value="Consultorias">Consultorias</option>
                            <option value="Administración de recursos">
                                Administración de recursos
                            </option>
                            <option value="Garantia y soporte">
                                Garantia y soporte
                            </option>
                            <option value="Seguridad electronica">
                                Seguridad electronica
                            </option>
                            <option value="I + D + i">I + D + i</option>
                            <option value="Ventas">Ventas</option>
                            <option value="Jurídica">Jurídica</option>
                            <option value="Financiera">Financiera</option>
                            <option value="Otras">Otras</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Observación:*</label>
                        <textarea
                            name="descriptionContact"
                            onChange={(e) =>
                                setDescriptioContact(e.target.value)
                            }
                        ></textarea>
                    </div>
                    <p>
                        Al enviar la informacion contenida en este formulario,
                        usted acepta la política de Habeas Data, conforme lo
                        dispuesto por la Ley 1581 de 2012, Artículo 9°:
                        Autorización del Titular; y el Decreto 1377 de 2012,
                        Artículo 7°: Modo de obtener la autorización
                    </p>
                    <button
                        type="submit"
                        className="modal__send"
                        onClick={onSubmitContact}
                    >
                        ENVIAR
                    </button>
                </form>
            </Modal>
            <Modal stateModal={stateQuery} changeStateModal={setStateQuery}>
                <h3>CONSULTAR PQRSD</h3>
                <form>
                    <div className="form__group">
                        <label>Ingrese el radicado</label>
                        <input
                            type="text"
                            name="valueQuery"
                            onChange={(e) => setValueQuery(e.target.value)}
                        />
                    </div>
                    <button
                        className="modal__send"
                        type="submit"
                        onClick={onSubmitQuery}
                    >
                        CONSULTAR
                    </button>
                </form>
            </Modal>

            <div className="container">
                <h1>{t("pqrs.title")}</h1>
                <article className="atention__article">
                    <p>{t("pqrs.description")}</p>
                </article>
                <div className="atentionItems">
                    <div className="atentionItems__top">
                        <h2>
                            {t("pqrs.subtitle")}{" "}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </h2>
                        <span></span>
                    </div>
                    <div className="atentionItems__down">
                        <button
                            className="atention__item"
                            onClick={() => setStatePqrs(!statePqrs)}
                        >
                            <div className="atention__item-header">
                                <h3>{t("pqrs.title1")}</h3>
                            </div>
                            <div className="atention__item-body">
                                <p>{t("pqrs.subtitleButton")}</p>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        </button>
                        <button
                            className="atention__item"
                            onClick={() => setStateQuery(!stateQuery)}
                        >
                            <div className="atention__item-header">
                                <h3>{t("pqrs.title2")}</h3>
                            </div>
                            <div className="atention__item-body">
                                <p>{t("pqrs.subtitleButton")}</p>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        </button>
                        <button
                            className="atention__item"
                            onClick={() => setStateContact(!stateContact)}
                        >
                            <div className="atention__item-header">
                                <h3>{t("pqrs.title3")}</h3>
                            </div>
                            <div className="atention__item-body">
                                <p>{t("pqrs.subtitleButton")}</p>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// const validateContact = (
// 	nameContact,
// 	apellidosContact,
// 	emailContact,
// 	phoneContact,
// 	subjectContact,
// 	descriptionContact
// ) => {
// 	const nameRgx = RegExp(/^[a-zA-Z\s]{4,32}$/);
// 	const emailRgx = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
// 	const phoneRgx = RegExp(/^\d{7,14}$/);
// 	const descriptionRgx = RegExp(/^[a-zA-Z\s\d+.,_"&;:\-?${}()|[\]\\]{10,255}$/);
// 	if (
// 		!(
// 			nameRgx.test(nameContact) &&
// 			nameRgx.test(apellidosContact) &&
// 			emailRgx.test(emailContact) &&
// 			phoneRgx.test(phoneContact) &&
// 			nameRgx.test(subjectContact) &&
// 			descriptionRgx.test(descriptionContact)
// 		)
// 	) {
// 		Swal.fire('Error!', 'Por favor verifique que los campos esten correctos.');
// 	} else {
// 		return true;
// 	}
// };

export { Atention };
