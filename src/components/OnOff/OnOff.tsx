import React, {useState} from "react";
import styles from "./OnOff.module.css";

type PropsType = {
    isOn: boolean
}

export const OnOff = (props: PropsType) => {
    const [toggle, setToggle] = useState(props.isOn);

    return(
        <div className={styles.onOff}>
            <div className={`${styles.on} ${!toggle && styles.inactive}`}
                 onClick={() => {setToggle(true)}}>
                On
            </div>
            <div className={`${styles.off} ${toggle && styles.inactive}`}
                 onClick={() => {setToggle(false)}}>
                Off
            </div>
            <div className={`${styles.indicator} ${toggle ? styles.indicatorOn : styles.indicatorOff}`}></div>
        </div>
    )
}