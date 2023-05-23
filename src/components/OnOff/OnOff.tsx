import React from "react";
import styles from "./OnOff.module.css";

type PropsType = {
    switchState: boolean
    setSwitchState: (newSwitchState: boolean) => void
}

const OnOffComponent = (props: PropsType) => {
    const turnOn = () => props.setSwitchState(true)
    const turnOff = () => props.setSwitchState(false)
    const onButtonClassName = `${styles.on} ${!props.switchState && styles.inactive}`
    const offButtonClassName = `${styles.off} ${props.switchState && styles.inactive}`
    const indicatorClassName = `${styles.indicator} ${props.switchState ? styles.indicatorOn : styles.indicatorOff}`
    return(
        <div>
            <h3>Controlled OnOff</h3>
            <div className={styles.onOff}>
                <div className={onButtonClassName} onClick={turnOn}>
                    On
                </div>
                <div className={offButtonClassName} onClick={turnOff}>
                    Off
                </div>
                <div className={indicatorClassName}></div>
            </div>
        </div>
    )
}

export const OnOff = React.memo(OnOffComponent);