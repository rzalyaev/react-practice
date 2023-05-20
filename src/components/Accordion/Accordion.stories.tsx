import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion title={'Menu'}
                                                  collapsed={true}
                                                  setCollapsed={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>;
export const UsersUncollapsedMode = () => <Accordion title={'Users'}
                                                     collapsed={false}
                                                     setCollapsed={callback}
                                                     items={[{title: 'Ruslan', value: 1}, {title: 'Dimych', value: 2}, {title: 'Igor', value: 3}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion title={'Users'}
                      collapsed={value}
                      setCollapsed={() => setValue(!value)}
                      items={[{title: 'Ruslan', value: 1}, {title: 'Dimych', value: 2}, {title: 'Igor', value: 3}]}
                      onClick={(id) => alert(`user with ID ${id} is awesome!`)}/>;
}