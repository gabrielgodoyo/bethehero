// JSX (JavaScript XML)
//onClick: Chama a função quando o usuário clica no botão
//React, { useState }
  //const [counter, setCounter] = useState(0); //Variável tipo let -> Consigo alterar o valor

  // Array [valor, FunçãoDeAtualização]

  //function increment() {
  //  setCounter(counter + 1);
  //}

  //<div>
  //    <Header>contador: {counter}</Header>
  //    <button onClick={increment}>Incrementar</button>
  //  </div>

import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;
