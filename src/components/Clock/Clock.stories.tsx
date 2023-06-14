import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const DigitalType = () => {
    return <Clock clockType={'digital'}/>
}

export const AnalogType = () => {
    return <Clock clockType={'analog'}/>
}