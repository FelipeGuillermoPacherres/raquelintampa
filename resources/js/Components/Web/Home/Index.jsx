import React from "react";
import HeroFrame from "./HeroFrame.jsx";
import PostOpCareFrame from "./PostOpCareFrame.jsx";
import ServicesFrame from "./ServicesFrame.jsx";
import CoverageFrame from "./CoverageFrame.jsx";
import PinkDivider from "../Components/PinkDivider.jsx";
import BookingFrame from "./BookingFrame.jsx";
import SocialMediaFrame from "./SocialMediaFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <PostOpCareFrame lang={lang} />

            <div id="services" className="booking-anchor">
                <ServicesFrame lang={lang} />
            </div>

            <div id="coverage" className="booking-anchor">
                <PinkDivider />

                <CoverageFrame lang={lang} />
            </div>

            <div id="booking" className="booking-anchor">
                <PinkDivider />

                <BookingFrame lang={lang} />
            </div>

            <PinkDivider />

            <SocialMediaFrame lang={lang} />

        </>
    )
}
