import React from "react";
import HeroFrame from "./HeroFrame.jsx";
import PostOpCareFrame from "./PostOpCareFrame.jsx";
import ServicesFrame from "./ServicesFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <PostOpCareFrame lang={lang} />

            <ServicesFrame lang={lang} />
        </>
    )
}
