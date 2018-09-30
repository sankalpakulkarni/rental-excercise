import React from 'react';
import { render } from 'react-dom';
import AppComponent from './index';


const root = document.getElementById( "root" );

render(<AppComponent {...window.__APP_INITIAL_STATE__}  />, root);
