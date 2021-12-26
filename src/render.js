import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addContract } from './state'

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App content={state.dataPage} links={state.navPage} contractData={state.contractData} addContract={addContract} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}
