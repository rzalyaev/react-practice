import React, {useState} from 'react';
import styles from './UncontrolledOnOff.module.css';

export const UncontrolledOnOff = () => {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  const onButtonClass = `${styles.onButton} ${isOn ? styles.isOn: ''}`;
  const offButtonClass = `${styles.offButton} ${isOn ? '': styles.isOff}`;
  const indicatorClass = `${styles.indicator} ${isOn ? styles.isOn : styles.isOff}`;

  return (
      <div>
        <h3>Uncontrolled On-off switcher</h3>
        <h4>State is managed from the <u>inside</u> of a component</h4>
        <div className={styles.wrapper}>
          <button className={onButtonClass} onClick={turnOn}>On</button>
          <button className={offButtonClass} onClick={turnOff}>Off</button>
          <div className={indicatorClass}></div>
        </div>
      </div>
  );
};