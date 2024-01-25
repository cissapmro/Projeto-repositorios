import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Após a atualização para o React 18, o comportamento padrão useEffect mudou para executá-lo 2 vezes
//Esse comportamento é apenas no modo de desenvolvimento, então para resolver desabilitei o modo Strict no arquivo index.js do projeto.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
//useEffect duplicando requisição 
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
