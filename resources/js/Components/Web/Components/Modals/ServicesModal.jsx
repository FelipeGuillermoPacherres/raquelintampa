import React, { useId, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ActionButton from "../ActionButton.jsx";

export default function ServicesModal({
  data,
  lang = "es",
}) {
    const [showModal, setShowModal] = useState(false);
    const modalTitleId = useId();

    const frameText = {
        es: {
            packagesLabel: "SESIONES Y PAQUETES",
            viewOptions: "Ver opciones",
            viewServices: "Ver servicios",
            priceDisclaimer:
                "Se muestran precios iniciales. El precio final puede variar según el servicio.",
            sessionsDisclaimer:
                "La cantidad y frecuencia de las sesiones se determinan según tus necesidades y una evaluación individual. Para el cuidado postoperatorio, también se tendrán en cuenta las indicaciones de tu cirujano. Consulta con Raquel antes de elegir un paquete.",
            pendingPrice: "Por confirmar",
            customPrice: "Consultar",
            whatsapp: "Consultar con Raquel",
            squareNote: "Reservas y pagos con Square",
            close: "Cerrar",
        },
        en: {
            packagesLabel: "SESSIONS & PACKAGES",
            viewOptions: "Explore options",
            viewServices: "View services",
            priceDisclaimer:
                "Starting prices are shown. Final pricing may vary depending on the service.",
            sessionsDisclaimer:
                "The number and frequency of sessions depend on your needs and an individual assessment. For post-op care, your surgeon's instructions will also guide the plan. Please check with Raquel before choosing a package.",
            pendingPrice: "To be confirmed",
            customPrice: "Contact us",
            whatsapp: "Chat with Raquel",
            squareNote: "Booking & payments powered by Square",
            close: "Close",
        },
    };

    const currentLang = lang === "es" ? "es" : "en";
    const text = frameText[currentLang];
    const categoryName = data.name[currentLang] ?? data.name.en;

    const hasSessions = data.hasSessions === true;
    const isPackageCategory = data.pricingType === "packages";

    const whatsappMessages = hasSessions
        ? {
            es: `Hola, Raquel. Me interesan tus sesiones y paquetes de ${categoryName}. ¿Podrías contarme qué opciones tienes y qué incluye cada una?`,
            en: `Hi Raquel! I’m interested in your ${categoryName} sessions and packages. Could you tell me what options you offer and what’s included?`,
        }
        : {
            es: `Hola, Raquel. Me interesa uno de tus servicios de ${categoryName}. ¿Podrías darme más información?`,
            en: `Hi Raquel! I’m interested in one of your ${categoryName} services. Could you tell me a little more about your options?`,
        };

    const serviceWhatsappUrl = `https://wa.me/18138932326?text=${encodeURIComponent(
        whatsappMessages[currentLang]
    )}`;

    const description =
        data.description?.[currentLang] ?? data.description?.en;

    const imageAlt =
        typeof data.imgAlt === "string"
            ? data.imgAlt
            : data.imgAlt?.[currentLang] ??
            data.imgAlt?.en ??
            categoryName;

    const currencyFormatter = new Intl.NumberFormat(
        currentLang === "es" ? "es-US" : "en-US",
        {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
        }
    );

    const formatPrice = (service) => {
        if (service.isCustom) {
            return text.customPrice;
        }

        if (Array.isArray(service.price)) {
            return service.price.length
                ? service.price
                    .map((price) => currencyFormatter.format(price))
                    .join(" / ")
                : text.pendingPrice;
        }

        if (service.price == null) {
            return text.pendingPrice;
        }

        return currencyFormatter.format(service.price);
    };

    return (
        <>
            <button
                type="button"
                className="service-card"
                onClick={() => setShowModal(true)}
                aria-haspopup="dialog"
            >
                <div className="service-card-image position-relative">
                    <img
                        className="w-100"
                        src={data.img}
                        alt={imageAlt}
                        loading="lazy"
                        decoding="async"
                    />

                    {hasSessions && (
                        <span className="category-badge position-absolute top-0 start-0 m-2">
                            {text.packagesLabel}
                        </span>
                    )}
                </div>

                <h3 className="service-card-title mt-3">
                    {categoryName}
                </h3>

                <span className="service-card-link">
                    {hasSessions
                        ? text.viewOptions
                        : text.viewServices}

                    <i
                        className="fa-solid fa-arrow-right ms-2"
                        aria-hidden="true"
                    />
                </span>
            </button>

            <Modal
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                scrollable
                className="services-modal"
                aria-labelledby={modalTitleId}
            >
                <Modal.Header
                    className="border-0 align-items-start"
                    closeButton
                    closeLabel={text.close}
                >
                    <div className="d-flex align-items-start pe-2">
                        <span className="icon me-3" aria-hidden="true">
                            <i className={data.icon} />
                        </span>

                        <div>
                            {hasSessions && (
                                <span className="category-badge d-inline-block mb-2">
                                    {text.packagesLabel}
                                </span>
                            )}

                            <Modal.Title
                                as="h2"
                                id={modalTitleId}
                            >
                                {categoryName}
                            </Modal.Title>

                            {description && (
                                <p className="modal-description mt-2 mb-0">
                                    {description}
                                </p>
                            )}

                            {!isPackageCategory && (
                                <p className="modal-price-note mt-2 mb-0">
                                    {text.priceDisclaimer}
                                </p>
                            )}
                        </div>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <ul className="services-list list-unstyled mb-0">
                        {data.services.map((service, index) => (
                            <li
                                key={index}
                                className="d-flex justify-content-between align-items-center gap-3 py-3"
                            >
                                <div className="service-details">
                                    <span className="service-name">
                                        {service[currentLang] ??
                                            service.en}
                                    </span>

                                    {service.duration != null && (
                                        <small className="service-duration d-block mt-1">
                                            {service.duration} min
                                        </small>
                                    )}
                                </div>

                                <span className="service-price fw-bold text-end flex-shrink-0">
                                    {formatPrice(service)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {isPackageCategory && (
                        <div className="services-disclaimer d-flex align-items-start gap-3 mt-4">
                            <i
                                className="fa-solid fa-circle-info mt-1"
                                aria-hidden="true"
                            />
                            <p className="mb-0">
                                {text.sessionsDisclaimer}
                            </p>
                        </div>
                    )}
                </Modal.Body>

                <Modal.Footer className="border-0 flex-column align-items-stretch">
                    <ActionButton
                        className="services-button w-100"
                        href={serviceWhatsappUrl}
                        target="_blank"
                    >
                        <i
                            className="fa-brands fa-whatsapp"
                            aria-hidden="true"
                        />
                        {text.whatsapp}
                    </ActionButton>

                    <small className="services-square-note text-center mt-2">
                        {text.squareNote}
                    </small>
                </Modal.Footer>
            </Modal>
        </>
    );
}
