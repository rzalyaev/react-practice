import React, {useState, memo} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};
export default meta;

const generateData = () => {
  // difficult counting
  console.log('generateData');
  return 1;
}

export const Example1 = () => {
  console.log('Example1');

  // const initialValue = useMemo(generateData, []);

  const [count, setCount] = useState(generateData);

  const changer = (state: number) => state + 1;

  const handlePlusOne = () => setCount(changer);
  return (
      <>
        <button onClick={handlePlusOne}>+</button>
        {count}
      </>
  )
}