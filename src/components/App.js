import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RingContext } from '../contexts/RingContext';
import { LanguageContext } from '../contexts/LanguageContext';

import { Main } from './Main';
import { Frame } from './Frame';
import { Plug } from './Plug';

import { source } from '../utils/source';

function App() {
  const [ringContext, setRingContext] = useState(true);
  const [languageContext, setLanguageContext] = useState('eng');
  const [blackout, setBlackout] = useState(false);

  function generateAnimationStyles(t, delay, step, iterations, key) {
    return {
      animationName: 'shine',
      animationDuration: `${t}s`,
      animationDelay: `${delay + step}s`,
      animationTimingFunction: 'ease-in',
      animationIterationCount: iterations,
      animationDirection: 'alternate',
      animationFillMode: 'both',
      animationKeyframes: key,
    };
  };

  function clearAnimationStyles() {
    return {
      animationName: '',
      animationDuration: '',
      animationDelay: '',
      animationTimingFunction: '',
      animationIterationCount: '',
      animationDirection: '',
      animationFillMode: '',
      animationKeyframes: '',
    };
  }

  function handleBlackout(state) {
    setBlackout(state)
  }

  return (
    <LanguageContext.Provider value={{ languageContext, setLanguageContext }}>
      <RingContext.Provider value={{ ringContext, setRingContext }}>
        <div className='memories-echo'>
          <Routes>
            <Route path='/' exact element={
              <Main
                generateAnimationStyles={generateAnimationStyles}
                clearAnimationStyles={clearAnimationStyles}
                handleBlackout={handleBlackout} />} />
            <Route path='/:subject' element={
              <Frame
                source={source}
                handleBlackout={handleBlackout} />} />
          </Routes>
          <Plug blackout={blackout} />
        </div>
      </RingContext.Provider>
    </LanguageContext.Provider>
  );
}

export { App };
