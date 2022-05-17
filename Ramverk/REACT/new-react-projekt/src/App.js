// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Test, {Hello} from './components/Test';
import {Memory, Counter, InputDuplication, SubmitPrevention} from './components/BootCamp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Header />

        {/* <Test /> */}
        {/* <Hello /> */}
        <Memory />
        <Counter />
        <InputDuplication />
        <SubmitPrevention />




        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today
        </a> */}
      </header>
    </div>
  );
}

export default App;
