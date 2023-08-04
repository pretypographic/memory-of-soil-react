/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';
import { useNavigate } from 'react-router-dom';

function MemoryRing({ link, name, style, wawesStyle, handlePressRing, handleMouseTouchesRing, handleSelfPossession, images, ri }) {
  const { ringContext } = useContext(RingContext);
  const navigate = useNavigate();

  function handlePressing(event) {
    event.stopPropagation();
    handlePressRing();
    if (!ringContext) {
      setTimeout(() => {
        navigate(link, { replace: true });
      }, 3000);
    };
  };

  function handleMouseTouch(event) {
    event.stopPropagation();
    handleMouseTouchesRing(event, name);
  };

  function handleMouseOff(event) {
    event.stopPropagation();
    handleSelfPossession();
  };

  return (
    <div
      className={`memory-ring ${!ringContext && 'memory-ring_pointer'}`}
      data-name={name}
      data-index={ri}
      style={style}
      onMouseDown={handleMouseOff}
      onMouseUp={handlePressing}
      onMouseOver={handleMouseTouch}
      onMouseOut={handleMouseOff}>
      <img className={`memory-ring__lit ${ringContext && 'disabled'}`} src={images.lit} />
      <img className={`memory-ring__title ${ringContext && 'disabled'}`} src={images.title} />
      <img
        className='memory-ring__shine'
        src={images.shine}
        style={wawesStyle} />
    </div>
  )
};

export { MemoryRing };
