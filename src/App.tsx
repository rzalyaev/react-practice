import React from 'react';
import './App.css';
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion/UncontrolledAccordion";
import {ControlledRating} from "./components/Rating/ControlledRating/ControlledRating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  console.log('App is rendering');
  return (
      <div className="App">
        <PageTitle title={'React practice'}/>
        <ControlledAccordion titleValue={'Controlled accordion (click does not work)'} collapsed={false}/>
        <UncontrolledAccordion titleValue={"Uncontrolled accordion (click to collapse/expand)"}/>
        <ControlledRating value={3}/>
        <UncontrolledRating/>
        <OnOff/>
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

const PageTitle = (props: PageTitlePropsType) => {
  console.log('AppTitle is rendering');
  return (
      <h1>{props.title}</h1>
  )
}

export default App;
