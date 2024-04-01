import React from 'react';
import Square from './Square';
import OnlyEven from './OnlyEven';
import Temperature from './Temperature';

function App() {
  const [bgColor, setBgColor] = React.useState('red');

  const handleColorChange = () => {
    setBgColor(bgColor === 'red' ? 'green' : 'red');
  };

  const styles = {
    backgroundColor: bgColor,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
      <h1>Задача 1: Компонент Square</h1>
      <Square n={3} />

      <h1>Задача 2: Компонент OnlyEven</h1>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />

      <h1>Задача 3: Компонент Temperature</h1>
      <Temperature t={-5} />
      <Temperature t={25} />

      <h1>Задача 4: Кнопка для смены цвета фона</h1>
      <button onClick={handleColorChange}>Change Background Color</button>
    </div>
  );
}

export default App;