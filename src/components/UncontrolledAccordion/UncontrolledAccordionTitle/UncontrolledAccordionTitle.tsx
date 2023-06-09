import React from "react";
import styles from "../../Accordion/AccordionTitle/AccordionTitle.module.css";

type PropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

const UncontrolledAccordionTitleComponent = (props: PropsType) => {
    const changeCollapsedState = () => props.setCollapsed()

    return(
        <div>
            <h3 className={styles.accordionTitle} onClick={changeCollapsedState}>
                {props.title} {props.collapsed ? "+" : "-"}
            </h3>
        </div>
    )
}

export const UncontrolledAccordionTitle = React.memo(UncontrolledAccordionTitleComponent);