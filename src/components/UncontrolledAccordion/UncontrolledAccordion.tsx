import React, {useState} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody/UncontrolledAccordionBody";

type PropsType = {
    title: string
}

export const UncontrolledAccordion = (props: PropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const setCollapsedHandler = () => setCollapsed(!collapsed)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}
                                        collapsed={collapsed}
                                        setCollapsed={setCollapsedHandler}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}