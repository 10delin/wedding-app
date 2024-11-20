import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

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

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  if (typeof timeLeft === "string") {
    return <p>{timeLeft}</p>; // Mostrar el mensaje cuando ya es el gran día
  }

  return (
    <CountdownWrapper>
      <TimeBlock>
        <p>{timeLeft.days}</p>
        <p>Días</p>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <p>{timeLeft.hours}</p>
        <p>Horas</p>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <p>{timeLeft.minutes}</p>
        <p>Minutos</p>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <p>{timeLeft.seconds}</p>
        <p>Segundos</p>
      </TimeBlock>
    </CountdownWrapper>
  );
};

export default Countdown;

// Contenedor principal para todo el contador
const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`;

// Estilo de cada bloque de tiempo (días, horas, minutos, segundos)
const TimeBlock = styled.div`
  text-align: s;

  p:first-child {
    font-size: 25px; // Aumenta el tamaño de la fuente para el número
    font-weight: 700; // Aumenta el peso de la fuente para el número
    margin: 0;
  }

  p:last-child {
    font-size: 15px; // Tamaño más pequeño para la unidad de tiempo
    font-weight: 400; // Peso normal para la unidad
    margin: 0;
  }
`;

// Estilo para los dos puntos ":"
const Colon = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 0;
  color: white;
  padding: 0 5px;
`;
