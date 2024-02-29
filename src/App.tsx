import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";
import {ControlledRating} from "./components/Rating/ControlledRating/ControlledRating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff/UncontrolledOnOff";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff/ControlledOnOff";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
  // Controlled rating functionality -----------------------------------------------------------------------------------
  const [rating, setRating] = useState<RatingType>(0);
  const changeRating = (newRating: RatingType) => setRating(newRating);

  // Controlled accordion functionality --------------------------------------------------------------------------------
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const changeCollapsedState = () => setCollapsed(!collapsed);

  // Controlled OnOff functionality ------------------------------------------------------------------------------------
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  return (
      <div className="App">
        <PageTitle title={'React practice'}/>
        <ControlledAccordion titleValue={'Controlled accordion. Statement is managed from outside of a component'}
                             collapsed={collapsed} changeCollapsedState={changeCollapsedState}
        />
        <UncontrolledAccordion titleValue={`Uncontrolled accordion. Statement is managed from inside of a component`}/>
        <ControlledRating value={rating} changeRating={changeRating}/>
        <UncontrolledRating/>
        <ControlledOnOff isOn={isOn} turnOn={turnOn} turnOff={turnOff}/>
        <UncontrolledOnOff/>
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  return (
      <h1>{props.title}</h1>
  )
}

export default App;
