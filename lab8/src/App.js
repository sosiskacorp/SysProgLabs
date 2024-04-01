import React from 'react';
import CountdownTimer from './CountdownTimer';
import Timer from './Timer';
import PrimeNumbers from './PrimeNumbers';
import TrafficLight from './TrafficLight';
import Revert from './Revert';

function App() {
  return (
    <div>
      <h2>Задача 1: Обратный таймер</h2>
      <CountdownTimer />

      <h2>Задача 2: Таймер с кнопкой</h2>
      <Timer />

      <h2>Задача 3: Вывод простых чисел</h2>
      <PrimeNumbers />

      <h2>Задача 4: Светофор</h2>
      <TrafficLight />

      <h2>Задача 5: Перенос символов</h2>
      <Revert s="привет!" />
    </div>
  );
}

export default App;