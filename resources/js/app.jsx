import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap";


/*---index.jsx---*/
import IndexJSX from "./Components/Web/Home/Index.jsx";
const indexJSX = document.getElementById("index");
if (indexJSX) {
    const { url, lang} = indexJSX.dataset;
    ReactDOM.createRoot(indexJSX).render(
        <IndexJSX
            url={url}
            lang={lang}
        />,
    );
}

/*---header.jsx---*/
import HeaderJSX from "./Components/Web/Layouts/Header.jsx";
const headerJSX = document.getElementById("header");
if (headerJSX) {
    const { url, path, lang} = headerJSX.dataset;
    ReactDOM.createRoot(headerJSX).render(
        <HeaderJSX
            url={url}
            path={path}
            lang={lang}
        />,
    );
}

/*---footer.jsx---*/
import FooterJSX from "./Components/Web/Layouts/Footer.jsx";
const footerJSX = document.getElementById("footer");
if (footerJSX) {
    const { url, path, lang} = footerJSX.dataset;
    ReactDOM.createRoot(footerJSX).render(
        <FooterJSX
            url={url}
            path={path}
            lang={lang}
        />,
    );
}
