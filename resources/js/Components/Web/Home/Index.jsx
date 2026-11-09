import React from "react";
import HeroFrame from "./HeroFrame.jsx";
import PostOpCareFrame from "./PostOpCareFrame.jsx";
import ServicesFrame from "./ServicesFrame.jsx";
import CoverageFrame from "./CoverageFrame.jsx";
import PinkDivider from "../Components/PinkDivider.jsx";
import BookingFrame from "./BookingFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <PostOpCareFrame lang={lang} />

            <ServicesFrame lang={lang} />

            <PinkDivider />

            <CoverageFrame lang={lang} />

            <div id="booking" className="booking-anchor">
                <PinkDivider />

                <BookingFrame lang={lang} />
            </div>


        </>
    )
}
