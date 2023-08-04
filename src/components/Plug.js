import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';

function Plug() {
  const { inContext } = useContext(RingContext);

  return (
    <div className={`blackout ${inContext && 'blackout_seen'}`}></div>
  )
};

export { Plug };
