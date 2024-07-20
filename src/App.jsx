import { useState } from 'react';

import './App.css';
import Weather from './assets/Weather';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>openWeather</h1>
      <Weather />{' '}
    </>
  );
}

export default App;
