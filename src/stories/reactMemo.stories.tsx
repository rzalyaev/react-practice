import React, {useState, memo} from "react";
import type {Meta} from "@storybook/react";
import {EmptyComponent} from "../components/_sample/EmptyComponent";

const meta: Meta<typeof EmptyComponent> = {
  component: EmptyComponent,
};

export default meta;

const NewMessagesCounter = (props: any) => {
  console.log('NewMessageCounter component rendered');
  return <div>{props.count}</div>
}
const MemoizedNewMessagesCounter = memo(NewMessagesCounter);

const Users = (props: {users: string[]}) => {
  console.log('Users component rendered');
  return (
      <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
  )
}
const MemoizedUsers = memo(Users);

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
  const handlePlusOne = () => setCount(prevState => prevState + 1);
  const handleAddAndrew = () => setUsers([...users, 'Andrew']);
  return (
      <>
        <button onClick={handlePlusOne}>+</button>
        <MemoizedNewMessagesCounter count={count}/>
        <button onClick={handleAddAndrew}>Add Andrew</button>
        <MemoizedUsers users={users}/>
      </>
  )
}