import React from "react";
import styles from "./AccordionTitle.module.css";

type PropsType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

const AccordionTitleComponent = (props: PropsType) => {
    const changeCollapsedState = () => props.setCollapsed()

    return(
        <div>
            <h3 className={styles.accordionTitle} onClick={changeCollapsedState}>
                {props.title} {props.collapsed ? "+" : "-"}
            </h3>
        </div>
    )
}

export const AccordionTitle = React.memo(AccordionTitleComponent);