import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";
import {Provider} from "react-redux";

// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //<React.StrictMode>
                <SamuraiJSApp/>
    //</React.StrictMode>
);

reportWebVitals();
