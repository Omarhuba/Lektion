import style from '../../module/index.module.scss'

import { GettingStarted } from '../GettingStarted';
import { Counter, InputDuplication, SubmitPrevention, DiceRoller } from '../EventState';
import { ToggleBtn, ToggleButton, Fruits, Shröedingers, TabView, FakedLogin, Modal, FruitSalad } from '../ConditionalList';

export function Bootcamp() {
    return (
      <div className={style.Bootcamp}>
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
          <FakedLogin />
          <Modal />
          <FruitSalad />


      </div>
    );
  }

