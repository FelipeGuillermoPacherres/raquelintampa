import React from "react";
import imgLogo from "../../../../../public/img/logo-1.png"

export default function Header({url, path, lang = 'es'}) {
    const logoTag = (
        <img src={imgLogo} className="logo" alt="Raquel in Tampa - Logo" />
    );

    const bookNowButton = {
        es: 'AGENDAR CITA',
        en: 'BOOK NOW'
    };

    return(
        <header>
            <nav className={'navbar-rit'}>
                <div className="menu row mx-0 justify-content-between">

                    {/* LOGO */}
                    <div className="col-auto p-0">
                        <a href={`/`}>
                            {logoTag}
                        </a>
                    </div>

                    <div className="col-auto p-0 align-content-center">
                        <a className={'btn btn-md booking-button'} href="tel:+18138932326">{bookNowButton[lang]}</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
