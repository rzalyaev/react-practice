import React, {useState} from "react";
import styles from "../OnOff/OnOff.module.css";

const UncontrolledOnOffComponent = () => {
    const [switchState, setSwitchState] = useState<boolean>(false);

    const turnOn = () => setSwitchState(true)
    const turnOff = () => setSwitchState(false)
    const onButtonClassName = `${styles.on} ${!switchState && styles.inactive}`
    const offButtonClassName = `${styles.off} ${switchState && styles.inactive}`
    const indicatorClassName = `${styles.indicator} ${switchState ? styles.indicatorOn : styles.indicatorOff}`
    return(
        <div>
            <h3>Uncontrolled OnOff</h3>
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

export const UncontrolledOnOff = React.memo(UncontrolledOnOffComponent);