import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';

function Plug() {
  const clickedRing = useContext(RingContext);

  return (
    <div className={`blackout ${clickedRing && 'blackout_seen'}`}></div>
  )
};

export { Plug };
