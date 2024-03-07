import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Input} from "../components/Input/Input";
import {ChangeEvent, useRef, useState} from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
      <>
        <input onChange={onChange}/> - {value}
      </>
  )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return (
      <>
        <input ref={inputRef}/> <button onClick={save}>Save</button> - actual value: {value}
      </>
  )
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value);
  return <input value={parentValue} onChange={handleOnChange}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked);
  return <input type='checkbox' checked={parentValue} onChange={handleOnChange}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value);
  return (
      <select value={parentValue} onChange={handleOnChange}>
        <option>none</option>
        <option value="1">Izhevsk</option>
        <option value="2">Kazan</option>
        <option value="3">Moscow</option>
      </select>
  )
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>;