import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LargeText from './components/LargeText';
import CounterBottom from './components/counterBottom';
import ButtonComponent from './components/buttonComponent';

function App() {
  var text_h2 = "Texto escrito no javascript";
  var data_large_text = {
    'key_dct_1': 'value_dct_1',
    'key_dct_2': 'value_dct_2',
    'key_dct_3': 'value_dct_3',
  };
  var lst_text_h2 = text_h2.split(' ');

  const rows_p = [];
  for (let i = 0; i < lst_text_h2.length; i++) {
    rows_p.push(<p>{lst_text_h2[i]}</p>);
  };

  const button_text = "Counter Click"
  const [counter, setCounter] = useState(0);

  function onClickHandler(){
    console.log(counter);
    setCounter(counter + 1);
  };

  return (
    // Here comes JXS
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>Teste</h1>
        <h2>{text_h2}</h2>
        {rows_p}

        <h1>Teste Large Text</h1>
        <LargeText text="randon text" text_2="randon_key_2"/>
        <LargeText {...data_large_text}/>

        <h1>Couter Bottom</h1>
        {/* <button onClick={onClickHandler}>CounterBottom</button> */}
        <ButtonComponent button_text={button_text} onClick={onClickHandler} />
        <CounterBottom counter={counter}/>
      </body>
    </div>
  );
}

export default App;
