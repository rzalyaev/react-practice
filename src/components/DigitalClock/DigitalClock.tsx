import React, {useEffect, useState} from 'react';

export const DigitalClock = () => {
  console.log('DigitalClock from component');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const formatString = (n: number) => n < 10 ? '0' + n : n;
  const hours = formatString(date.getHours());
  const minutes = formatString(date.getMinutes());
  const seconds = formatString(date.getSeconds());

  return (
      <div>
        {`${hours}:${minutes}:${seconds}`}
      </div>
  );
};