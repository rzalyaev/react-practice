import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type PropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}
                            collapsed={props.collapsed}
                            setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}