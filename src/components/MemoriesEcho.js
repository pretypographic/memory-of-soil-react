import { useState, useContext, useEffect } from "react";
import { LanguageContext } from '../contexts/LanguageContext';
import { RingContext } from '../contexts/RingContext';
import { Language } from "./Language";
import { Button } from "./Button";
import { Main } from "./Main";
import { About } from "./About";
import { Plug } from "./Plug";

function MemoriesEcho ({ handleBlackout, blackout }) {
  const { languageContext } = useContext(LanguageContext);
  const { setRingContext } = useContext(RingContext);
  const [languageConfig, setLanguageConfig] = useState({
    about: 'о проекте',
    rings: 'кольца',
  });
  const [isOpen, setIsOpen] = useState(false);

  function learnMoreAbout() {
    setIsOpen(true);
    handleBlackout(true);
    setRingContext(true);
  }

  function closeAbout() {
    setIsOpen(false);
    handleBlackout(false);
    setRingContext(false);
  }

  useEffect(() => {
    if (languageContext === 'rus') {
      setLanguageConfig(prevConfig => ({
        ...prevConfig,
        about: 'о проекте',
        rings: 'кольца',
      }));
    } else if (languageContext === 'eng') {
      setLanguageConfig(prevConfig => ({
        ...prevConfig,
        about: 'about',
        rings: 'rings',
      }));
    }
  }, [languageContext]);

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

  return (
    <div div className='memories-echo'>
      <Language />
      <Button
        aboutState={isOpen}
        learnMoreAbout={learnMoreAbout}
        closeAbout={closeAbout}
        languageConfig={languageConfig} />
      <Main
        generateAnimationStyles={generateAnimationStyles}
        clearAnimationStyles={clearAnimationStyles}
        handleBlackout={handleBlackout} />
      <About
        isOpen={isOpen} />
      <Plug
        blackout={blackout} />
    </div>
  );
}

export { MemoriesEcho }
