import React from "react";
import styles from "../../Accordion/AccordionTitle/AccordionTitle.module.css";

type PropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

export const UncontrolledAccordionTitle = (props: PropsType) => {
    const changeCollapsedState = () => props.setCollapsed()

    return(
        <div>
            <h3 className={styles.accordionTitle} onClick={changeCollapsedState}>
                {props.title} {props.collapsed ? "+" : "-"}
            </h3>
        </div>
    )
}