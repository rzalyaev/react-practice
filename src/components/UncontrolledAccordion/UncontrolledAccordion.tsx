import React, {useState} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody/UncontrolledAccordionBody";

type PropsType = {
    title: string
}

export const UncontrolledAccordion = (props: PropsType) => {
    const [collapsed, setCollapsed] = useState(false);

    const setCollapsedCallback = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} collapsed={collapsed}
                                        onClickCallback={setCollapsedCallback}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}