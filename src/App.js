import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Asslamualikum My First react app run in my local machine
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed By <u> <b>Ahmed Raza</b></u>
        </a>
      </header>
    </div>
  );
}

export default App;
