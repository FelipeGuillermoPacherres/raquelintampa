import React, { useId, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

export default function SelectLang({lang = 'es'}) {
    const [changing, setChanging] = useState(false);
    const [error, setError] = useState("");

    const currentLang = lang === "es" ? "es" : "en";
    const nextLang = currentLang === "es" ? "en" : "es";

    const languages = {
        es: "Español",
        en: "English",
    };

    const changeLanguage = async (selectedLang) => {
        if (changing) return;

        setChanging(true);
        setError("");

        try {
            const response = await fetch("/language", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute("content") ?? "",
                },
                body: JSON.stringify({ lang: selectedLang }),
            });

            if (!response.ok) {
                throw new Error("Language change failed");
            }

            let reloading = false;

            const reloadPage = () => {
                if (reloading) return;
                reloading = true;
                window.location.reload();
            };

            // Recarga aunque Analytics no ejecute el callback.
            setTimeout(reloadPage, 1500);

            if (typeof window.gtag === "function") {
                window.gtag("event", "language_change", {
                    previous_language: currentLang,
                    selected_language: selectedLang,
                    placement: "navbar",
                    event_callback: reloadPage,
                    event_timeout: 1000,
                });
            } else {
                reloadPage();
            }
        } catch {
            setError(
                currentLang === "es"
                    ? "No pudimos cambiar el idioma. Inténtalo de nuevo."
                    : "Could not change the language. Please try again."
            );
            setChanging(false);
        }
    };

    return(
        <Dropdown className="select-lang-dropdown" align="end">
            <Dropdown.Toggle
                id="select-lang-toggle"
                className="select-lang-button"
            >
                <i className="fa-solid fa-language" aria-hidden="true" />
                <span>{languages[currentLang]}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    as="button"
                    type="button"
                    disabled={changing}
                    onClick={() => changeLanguage(nextLang)}
                >
                    {languages[nextLang]}
                </Dropdown.Item>

                {error && (
                    <div className="small text-danger px-3 py-2" role="alert">
                        {error}
                    </div>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}
