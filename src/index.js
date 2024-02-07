import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import SamuraiJSApp from "./App";

// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<SamuraiJSApp/>);

reportWebVitals();
