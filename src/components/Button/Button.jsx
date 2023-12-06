import { useContext, useEffect, useState } from 'react';
import { RingContext } from '../../contexts/RingContext';

function Button({ instructionState, learnInstruction, closeInstruction, languageConfig }) {
  const { ringContext } = useContext(RingContext);
  const [text, setText] = useState(languageConfig.instruction);

  function handleMouseDawn() {
    if (!instructionState && !ringContext) {
      setText(languageConfig.rings);
      learnInstruction();
    } else if (instructionState && ringContext) {
      setText(languageConfig.instruction);
      closeInstruction();
    }
  }

  useEffect(() => {
    if (!instructionState || !ringContext) {
      setText(languageConfig.instruction);
    } else if (instructionState && ringContext) {
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
