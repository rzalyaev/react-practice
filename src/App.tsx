import React, {useEffect, useState} from 'react';
import './App.css';
import {ControlledAccordion, ItemType} from "./components/Accordion/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";
import {ControlledRating} from "./components/Rating/ControlledRating/ControlledRating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff/UncontrolledOnOff";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff/ControlledOnOff";
import {Select} from "./components/Select/Select";
import {DigitalClock} from "./components/DigitalClock/DigitalClock";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import {Clock} from 'react-clock';
import 'react-clock/dist/Clock.css';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
  // Controlled rating functionality -----------------------------------------------------------------------------------
  const [rating, setRating] = useState<RatingType>(0);
  const changeRating = (newRating: RatingType) => setRating(newRating);

  // Controlled accordion functionality --------------------------------------------------------------------------------
  const controlledAccordionItems: ItemType[] = [
    {title: 'List Item 1', value: 1},
    {title: 'List Item 2', value: 2},
    {title: 'List Item 3', value: 3}
  ]
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const changeCollapsedState = () => setCollapsed(!collapsed);
  const handleItemOnClick = (value: any) => {}

  // Controlled OnOff functionality ------------------------------------------------------------------------------------
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  // Select component functionality ------------------------------------------------------------------------------------
  const itemsToSelect: ItemType[] = [
    {value: '1', title: 'Moscow'},
    {value: '2', title: 'Kazan'},
    {value: '3', title: 'Izhevsk'}
  ]
  const [currentValue, setCurrentValue] =
      useState<string | undefined>(undefined);
  const changeCurrentValue = (value: string) => setCurrentValue(value);

  // Clock component functionality
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="App">
        <PageTitle title={'React practice'}/>
        <ControlledAccordion titleValue={'Controlled accordion. Statement is managed from outside of a component'}
                             collapsed={collapsed}
                             onChange={changeCollapsedState}
                             onClick={handleItemOnClick}
                             items={controlledAccordionItems}
        />
        <UncontrolledAccordion titleValue={`Uncontrolled accordion. Statement is managed from inside of a component`}/>
        <ControlledRating value={rating} changeRating={changeRating}/>
        <UncontrolledRating/>
        <ControlledOnOff isOn={isOn} turnOn={turnOn} turnOff={turnOff}/>
        <UncontrolledOnOff/>
        <Select value={currentValue} onChange={changeCurrentValue} items={itemsToSelect}/>
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
