import React from 'react';
import styles from './ControlledOnOff.module.css';

type ControlledOnOffPropsType = {
  isOn: boolean
  turnOn: () => void
  turnOff: () => void
}

export const ControlledOnOff = ({isOn, turnOn, turnOff}: ControlledOnOffPropsType) => {
  const onButtonClass = `${styles.onButton} ${isOn ? styles.isOn: ''}`;
  const offButtonClass = `${styles.offButton} ${isOn ? '': styles.isOff}`;
  const indicatorClass = `${styles.indicator} ${isOn ? styles.isOn : styles.isOff}`;

  return (
      <div>
        <h3>Controlled On-off switcher</h3>
        <h4>State is managed from the <u>outside</u> of a component</h4>
        <div className={styles.wrapper}>
          <button className={onButtonClass} onClick={turnOn}>On</button>
          <button className={offButtonClass} onClick={turnOff}>Off</button>
          <div className={indicatorClass}></div>
        </div>
      </div>
  );
};