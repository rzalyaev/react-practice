import React, {useEffect, useState} from 'react';

const DigitalClock = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <time>{date.toLocaleTimeString("ru")}</time>
    );
}

export default DigitalClock;