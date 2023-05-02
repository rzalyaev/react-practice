import React from "react";
import styles from "./OnOff.module.css";

type PropsType = {
    isOn: boolean
}

export const OnOff = (props: PropsType) => {
    return(
        <div className={styles.onOff}>
            <div className={`${styles.on} ${!props.isOn && styles.inactive}`}>On</div>
            <div className={`${styles.off} ${props.isOn && styles.inactive}`}>Off</div>
            <div className={`${styles.indicator} ${props.isOn ? styles.indicatorOn : styles.indicatorOff}`}></div>
        </div>
    )
}