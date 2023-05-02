import React from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Rating} from './components/Rating/Rating';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

const App = () => {
    return (
        <div className="App">
            <AppTitle/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Options'} collapsed={true}/>
            <Rating value={3}/>
            <OnOff isOn={true}/>
            <OnOff isOn={false}/>
        </div>
    );
}

export default App;