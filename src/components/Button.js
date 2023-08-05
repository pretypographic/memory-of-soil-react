import { useContext, useEffect, useState } from 'react';
import { RingContext } from '../contexts/RingContext';

function Button({ isOpen, learnMoreAbout, closeAbout, languageConfig }) {
  const { ringContext } = useContext(RingContext);
  const [text, setText] = useState(languageConfig.about);

  function handleMouseDawn() {
    if (!isOpen && !ringContext) {
      setText(languageConfig.rings);
      learnMoreAbout();
    } else if (isOpen && ringContext) {
      setText(languageConfig.about);
      closeAbout();
    }
  }

  useEffect(() => {
    console.log(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    console.log('useEffect.Button', !isOpen && !ringContext, isOpen && ringContext);
    if (!isOpen || !ringContext) {
      setText(languageConfig.about);
    } else if (isOpen && ringContext) {
      setText(languageConfig.rings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageConfig]);

  return (
    <button
      className='memory-source'
      onMouseDown={handleMouseDawn}
      type="button"
      aria-label={text}>{text}</button>
  )
}

export { Button }
