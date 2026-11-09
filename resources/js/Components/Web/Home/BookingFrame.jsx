import React from "react";
import AccentLine from "../Components/AccentLine.jsx";
import SquareLogo from "../../../../../public/img/squareup-logo.svg";

const frameText = {
    es: {
        subtitle: "RESERVAS ONLINE",
        title: "Tu próxima cita, más fácil.",
        steps: [
            {
                title: "Elige tu servicio",
                description:
                    "Para citas a domicilio, el cargo por visita depende de la zona.",
            },
            {
                title: "Encuentra tu horario",
                description: "Elige el día y la hora disponibles.",
            },
            {
                title: "Confirma con un adelanto",
                description: (
                    <>
                        Paga el adelanto en <strong>Square</strong>. Se descuenta
                        del total y pagas el saldo el día de la cita.
                    </>
                ),
            },
        ],
        cardTitle: "Reserva tu cita online",
        cardDescription: "Revisa el total y el adelanto antes de confirmar.",
        button: "Reservar en Square",
        newTab: "Se abre en una nueva pestaña.",
        unavailable: "Las reservas online aún no están disponibles.",
        policyTitle: "Cancelaciones y cambios",
        policy: (
            <>
                Si cancelas, el adelanto no se devuelve. Puedes reprogramar una
                vez sin cargo con al menos 24 horas de aviso y aplicaremos tu
                adelanto a la nueva cita. Con menos aviso, necesitarás un nuevo
                adelanto para reservar otra hora. Si{" "}
                <strong className="booking-brand">Raquel in Tampa</strong>{" "}
                cancela, puedes pedir el reembolso o aplicar el adelanto a otra
                fecha.
            </>
        ),
    },
    en: {
        subtitle: "ONLINE BOOKING",
        title: "An easier way to book your next visit.",
        steps: [
            {
                title: "Choose your service",
                description:
                    "For at-home appointments, the travel fee depends on your area.",
            },
            {
                title: "Find a time that works for you",
                description: "Pick an available date and time.",
            },
            {
                title: "Confirm with a booking deposit",
                description: (
                    <>
                        Pay your deposit through <strong>Square</strong>. It goes
                        toward your total, and you pay the remaining balance on
                        the day of your appointment.
                    </>
                ),
            },
        ],
        cardTitle: "Book your appointment online",
        cardDescription: "Review your total and deposit before you confirm.",
        button: "Book on Square",
        newTab: "Opens in a new tab.",
        unavailable: "Online booking isn't available yet.",
        policyTitle: "Cancellations and rescheduling",
        policy: (
            <>
                If you cancel, your deposit is nonrefundable. You can reschedule
                once at no extra charge with at least 24 hours’ notice, and
                we’ll apply your deposit to the new appointment. With less
                notice, you’ll need a new deposit to book another time. If{" "}
                <strong className="booking-brand">Raquel in Tampa</strong>{" "}
                cancels, you can request a refund or apply your deposit to
                another date.
            </>
        ),
    },
};

export default function BookingFrame({ lang = "es" }) {
    const bookingUrl = 'https://www.youtube.com/';
    const text = frameText[lang] ?? frameText.en;

    return (
        <section
            id="booking"
            className="booking-frame p-3 p-xl-5"
            aria-labelledby="booking-title"
        >
            <div className={'frame-shell'}>
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-xl-6">
                        <p className="booking-subtitle">{text.subtitle}</p>
                        <AccentLine />
                        <h2 id="booking-title" className="booking-title">
                            {text.title}
                        </h2>

                        <ol className="booking-steps list-unstyled" role="list">
                            {text.steps.map((step, index) => (
                                <li className="booking-step" key={step.title}>
                                <span className="booking-step-number" aria-hidden="true">
                                    {index + 1}
                                </span>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="col-12 col-xl-6">
                        <div className="booking-card">
                            <div className="booking-card-icon-row" aria-hidden="true">
                                <i className="fa-regular fa-calendar-days booking-card-icon" />
                            </div>
                            <h3>{text.cardTitle}</h3>
                            <p>{text.cardDescription}</p>

                            {bookingUrl ? (
                                <>
                                    <a
                                        className="booking-square-link"
                                        href={bookingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-describedby="booking-square-note"
                                    >
                                        <img
                                            className="booking-square-logo"
                                            src={SquareLogo}
                                            alt=""
                                        />
                                        <span>{text.button}</span>
                                    </a>
                                    <small id="booking-square-note">{text.newTab}</small>
                                </>
                            ) : (
                                <small>{text.unavailable}</small>
                            )}
                        </div>
                    </div>
                </div>

                <div className="booking-policy">
                    <h3>{text.policyTitle}</h3>
                    <p>{text.policy}</p>
                </div>
            </div>
        </section>
    );
}
