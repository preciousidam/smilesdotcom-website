import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faGooglePlusG,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { fas, faArrowRight, faMapMarkedAlt, faPhoneAlt, faEnvelope, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(fab, far, fas, faInstagram, faTwitter, 
            faGooglePlusG, faFacebookF, faArrowRight, faMapMarkedAlt, 
            faPhoneAlt, faEnvelope, faPaperPlane, faSpinner
            )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
