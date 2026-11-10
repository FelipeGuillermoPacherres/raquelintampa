import React from "react";
import { categories } from "../../Data/Categories.jsx";
import ServicesModal from "../Components/Modals/ServicesModal.jsx";
import AccentLine from "../Components/AccentLine.jsx";

export default function ServicesFrame({
  lang = "es",
}) {
    const frameText = {
        es: {
            subtitle: "NUESTROS SERVICIOS",
            title: "Un cuidado pensado para ti.",
            description:
                "Desde tu recuperación hasta tu rutina de belleza, descubre nuestros servicios y encuentra la atención que necesitas.",
        },
        en: {
            subtitle: "OUR SERVICES",
            title: "Care that feels right for you.",
            description:
                "From post-op support to your everyday beauty routine, explore our services and find the care that fits your needs.",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return (
        <section
            className="services-frame p-3 p-xl-5"
            aria-labelledby="services-title"
        >
            <div className="services-heading text-center mx-auto">
                <p className="services-subtitle">
                    {text.subtitle}
                </p>

                <AccentLine className={'mx-auto'} />

                <h2 id="services-title" className="services-title">
                    {text.title}
                </h2>

                <p className="services-description">
                    {text.description}
                </p>
            </div>

            <div className="container-xl px-0 pt-3 pt-xl-5">
                <div className="services-grid row g-4 justify-content-center">
                    {categories.map((category) => (
                        <div
                            className="col-6 col-xl-4"
                            key={category.id}
                        >
                            <ServicesModal
                                data={category}
                                lang={lang}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
