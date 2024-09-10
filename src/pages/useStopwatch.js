import { useState } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState(null);

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  const Start = () => {
    if (status === null) {
      const newInterval = setInterval(myFun, 16.67);
      setStatus(newInterval);
    }
  };
  const Stop = () => {
    if (status) {
      clearInterval(status);
      setStatus(null);
    }
  };
  const Reset = () => {
    clearInterval(status);
    setStatus(null);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };
  const myFun = () => {
    if (updMilli === 60) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMilli++;
    return setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli });
  };

  return { time, Start, Stop, Reset };
};

export default useStopwatch;
