import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
    onClickCallback: () => void
}

export const UncontrolledAccordionTitle = (props: PropsType) => {
    return(
        <div>
            <h3 onClick={props.onClickCallback}>{props.title}</h3>
            <p>{props.collapsed && <i> collapsed</i>}</p>
        </div>
    )
}