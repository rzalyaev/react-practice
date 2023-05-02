import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
}

export const AccordionTitle = (props: PropsType) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.collapsed && <i> collapsed</i>}</p>
        </div>
    )
}