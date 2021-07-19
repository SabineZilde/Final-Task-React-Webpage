import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <App />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root')
);