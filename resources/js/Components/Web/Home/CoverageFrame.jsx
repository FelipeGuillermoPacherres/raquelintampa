import React from "react";
import AccentLine from "../Components/AccentLine.jsx";
import ActionButton from "../Components/ActionButton.jsx";
import frameImg from "../../../../../public/img/coverage-frame-img.jpg";
import CoverageModal from "../Components/Modals/CoverageModal.jsx";

export default function CoverageFrame({ lang = "es"}) {

    const areas = [
        "Tampa",
        "Pasco County",
        "Clearwater",
        "St. Petersburg",
        "Brandon",
        "Riverview",
    ];

    const coverageMessage = {
        es: "Hola, Raquel. Me interesa reservar un servicio a domicilio. ¿Podrías confirmarme si atiendes en mi zona?",
        en: "Hi Raquel! I’m interested in booking an at-home service. Could you let me know if you serve my area?",
    };

    const whatsappUrl = `https://wa.me/18138932326?text=${encodeURIComponent(
        coverageMessage[lang] ?? coverageMessage.en
    )}`;

    const frameText = {
        es: {
            subtitle: "CUIDADO A DOMICILIO",
            title: "Tu bienestar, más cerca de ti.",
            description: "Llevamos nuestro cuidado hasta tu hogar en Tampa Bay.",
            areasTitle: "Zonas de servicio en Tampa Bay",
            whatsapp: "Consultar cobertura",
            note: "La disponibilidad depende de tu dirección y del servicio solicitado.",
            imageAlt: "Van de Raquel in Tampa junto al río Hillsborough",
        },
        en: {
            subtitle: "AT-HOME CARE",
            title: "Personalized care, right at home.",
            description: "We bring our services to your home in the Tampa Bay area.",
            areasTitle: "Tampa Bay service areas",
            whatsapp: "Check service availability",
            note: "Availability depends on your address and the service you need.",
            imageAlt: "Raquel in Tampa van by the Hillsborough River",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return (
        <section
            className="coverage-frame p-3 p-xl-5"
            aria-labelledby="coverage-title"
        >
            <div className={'frame-shell'}>
                <div className="coverage-layout">
                    <div className="coverage-copy">
                        <p className="coverage-subtitle">{text.subtitle}</p>
                        <AccentLine />
                        <h2 id="coverage-title">{text.title}</h2>
                        <p>{text.description}</p>
                    </div>

                    <div className="coverage-photo">
                        <img
                            className="coverage-van img-fluid w-100 rounded-4"
                            src={frameImg}
                            alt={text.imageAlt}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="coverage-details">
                        <div className="coverage-areas rounded-4 p-3 text-center">
                            <h3>{text.areasTitle}</h3>

                            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
                                {areas.map((area) => (
                                    <li key={area} className="coverage-area">
                                        <i
                                            className="fa-solid fa-location-dot me-2"
                                            aria-hidden="true"
                                        />
                                        {area}
                                    </li>
                                ))}
                            </ul>

                            <CoverageModal lang={lang} whatsappUrl={whatsappUrl} />
                        </div>

                        <div className="coverage-action mt-4 text-center">
                            <ActionButton
                                className="w-100"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    window.gtag?.('event', 'whatsapp_click', {
                                        placement: 'coverage_modal',
                                    });
                                }}
                            >
                                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                                {text.whatsapp}
                            </ActionButton>

                            <small className="d-block mt-2">{text.note}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
