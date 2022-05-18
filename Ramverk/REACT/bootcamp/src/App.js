import './App.css';
import './module/index.module.scss';
import { GettingStarted } from './components/GettingStarted';
import { Counter, InputDuplication, SubmitPrevention, DiceRoller } from './components/EventState';
import { ToggleBtn, ToggleButton, Fruits, Shröedingers, TabView } from './components/ConditionalList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GettingStarted />

        <Counter />
        <InputDuplication />
        <SubmitPrevention />
        <DiceRoller />
        <ToggleBtn />
        <ToggleButton />
        <Fruits />
        <Shröedingers />
        <TabView />


      </header>
    </div>
  );
}

export default App;
