import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RingContext } from '../contexts/RingContext';

import { Header } from './Header';
import { Main } from './Main';
import { Frame } from './Frame';
import { Plug } from './Plug';

import { source } from '../utils/source';

function App() {
  const [clickedState, setClickedState] = useState(false);

  function setContext() {
    setClickedState(!clickedState);
  }

  function animation(t, delay, step, iterations, key) {
    const animationType = `shine ${t}s ${delay + step}s ease-in ${iterations} alternate ${key}`;
    return animationType;
  };

  return (
    <RingContext.Provider value={clickedState}>
      <div className='memories-echo'>
        <Header />

        <Routes>
          <Route path='/' exact element={
            <Main
              setContext={setContext}
              animation={animation} />
          } />
          <Route path='/:subject' element={
            <Frame setContext={setContext} source={source} />
          } />
        </Routes>

        <Plug />
      </div>
    </RingContext.Provider>
  );
}

export { App };
