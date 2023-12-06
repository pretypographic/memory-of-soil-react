/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react';
import { images } from '../../utils/images';

function MemoryWave({ wawesStyle }) {
  useEffect(() => {
    // что это?
  }, [wawesStyle])
  return (
    <div className='memory-wave'>
      <img
        className='memory-wave__shine'
        src={images.waves[10]}
        style={wawesStyle[9]}
      />
      <img
        className='memory-wave__shine'
        src={images.waves[11]}
        style={wawesStyle[10]}
      />
      <img
        className='memory-wave__shine'
        src={images.waves[12]}
        style={wawesStyle[11]}
      />
      <img
        className='memory-wave__shine'
        src={images.waves[13]}
        style={wawesStyle[12]}
      />
      <img
        className='memory-wave__shine'
        src={images.waves[14]}
        style={wawesStyle[13]}
      />
      <img
        className='memory-wave__shine'
        src={images.waves[15]}
        style={wawesStyle[14]}
      />
    </div>
  )
};

export { MemoryWave };
