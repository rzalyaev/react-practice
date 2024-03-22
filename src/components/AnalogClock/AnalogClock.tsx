import React, {useEffect, useState} from 'react';
import styles from './AnalogClock.module.css';

export const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() / 2;
  const minuteDeg = time.getMinutes() * 6;
  const secondDeg = time.getSeconds() * 6;

  return (
      <div className={styles.clock}>
        <div className={`${styles.hand} ${styles.hour}`}
             style={{transform: `rotate(${hourDeg}deg)`}}></div>
        <div className={`${styles.hand} ${styles.minute}`}
             style={{transform: `rotate(${minuteDeg}deg)`}}></div>
        <div className={`${styles.hand} ${styles.second}`}
             style={{transform: `rotate(${secondDeg}deg)`}}></div>
      </div>
  );
};

export default AnalogClock;