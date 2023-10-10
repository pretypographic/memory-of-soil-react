import { useContext, useEffect, useState } from 'react';
import { RingContext } from '../contexts/RingContext';

function Button({ aboutState, learnMoreAbout, closeAbout, languageConfig }) {
  const { ringContext } = useContext(RingContext);
  const [text, setText] = useState(languageConfig.about);

  function handleMouseDawn() {
    if (!aboutState && !ringContext) {
      setText(languageConfig.rings);
      learnMoreAbout();
    } else if (aboutState && ringContext) {
      setText(languageConfig.about);
      closeAbout();
    }
  }

  useEffect(() => {
    if (!aboutState || !ringContext) {
      setText(languageConfig.about);
    } else if (aboutState && ringContext) {
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
