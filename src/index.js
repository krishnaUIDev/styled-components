import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { injectGlobal } from 'styled-components'


import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    body{
        margin:0;
        padding: 0;
        font-family:Comic Sans MS;
    }
`
ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
