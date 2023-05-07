import React from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Rating} from './components/Rating/Rating';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

const App = () => {
    return (
        <div className="App">
            <AppTitle/>
            {/*<Accordion title={'Menu'} collapsed={false}/>*/}
            {/*<Accordion title={'Options'} collapsed={true}/>*/}
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'Options'}/>
            {/*<Rating value={3}/>*/}
            <UncontrolledRating/>
            <OnOff isOn={true}/>
            <OnOff isOn={false}/>
        </div>
    );
}

export default App;