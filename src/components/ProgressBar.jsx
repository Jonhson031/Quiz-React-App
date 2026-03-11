import { useState, useEffect } from 'react';

export default function ProgressBar({ timer, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const setTimeOut = setTimeout(onTimeOut, timer);
    return () => {
      clearTimeout(setTimeOut);
    };
  }, [onTimeOut, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timer} />;
}
