import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RingContext } from '../contexts/RingContext';
import { LanguageContext } from '../contexts/LanguageContext';

import { MemoriesEcho } from './MemoriesEcho';
import { Frame } from './Frame';

import { source } from '../utils/source';


function App() {
  const [ringContext, setRingContext] = useState(true);
  const [languageContext, setLanguageContext] = useState('eng');
  const [blackout, setBlackout] = useState(false);

  function handleBlackout(state) {
    setBlackout(state)
  }

  return (
    <LanguageContext.Provider value={{ languageContext, setLanguageContext }}>
      <RingContext.Provider value={{ ringContext, setRingContext }}>
        <>
          <Routes>
            <Route path='/' exact element={
              <MemoriesEcho
                handleBlackout={handleBlackout}
                blackout={blackout} />} />
            <Route path='/:subject' element={
              <Frame
                source={source}
                handleBlackout={handleBlackout}
                blackout={blackout} />} />
          </Routes>
        </>
      </RingContext.Provider>
    </LanguageContext.Provider>
  );
}

export { App };
