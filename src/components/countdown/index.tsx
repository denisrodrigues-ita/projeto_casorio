"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Countdown: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const currentTime = new Date().getTime();
    const difference = targetDate.getTime() - currentTime;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(difference / (24 * 60 * 60 * 1000))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor(
      (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((difference % (60 * 1000)) / 1000)
      .toString()
      .padStart(2, "0");

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-4 flex justify-center gap-8">
      <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-4xl bg-quaternary rounded-lg p-2 w-16 text-center">
          {timeLeft.days}
        </p>
        <p>Dias</p>
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-4xl bg-quaternary rounded-lg p-2 w-16 text-center">
          {timeLeft.hours}
        </p>
        <p>Horas</p>
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-4xl bg-quaternary rounded-lg p-2 w-16 text-center">
          {timeLeft.minutes}
        </p>
        <p>Minutos</p>
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-4xl bg-quaternary rounded-lg p-2 w-16 text-center">
          {timeLeft.seconds}
        </p>
        <p>Segundos</p>
      </div>
    </div>
  );
};

export default Countdown;
