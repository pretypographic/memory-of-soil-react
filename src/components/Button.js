import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';

function Button() {
  const clickedRing = useContext(RingContext);

  return (
    <p className={`memory-source ${clickedRing && 'disabled'}`}>о проекте</p>
  )
}

export { Button }
