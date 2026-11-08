import React from "react";
import frameImg from "../../../../../public/img/post-op-care-frame-img.jpg";
import ActionButton from "../Components/ActionButton.jsx";
import AccentLine from "../Components/AccentLine.jsx";

export default function PostOpCareFrame({lang = 'es'}) {

    const frameText = {
        es: {
            subtitle: "CUIDADO POSTOPERATORIO",
            title: "La cirugía es solo",
            btitle: "el comienzo.",
            highlight: "Tu recuperación también merece atención.",
            description:
                "Tu cuerpo necesita tiempo y cuidado después de una cirugía. Te acompañamos con atención cercana y personalizada, respetando tu proceso y las indicaciones de tu cirujano.",
            benefit1: "Te escuchamos",
            benefit2: "Respetamos tu proceso",
            benefit3: "Te acompañamos",
            button: "Hablemos de tu recuperación",
            imageAlt:
                "Cuidado postoperatorio personalizado en Raquel in Tampa",
        },
        en: {
            subtitle: "POST-OP CARE",
            title: "Surgery is just",
            btitle: "the beginning.",
            highlight: "You deserve care beyond the procedure.",
            description:
                "Recovery takes time, and you don't have to navigate it alone. We're here with thoughtful, personalized care that respects your pace and your surgeon's instructions.",
            benefit1: "We listen",
            benefit2: "We go at your pace",
            benefit3: "We're here for you",
            button: "Let's talk about your recovery",
            imageAlt:
                "Personalized post-op care at Raquel in Tampa",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const benefits = [
        { icon: "fa-regular fa-comment", label: text.benefit1 },
        { icon: "fa-regular fa-heart", label: text.benefit2 },
        { icon: "fa-solid fa-hand-holding-heart", label: text.benefit3 },
    ];


    return (
        <section
            className="post-op-care-frame p-3 p-xl-5"
            aria-labelledby="post-op-title"
        >
            <div className="post-op-inner row mx-0">
                <div className="col-12 col-xl-6 post-op-content p-3 p-xl-4">
                    <p className="post-op-subtitle">
                        {text.subtitle}
                    </p>

                    <AccentLine />

                    <h2 id="post-op-title" className="post-op-title">
                        {text.title}
                        <span className="d-block">{text.btitle}</span>
                    </h2>

                    <p className="post-op-highlight">
                        {text.highlight}
                    </p>

                    <p className="post-op-description">
                        {text.description}
                    </p>

                    <div className="post-op-benefits row mx-0">
                        {benefits.map(({ icon, label }) => (
                            <div
                                className="col-4 post-op-benefit"
                                key={icon}
                            >
                                <i className={icon} aria-hidden="true" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-12 col-xl-6 post-op-image p-3 p-xl-4">
                    <img
                        src={frameImg}
                        alt={text.imageAlt}
                        className="img-fluid"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="col-12 col-xl-6 post-op-action p-3 p-xl-4">
                    <ActionButton href={'whatsappUrl'} className="w-100">
                        {text.button}
                        <i
                            className="fa-solid fa-chevron-right"
                            aria-hidden="true"
                        />
                    </ActionButton>
                </div>
            </div>
        </section>
    )
}
