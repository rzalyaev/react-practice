import React, {useEffect, useState} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";
import moment from "moment";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};
export default meta;

export const Clock = () => {
  console.log('Clock');
  const [time, setTime] = useState(moment().format("hh:mm:ss"));

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000)
  }, []);

  return (
      <>
        Time: {time}
      </>
  )
}