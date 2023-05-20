import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

export type ItemType = {
    title: string,
    value: any,
}

type PropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
    items: ItemType[],
    onClick: (value: any) => void,
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}
                            collapsed={props.collapsed}
                            setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}