import React from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;