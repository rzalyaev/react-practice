import React, {ChangeEvent, useRef, useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
    //component: input,
}

export const UncontrolledInput = () => {
    return (
        <input/>
    )
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <input value={value} onChange={onChange}/> - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputOnButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: - {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value);

    return (
        <select value={parentValue} onChange={onChange}>
            <option value="1">Izhevsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kazan</option>
        </select>
    )
}

export const ControlledInputWithFixedValue = () => {
    return (
        <input value={'Hello'}/>
    )
};