import React, {useState} from 'react';
import styles from './OnOff.module.css';

export const OnOff = () => {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  const onButtonClass = `${styles.onButton} ${isOn ? styles.isOn: ''}`;
  const offButtonClass = `${styles.offButton} ${isOn ? '': styles.isOff}`;
  const indicatorClass = `${styles.indicator} ${isOn ? styles.isOn : styles.isOff}`;

  return (
      <>
        <h3>On-off switcher</h3>
        <div className={styles.wrapper}>
          <button className={onButtonClass} onClick={turnOn}>On</button>
          <button className={offButtonClass} onClick={turnOff}>Off</button>
          <div className={indicatorClass}></div>
        </div>
      </>
  );
};