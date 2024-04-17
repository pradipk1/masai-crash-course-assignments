import React, { useEffect, useState } from 'react'

function TimerFun() {
    const [state, setState] = useState({seconds: 0});

    const tick = () => {
        setState((prev) => ({
            seconds: prev.seconds+1
        }));
    }

    useEffect(() => {
        let timerId = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

  return (
    <div>
        Seconds: {state.seconds}
    </div>
  )
}

export default TimerFun;