import React, {useState, useEffect} from 'react';
import styles from './AnalogClock.module.css';

function AnalogClock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        setDate(new Date());
    }

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

    return (
        <div className={`${styles.analogClock}`}>
            <div className={`${styles.clockFace}`}>
                <span className={`${styles.hour} ${styles.hour1}`}>1</span>
                <span className={`${styles.hour} ${styles.hour2}`}>2</span>
                <span className={`${styles.hour} ${styles.hour3}`}>3</span>
                <span className={`${styles.hour} ${styles.hour4}`}>4</span>
                <span className={`${styles.hour} ${styles.hour5}`}>5</span>
                <span className={`${styles.hour} ${styles.hour6}`}>6</span>
                <span className={`${styles.hour} ${styles.hour7}`}>7</span>
                <span className={`${styles.hour} ${styles.hour8}`}>8</span>
                <span className={`${styles.hour} ${styles.hour9}`}>9</span>
                <span className={`${styles.hour} ${styles.hour10}`}>10</span>
                <span className={`${styles.hour} ${styles.hour11}`}>11</span>
                <span className={`${styles.hour} ${styles.hour12}`}>12</span>
                <div className={`${styles.hand} ${styles.hourHand}`}
                     style={{transform: `translateX(-50%) rotate(${hoursDegrees}deg)`}}/>
                <div className={`${styles.hand} ${styles.minuteHand}`}
                     style={{transform: `translateX(-50%) rotate(${minutesDegrees}deg)`}}/>
                <div className={`${styles.hand} ${styles.secondHand}`} style={{
                    transform: `translateX(-50%) rotate(${secondsDegrees}deg)`,
                    transition: `${seconds === 0 ? 'none' : 'transform 1s linear'}`
                }}/>
            </div>
        </div>
    );
}

export default AnalogClock;