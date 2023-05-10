import React, {useState} from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingType, Rating} from './components/Rating/Rating';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

const App = () => {
    const [switchState, setSwitchState] = useState<boolean>(false);

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const setCollapsedCallback = () => setCollapsed(!collapsed)

    const [rating, setRating] = useState<RatingType>(0);

    return (
        <div className="App">
            <AppTitle/>
            <Accordion title={'Controlled Accordion'}
                       collapsed={collapsed}
                       setCollapsed={setCollapsedCallback}/>
            <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
            <Rating rating={rating}
                    setRating={setRating}/>
            <UncontrolledRating/>
            <OnOff switchState={switchState}
                   setSwitchState={setSwitchState}/>
            <UncontrolledOnOff/>
        </div>
    );
}

export default App;