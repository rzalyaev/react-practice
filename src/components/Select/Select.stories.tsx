import React, {useState} from "react";
import {Select} from './Select';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState<string>('2');

    return (
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Izhevsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kazan'},
                ]}/>
        )
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null);

    return (
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Izhevsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kazan'},
                ]}/>
        )
}