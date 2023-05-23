import React, {useState} from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingType, Rating} from './components/Rating/Rating';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ItemType, Select} from "./components/Select/Select";

const App = () => {
    const [switchState, setSwitchState] = useState<boolean>(false);
    const [rating, setRating] = useState<RatingType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const setCollapsedCallback = () => setCollapsed(!collapsed)

    const initialItems: ItemType[] = [
        {value: '1', title: 'Izhevsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kazan'},
    ]
    const [items, setItems] = useState<ItemType[]>(initialItems);

    const selectOnChange = (value: any) => {

    }

    return (
        <div className="App">
            <AppTitle/>
            <Accordion title={'Controlled Accordion'}
                       collapsed={collapsed}
                       setCollapsed={setCollapsedCallback}
                       items={initialItems}
                       onClick={()=>{}}/>
            <UncontrolledAccordion title={'Uncontrolled Accordion'}/>
            <Rating rating={rating}
                    setRating={setRating}/>
            <UncontrolledRating/>
            <OnOff switchState={switchState}
                   setSwitchState={setSwitchState}/>
            <UncontrolledOnOff/>
            <Select value={'1'} onChange={selectOnChange} items={items}/>
        </div>
    );
}

export default App;