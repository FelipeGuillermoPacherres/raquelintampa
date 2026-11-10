import React from "react";
import imgLogo from "../../../../../public/img/logo-1.png";
import FPWDModal from "../Components/FPWDModal.jsx";

const socialLinks = [
    {
        name: "Facebook",
        icon: "fa-facebook",
        href: "https://www.facebook.com/raquelintampa",
    },
    {
        name: "Instagram",
        icon: "fa-instagram",
        href: "https://www.instagram.com/raquelintampa/",
    },
    {
        name: "TikTok",
        icon: "fa-tiktok",
        href: "https://www.tiktok.com/@raquelintampa",
    },
];

const frameText = {
    es: {
        description: "Atención personalizada a domicilio en Tampa Bay.",
        explore: "Explora",
        services: "Servicios",
        coverage: "Zona de cobertura",
        booking: "Reservas en línea",
        contact: "Contáctanos",
        whatsapp: "Escríbenos por WhatsApp",
        whatsappMessage: "¡Hola, Raquel! Me gustaría saber más sobre tus servicios.",
        follow: "Sigue a @raquelintampa",
        book: "RESERVAR MI CITA",
        fpLabel1:'Diseñado con ',
        fpLabel2:' por ',
    },
    en: {
        description: "Personalized care at home across Tampa Bay.",
        explore: "Explore",
        services: "Services",
        coverage: "Service area",
        booking: "Online booking",
        contact: "Get in touch",
        whatsapp: "Chat on WhatsApp",
        whatsappMessage: "Hi Raquel! I’d love to learn more about your services.",
        follow: "Follow @raquelintampa",
        book: "BOOK YOUR VISIT",
        fpLabel1:'This website was made with ',
        fpLabel2:' by ',
    },
};

export default function Footer({ lang = "es", bookingHref = "#booking" }) {
    const year = new Date().getFullYear();
    const text = frameText[lang] ?? frameText.en;
    const whatsappHref = `https://wa.me/18138932326?text=${encodeURIComponent(text.whatsappMessage)}`;

    return (
        <>
            <footer className="footer-rit px-3 py-4 p-md-5">
                <div className="footer-rit__inner">
                    <div className="footer-rit__grid">
                        <div className="footer-rit__brand">
                            <img src={imgLogo} alt="Raquel in Tampa Beauty Studio" />
                            <p>{text.description}</p>
                        </div>

                        <nav className="footer-rit__column" aria-labelledby="footer-explore">
                            <h2 id="footer-explore">{text.explore}</h2>

                            <ul className="footer-rit__links">
                                <li><a href="#services">{text.services}</a></li>
                                <li><a href="#coverage">{text.coverage}</a></li>
                                <li><a href={bookingHref}>{text.booking}</a></li>
                            </ul>
                        </nav>

                        <div className="footer-rit__column">
                            <h2>{text.contact}</h2>

                            <a
                                className="footer-rit__whatsapp"
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                                {text.whatsapp}
                            </a>

                            <h2 id="footer-socials" className="footer-rit__social-title">
                                {text.follow}
                            </h2>

                            <ul className="footer-rit__socials" aria-labelledby="footer-socials">
                                {socialLinks.map(({ name, icon, href }) => (
                                    <li key={name}>
                                        <a
                                            href={href}
                                            aria-label={name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className={`fa-brands ${icon}`} aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <a className="footer-rit__book" href={bookingHref}>
                                {text.book}
                            </a>
                        </div>
                    </div>

                    <p className="footer-rit__copyright">© {year} Raquel in Tampa</p>

                    <FPWDModal lang={lang} labelText={text}/>
                </div>
            </footer>
        </>
    );
}
