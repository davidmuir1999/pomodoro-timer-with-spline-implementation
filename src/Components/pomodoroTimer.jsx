import React, { useEffect, useState } from "react";
import "./pomodoroTimer.css";

const PomodoroTimer = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setTime(isBreak ? 0.1 * 60 : 0.05 * 60);

      setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="pomodoro__container">
      <div className="pomodoro__wrapper">
        <h1>{isBreak ? "Break" : "Studying"}</h1>
        <p>{formatTime(time)}</p>
        <button onClick={handleStart} disabled={isActive}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isActive}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
