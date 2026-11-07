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
