import { useEffect, useState, useCallback } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      setTimeLeft("¡Es el gran día!");
      return null;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return <p>{timeLeft}</p>;
};

export default Countdown;
