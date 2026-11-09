import React from "react";
import iconLogo from "../../../../../public/img/logo-2.png";

export default function PinkDivider({background = true}) {
    return (
        <div
            className={`pink-divider`}
            aria-hidden="true"
        >
            <span className="pink-divider-line" />
            <img className="pink-divider-logo" src={iconLogo} alt="Raquel in Tampa - Logo" />
            <span className="pink-divider-line" />
        </div>
    );
}
