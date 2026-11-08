import React from "react";
import ActionButton from "../Components/ActionButton.jsx";
import AccentLine from "../Components/AccentLine.jsx";

export default function HeroFrame({url, lang = "es"}) {
    const frameText = {
        es: {
            subtitle: "CUIDADO PERSONALIZADO EN TAMPA BAY",
            hero: "Tu bienestar,",
            bhero: "en buenas manos.",
            heroDescription:
                "Drenaje linfático y cuidado postoperatorio, con atención cercana y personalizada.",
            button: "Reservar mi cita",
            whatsapp: "Consultar por WhatsApp",
            benefit1: "Atención personalizada",
            benefit2: "Servicio a domicilio en Tampa Bay",
            benefit3: "Reserva online fácil y segura",
            imageAlt: "Raquel dando la bienvenida a una clienta",
        },
        en: {
            subtitle: "PERSONALIZED CARE IN TAMPA BAY",
            hero: "Feel cared for.",
            bhero: "Every step of the way.",
            heroDescription:
                "From lymphatic drainage to post-op care, we're here to help you feel supported with personal attention and a gentle touch.",
            button: "Book your visit",
            whatsapp: "Chat with us on WhatsApp",
            benefit1: "Care tailored to you",
            benefit2: "At-home visits across Tampa Bay",
            benefit3: "Easy, secure online booking",
            imageAlt: "Raquel welcoming a client",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const heroImageStyle = {
        backgroundImage: `url(${url}/img/hero-frame-img.jpg)`,
    };

    const benefits = [
        { icon: "fa-solid fa-spa", label: text.benefit1 },
        { icon: "fa-solid fa-house", label: text.benefit2 },
        { icon: "fa-regular fa-calendar-check", label: text.benefit3 },
    ];

    const bookingUrl = '';
    const whatsappUrl = '';

    return (
        <section className="hero-frame">
            <div className="hero-main row mx-0">
                <div className="col-12 col-xl-6 hero-content px-3 px-xl-5">
                    <p className="hero-subtitle">{text.subtitle}</p>

                    <AccentLine />

                    <h1 id="hero-title" className="hero-title">
                        {text.hero}
                        <span>{text.bhero}</span>
                    </h1>

                    <p className="hero-description">
                        {text.heroDescription}
                    </p>

                    <div className="hero-actions d-flex flex-row flex-xl-column align-items-center align-items-xl-start flex-wrap">
                        <ActionButton href={bookingUrl}>
                            {text.button}
                        </ActionButton>

                        <a
                            href={whatsappUrl}
                            className="hero-whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa-brands fa-whatsapp"
                                aria-hidden="true"
                            />
                            <span>{text.whatsapp}</span>
                        </a>
                    </div>
                </div>

                <div
                    className="col-12 col-xl-6 hero-image"
                    style={heroImageStyle}
                    role="img"
                    aria-label={text.imageAlt}
                />
            </div>

            <div className="hero-benefits px-3 px-xl-5">
                <div className="row mx-0 hero-benefits-inner">
                    {benefits.map(({ icon, label }) => (
                        <div
                            className="col-4 hero-benefit"
                            key={icon}
                        >
                            <i className={icon} aria-hidden="true" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
