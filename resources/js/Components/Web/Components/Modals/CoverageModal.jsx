import React, { useId, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ActionButton from "../ActionButton.jsx";
import AccentLine from "../AccentLine.jsx";
import mapSrc from "../../../../../../public/img/coverage-map-img.jpg"

export default function CoverageModal({lang = 'es', whatsappUrl}){
    const [showModal, setShowModal] = useState(false);
    const modalTitleId = useId();

    const modalText = {
        es: {
            mapButton: "Ver mapa de cobertura",
            title: "Nuestra cobertura en Tampa Bay",
            subtitle: "Cuidado a domicilio, cerca de ti.",
            mapAlt: "Mapa de Tampa Bay con Tampa, Pasco County, Clearwater, St. Petersburg, Brandon y Riverview señalados.",
            caption: "Mapa orientativo de zonas de servicio",
            notice: "Consulta la disponibilidad para tu dirección y el servicio que necesitas.",
            whatsapp: "Consultar mi dirección",
            close: "Cerrar",
        },
        en: {
            mapButton: "View coverage map",
            title: "Our Tampa Bay service area",
            subtitle: "Personalized care, right at home.",
            mapAlt: "Map of Tampa Bay marking Tampa, Pasco County, Clearwater, St. Petersburg, Brandon, and Riverview.",
            caption: "Map of general service areas",
            notice: "Check availability for your address and the service you need.",
            whatsapp: "Check availability at my address",
            close: "Close",
        },
    };

    const text = modalText[lang] ?? modalText.en;

    return(
        <>
            <button
                type="button"
                className="coverage-map-button btn btn-link"
                aria-haspopup="dialog"
                onClick={() => setShowModal(true)}
            >
                <i className="fa-regular fa-map me-2" aria-hidden="true" />
                {text.mapButton}
            </button>

            <Modal
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                scrollable
                className="coverage-modal"
                aria-labelledby={modalTitleId}
            >
                <Modal.Header closeButton closeLabel={text.close}>
                    <div className="coverage-modal-heading">
                        <span className="coverage-modal-icon" aria-hidden="true">
                            <i className="fa-regular fa-map" />
                        </span>

                        <div>
                            <Modal.Title as="h2" id={modalTitleId}>
                                {text.title}
                            </Modal.Title>
                            <p className="coverage-modal-subtitle">
                                {text.subtitle}
                            </p>
                            <AccentLine />
                        </div>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <figure className="coverage-modal-figure">
                        <img
                            className="coverage-modal-map"
                            src={mapSrc}
                            alt={text.mapAlt}
                            decoding="async"
                        />
                        <figcaption>{text.caption}</figcaption>
                    </figure>

                    <div className="coverage-modal-notice">
                        <i className="fa-solid fa-circle-info" aria-hidden="true" />
                        <p>{text.notice}</p>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <ActionButton
                        className="w-100"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                        {text.whatsapp}
                    </ActionButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}
