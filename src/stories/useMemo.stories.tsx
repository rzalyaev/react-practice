import React, {ChangeEvent, memo, useMemo, useState} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};

export default meta;

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);
  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
      <>
        <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
          Result for a: {resultA}
        </div>
        <div>
          Result for b: {resultB}
        </div>
      </>
  )
}

const Users = (props: {users: string[]}) => {
  console.log('Users component rendered');
  return (
      <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
  )
}
const MemoizedUsers = memo(Users);

export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo');

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

  const handlePlusOne = () => setCount(prevState => prevState + 1);
  const filteredUsers = useMemo(() => {
    return users.filter(u => u.toLowerCase().includes('a'))
  }, [users]);
  const handleAddAndrew = () => setUsers([...users, 'Andrew']);

  return (
      <>
        <button onClick={handlePlusOne}>+</button>
        {count}
        <button onClick={handleAddAndrew}>add Andrew</button>
        <MemoizedUsers users={filteredUsers}/>
      </>
  )
}