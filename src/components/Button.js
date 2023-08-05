import { useContext, useState } from 'react';
import { RingContext } from '../contexts/RingContext';

function Button({ about, learnMoreAbout, closeAbout }) {
  const { ringContext } = useContext(RingContext);
  const [text, setText] = useState('о проекте')

  function handleMouseDawn() {
    if (!about && !ringContext) {
      setText('кольца');
      learnMoreAbout();
    } else if (about && ringContext) {
      setText('о проекте');
      closeAbout();
    }
  }

  return (
    <button
      className='memory-source'
      onMouseDown={handleMouseDawn}
      type="button"
      aria-label={text}>{text}</button>
  )
}

export { Button }
