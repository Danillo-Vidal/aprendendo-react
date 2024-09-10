//index.js é o ponto de entrada para o seu aplicativo React. 
//É aqui que você configura e renderiza o componente principal do seu aplicativo


import React from 'react';
import ReactDOM from 'react-dom';//ReactDOM é utilizado para renderizar o seu componente React na página HTML
import App from './App';//App é o componente principal do seu aplicativo, e é o que precisa ser exibido na tela
import './App.css'; 

ReactDOM.render(
    <React.StrictMode>
      <App />  
    </React.StrictMode>,
    document.getElementById('root') // Renderiza o componente App no elemento com id root
  );
