import logo from './logo.svg';
import './App.css';

function App() {
  var text_h2 = "Texto escrito no javascript";
  var lst_text_h2 = text_h2.split(' ')

  const rows_p = [];
  for (let i = 0; i < lst_text_h2.length; i++) {
    rows_p.push(<p>{lst_text_h2[i]}</p>)
  }



  return (
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
      </body>
    </div>
  );
}

export default App;
