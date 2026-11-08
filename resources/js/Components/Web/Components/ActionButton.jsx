import React from "react";

export default function ActionButton({
     children,
     href,
     onClick,
     type = "button",
     className = "",
     btnColor = "pink",
     target,
     rel,
 }) {
    const classes = `action-button action-button--${btnColor} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                onClick={onClick}
                className={classes}
                target={target}
                rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
            >
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
