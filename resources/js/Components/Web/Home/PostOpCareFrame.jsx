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

    const faqText = {
        es: {
            title: "Dudas sobre tu recuperación",
            description:
                "Respuestas claras para acompañarte en esta etapa.",
            items: [
                {
                    id: "swelling",
                    question:
                        "¿Por qué sigo inflamada después de recibir 10 masajes?",
                    paragraphs: [
                        "La inflamación puede continuar aunque hayas completado 10 sesiones. Cada cuerpo se recupera a su propio ritmo, y el número de masajes por sí solo no determina cuándo desaparecerá.",
                        "También influyen el tipo de cirugía, el tiempo transcurrido y los cuidados durante la recuperación. La frecuencia de las sesiones y el uso de la faja deben adaptarse a las indicaciones de tu cirujano. Si la inflamación aumenta o aparece dolor nuevo, consulta con tu equipo médico antes de continuar.",
                    ],
                },
                {
                    id: "pain",
                    question:
                        "¿Es normal sentir dolor durante un masaje postoperatorio?",
                    paragraphs: [
                        "Después de una cirugía, la piel y los tejidos pueden estar sensibles. Sin embargo, el drenaje linfático manual utiliza movimientos suaves: no necesitas soportar dolor intenso para que la sesión sea efectiva.",
                        "Cuéntale a Raquel cómo te sientes para adaptar o detener la sesión si es necesario. No existe un número fijo de sesiones para que desaparezca la sensibilidad. Si el dolor es intenso, empeora o persiste, consulta con tu cirujano.",
                    ],
                },
                {
                    id: "compression",
                    question:
                        "¿Durante cuánto tiempo debo usar la faja de día y de noche?",
                    paragraphs: [
                        "El tiempo de uso depende de tu cirugía, tu evolución y las indicaciones de tu cirujano. No todas las pacientes necesitan usarla durante el mismo número de días ni con el mismo horario.",
                        "Raquel puede orientarte sobre su colocación y comodidad, respetando siempre la pauta médica. Si la faja te causa dolor, adormecimiento o molestias que dificultan tu descanso, consulta con tu equipo quirúrgico antes de cambiar su ajuste o tiempo de uso.",
                    ],
                },
            ],
        },
        en: {
            title: "Questions about your recovery",
            description:
                "Clear answers to help you feel informed and supported.",
            items: [
                {
                    id: "swelling",
                    question:
                        "Why am I still swollen after 10 massage sessions?",
                    paragraphs: [
                        "Swelling can remain even after 10 sessions. Everyone heals at their own pace, and the number of massages alone does not determine when swelling will go away.",
                        "Your procedure, time since surgery, and aftercare all play a role. Session frequency and compression garment use should follow your surgeon’s instructions. If swelling increases or you develop new pain, contact your surgical team before continuing.",
                    ],
                },
                {
                    id: "pain",
                    question:
                        "Is pain normal during a post-op massage?",
                    paragraphs: [
                        "Your skin and tissues may be sensitive after surgery. However, manual lymphatic drainage uses gentle movements. You should not have to tolerate intense pain for a session to be effective.",
                        "Let Raquel know how you feel so the session can be adjusted or stopped if needed. There is no set number of sessions for tenderness to resolve. If pain is severe, gets worse, or persists, contact your surgeon.",
                    ],
                },
                {
                    id: "compression",
                    question:
                        "How long should I wear my compression garment, day and night?",
                    paragraphs: [
                        "Your wearing schedule depends on your procedure, recovery, and surgeon’s instructions. Not everyone needs to wear a compression garment for the same number of days or hours.",
                        "Raquel can offer guidance on positioning and comfort while respecting your surgeon’s plan. If your garment causes pain, numbness, or discomfort that disrupts your rest, contact your surgical team before changing its fit or wearing schedule.",
                    ],
                },
            ],
        },
    };

    const faq = faqText[lang] ?? faqText.en;

    const benefits = [
        { icon: "fa-regular fa-comment", label: text.benefit1 },
        { icon: "fa-regular fa-heart", label: text.benefit2 },
        { icon: "fa-solid fa-hand-holding-heart", label: text.benefit3 },
    ];

    const postOpMessage = {
        es: "Hola, Raquel. Me interesa conocer tus paquetes de cuidado postoperatorio. ¿Podrías contarme qué opciones tienes y qué incluye cada una?",
        en: "Hi Raquel! I’d love to learn more about your post-op care packages. Could you tell me what options you offer and what’s included in each?",
    };

    const whatsappUrl = `https://wa.me/18138932326?text=${encodeURIComponent(
        postOpMessage[lang] ?? postOpMessage.en
    )}`;


    return (
        <section
            className="post-op-care-frame p-3 p-xl-5"
            aria-labelledby="post-op-title"
        >
            <div className={'frame-shell'}>
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

                    <div className="col-12 post-op-faq p-3 p-xl-4" aria-labelledby="post-op-faq-title" >
                        <h3 id="post-op-faq-title" className="post-op-faq-title">
                            {faq.title}
                        </h3>

                        <p className="post-op-faq-description">
                            {faq.description}
                        </p>

                        <div className="post-op-faq-list">
                            {faq.items.map(({ id, question, paragraphs }) => (
                                <details
                                    className="post-op-faq-item"
                                    key={id}
                                >
                                    <summary>
                                        <span>{question}</span>
                                        <span
                                            className="post-op-faq-icon"
                                            aria-hidden="true"
                                        />
                                    </summary>

                                    <div className="post-op-faq-answer">
                                        {paragraphs.map((paragraph, index) => (
                                            <p key={`${id}-${index}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 post-op-action p-3 p-xl-4">
                        <ActionButton
                            href={whatsappUrl}
                            className="w-100"
                            onClick={() => {
                                window.gtag?.('event', 'whatsapp_click', {
                                    placement: 'post_op_care_frame',
                                });
                            }}
                        >
                            {text.button}
                            <i
                                className="fa-solid fa-chevron-right"
                                aria-hidden="true"
                            />
                        </ActionButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
