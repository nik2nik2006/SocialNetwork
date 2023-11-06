import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Nikolay'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Volodya'},
    {id: 6, name: 'Valera'},
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Its your frend'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Hi'},
];
let posts = [
    {id: 1, message: 'Yo', likeCount: '5'},
    {id: 2, message: 'Yoklmn', likeCount: '4'},
    {id: 3, message: 'Yoprst', likeCount: '23'},
    {id: 4, message: 'Yoxoxo', likeCount: '0'},
    {id: 5, message: 'Yoshkin kot', likeCount: '7'},
];
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

reportWebVitals();
