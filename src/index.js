import './index.css';
import state from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addContract, updateContractObject, subscribe } from './state'


let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App content={state.dataPage} links={state.navPage} contractPage={state.contractPage} addContract={addContract} updateContractObject={updateContractObject} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}


rerender()

subscribe(rerender)
