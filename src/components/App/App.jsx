import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { RingContext } from '../../contexts/RingContext';
import { LanguageContext } from '../../contexts/LanguageContext';

import { MemoriesEcho } from '../MemoriesEcho/MemoriesEcho';
import { Blind } from '../Blind/Blind';
import { MemoryRings } from "../MemoryRings/MemoryRings";
import { Frame } from '../Frame/Frame';

import { source } from '../../utils/source';

function App() {
  const [ringContext, setRingContext] = useState(true);
  const [languageContext, setLanguageContext] = useState('eng');
  const [instructionIsOpen, setInstructionIsOpen] = useState(false);
  const [blindOpen, setBlindOpen] = useState(false);
  const [blackOut, setBlackOut] = useState(false);
  const navigate = useNavigate();

  function handleStartClick() {
    setBlindOpen(true);
    // window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/main", { replace: true });
    }, 300);
  }

  function switchInstructionIsOpen(state) {
    setInstructionIsOpen(state);
  }

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
  }

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

  function executeBlackOut(state) {
    setBlackOut(state)
  }

  return (
    <LanguageContext.Provider value={{ languageContext, setLanguageContext }}>
      <RingContext.Provider value={{ ringContext, setRingContext }}>
        <div className="app">
          <Routes>
            <Route path='/' exact element={
              <MemoriesEcho
                instructionIsOpen={instructionIsOpen}
                switchInstructionIsOpen={switchInstructionIsOpen}
                executeBlackOut={executeBlackOut} />}>
              <Route path='' exact element={
                <Blind
                  blindOpen={blindOpen}
                  handleStartClick={handleStartClick} />} />
              <Route path='main' exact element={
                <MemoryRings
                  generateAnimationStyles={generateAnimationStyles}
                  clearAnimationStyles={clearAnimationStyles}
                  executeBlackOut={executeBlackOut}
                  blackOut={blackOut} />} />
            </Route>
            <Route path='/:subject' element={
              <Frame
                source={source}
                executeBlackOut={executeBlackOut}
                blackOut={blackOut} />} />
          </Routes>
        </div>
      </RingContext.Provider>
    </LanguageContext.Provider>
  );
}

export { App };
