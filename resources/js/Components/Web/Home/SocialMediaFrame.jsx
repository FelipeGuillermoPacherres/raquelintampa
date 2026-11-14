import React from "react";
import frameImg from "../../../../../public/img/social-media-frame-img.jpg";
import AccentLine from "../Components/AccentLine.jsx";

export default function SocialMediaFrame({ lang = "es" }) {
    const frameText = {
        es: {
            subtitle: "CONECTA CON RAQUEL",
            title: "Conoce más de",
            btitle: "Raquel.",
            description:
                "Descubre nuestro trabajo, consejos de cuidado y las novedades de Raquel in Tampa.",
            imageAlt: "Raquel en su espacio de atención",
            visit: "Visitar",
            newTab: "Se abre en una nueva pestaña",
        },
        en: {
            subtitle: "CONNECT WITH RAQUEL",
            title: "Get to know",
            btitle: "Raquel.",
            description:
                "A closer look at our care, everyday moments, and what's new at Raquel in Tampa.",
            imageAlt: "Raquel in her care space",
            visit: "Visit",
            newTab: "Opens in a new tab",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const socialLinks = [
        {
            id: "instagram",
            name: "Instagram",
            icon: "fa-brands fa-instagram",
            href: "https://www.instagram.com/raquelintampa/",
        },
        {
            id: "facebook",
            name: "Facebook",
            icon: "fa-brands fa-facebook",
            href: "https://www.facebook.com/raquelintampa",
        },
        {
            id: "tiktok",
            name: "TikTok",
            icon: "fa-brands fa-tiktok",
            href: "https://www.tiktok.com/@raquelintampa",
        },
        {
            id: "google",
            name: "Google",
            icon: "fa-brands fa-google",
            href: "https://share.google/OqamY70QMcRop29Dr",
        },
    ];

    return (
        <section
            id="social-media"
            className="social-media-frame p-3 p-xl-5"
            aria-labelledby="social-media-title"
        >
            <div className="frame-shell">
                <div className="social-media-inner">
                    <div className="social-media-image">
                        <img
                            src={frameImg}
                            alt={text.imageAlt}
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="social-media-badge">
                            <i
                                className="fa-solid fa-heart"
                                aria-hidden="true"
                            />
                            <span>@raquelintampa</span>
                        </div>
                    </div>

                    <div className="social-media-content">
                        <p className="social-media-subtitle">
                            {text.subtitle}
                        </p>

                        <AccentLine />

                        <h2
                            id="social-media-title"
                            className="social-media-title"
                        >
                            {text.title}
                            <span>{text.btitle}</span>
                        </h2>

                        <p className="social-media-description">
                            {text.description}
                        </p>

                        <ul className="social-media-links">
                            {socialLinks.map((social) => (
                                <li key={social.id}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-media-link"
                                        aria-label={`${text.visit} ${social.name}. ${text.newTab}`}
                                        onClick={() => {
                                            window.gtag?.(
                                                "event",
                                                "social_click",
                                                {
                                                    platform: social.id,
                                                    placement:
                                                        "social_media_frame",
                                                }
                                            );
                                        }}
                                    >
                                        <i
                                            className={`${social.icon} social-media-icon`}
                                            aria-hidden="true"
                                        />

                                        <span className="social-media-label">
                                            <strong>{social.name}</strong>

                                            <span>
                                                {social.id === "google" ? (
                                                    <span>
                                                        Raquel in Tampa{" "}
                                                        <small>
                                                            ({lang === "es"
                                                            ? "Lee las opiniones de nuestros clientes"
                                                            : "Read our client reviews"})
                                                        </small>
                                                    </span>
                                                ) : (
                                                    <span>@raquelintampa</span>
                                                )}
                                            </span>
                                        </span>

                                        <i
                                            className="fa-solid fa-arrow-up-right-from-square social-media-arrow"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
