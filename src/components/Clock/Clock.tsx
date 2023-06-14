import React from "react";
import DigitalClock from "./DigitalClock/DigitalClock";
import AnalogClock from "./AnalogClock/AnalogClock";

type ClockPropsType = {
    clockType: 'digital' | 'analog'
}

export const Clock = ({clockType}: ClockPropsType) => {
    return (
        clockType === 'digital' ? <DigitalClock/> : <AnalogClock/>
    );
}