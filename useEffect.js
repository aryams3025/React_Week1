import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty array means the interval is set up once

  return <p>Timer: {seconds} seconds</p>;
}

export default Timer;
