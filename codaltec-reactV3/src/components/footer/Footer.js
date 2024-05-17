import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faYoutube,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhone,
    faEnvelope,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./footer.css";

function Footer() {
    const [t] = useTranslation("global");
    return (
        <footer>
            <a 
                    className="whatsapp__button"
                    href="https://wa.me/573006398324"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            <section className="footer">
                
                <div className="footer__container container">
                    <div className="footer__card">
                        <span>
                            <h5>{t("footer.contacto")}</h5>
                            <p>Movil: +57 300 639 8324</p>
                        </span>
                        <span>
                            <h5>EMAIL</h5>
                            <p>info@codaltec.com</p>
                        </span>
                    </div>
                    <div className="footer__card">
                        <span>
                            <h5>{t("footer.horario")}</h5>
                            <p>{t("footer.horarioDias")}</p>
                        </span>
                    </div>
                    <div className="footer__card">
                        <span>
                            <h5>{t("footer.direccion")}</h5>
                            <p>{t("aboutUs.sedePrincipal")}</p>
                            <br />
                            <p>{t("aboutUs.sedeVillavicencio")}</p>
                        </span>
                    </div>
                    <div className="footer__card">
                        <h5>{t("footer.siguenos")}</h5>
                        <ul>
                            <li>
                                <a
                                    href="https://twitter.com/codaltec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/codaltec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/codaltec/?igshid=mipxwbvoqzc2&hl=es-la"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UC9WLtbwdkANGHAr33KnW6pw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__card">
                        <picture>
                            <img src="../assets/Logos/MINDEFENSA.svg" alt="" />
                        </picture>
                        <picture>
                            <img
                                src="../assets/Logos/GESED_Blanco.svg"
                                alt=""
                            />
                        </picture>
                        <a
                            href="https://admin.codaltec.com/"
                            className="buttonLogin"
                        >
                            Login Admin
                        </a>
                    </div>
                </div>
            </section>
            <section className="footer__mobile">
                <div className="container">
                    <a href="tel:">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <span></span>
                    <a href="mailto:">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <span></span>
                    <div className="header__search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" />
                    </div>
                </div>
            </section>
        </footer>
    );
}

export { Footer };
