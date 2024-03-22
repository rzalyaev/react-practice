import React, {useEffect, useState} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";
import moment from "moment";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};
export default meta;

export const DigitalClockFromMomentModule = () => {
  console.log('DigitalClock from moment module');
  const [time, setTime] = useState(moment().format("hh:mm:ss"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
      <div>
        {time}
      </div>
  )
}