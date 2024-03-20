import React, {useState, memo, useEffect} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};
export default meta;

export const SimpleExample = () => {
  console.log('SimpleExample');
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(() => {
    console.log('useEffect activating on every render');
    // @ts-ignore
    document.title = count.toString();
  });

  useEffect(() => {
    console.log('useEffect activating only on first render (componentDidMount)');
    // @ts-ignore
    document.title = count.toString();
  }, []);

  useEffect(() => {
    console.log('useEffect activating on first render + when count will change');
    // @ts-ignore
    document.title = count.toString();
  }, [count]);

  return (
      <>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCount(count + 1)}>Count +</button>
        Count: {count}; Fake: {fake}
      </>
  )
}

export const SetTimeoutExample = () => {
  console.log('SetTimeoutExample');
  const [count, setCount] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(() => {
    /*setTimeout(() => {
      console.log('setTimeout');
      // @ts-ignore
      document.title = count.toString();
    }, 1000);*/
    setInterval(() => {
      setCount(prevState => prevState + 1);
    }, 1000)
  }, []);

  return (
      <>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCount(count + 1)}>Count +</button>
        Count: {count}; Fake: {fake}
      </>
  )
}