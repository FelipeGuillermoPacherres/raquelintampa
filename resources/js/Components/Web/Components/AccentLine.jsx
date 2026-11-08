import React from "react";

export default function AccentLine({ className = "" }) {
    return (
        <span
            className={`accent-line ${className}`.trim()}
            aria-hidden="true"
        />
    );
}
