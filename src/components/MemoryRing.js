/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';
import { useNavigate } from 'react-router-dom';

function MemoryRing({ link, name, style, wawesStyle, handlePressRing, handleMouseTouchesRing, handleSelfPossession, images, ri }) {
  const clickedRing = useContext(RingContext);
  const navigate = useNavigate();

  function handlePressing() {
    handlePressRing();
    setTimeout(() => {
      navigate(link, { replace: true });
    }, 3000);
  }

  function handleMouseTouch(event) {
    handleMouseTouchesRing(event, name);
  }

  function handleMouseOff() {
    handleSelfPossession();
  }

  return (
    <div
      className='memory-ring'
      data-name={name}
      data-index={ri}
      style={style}
      onClick={handlePressing}
      onMouseEnter={handleMouseTouch}
      onMouseLeave={handleMouseOff}
    >
      <img className={`memory-ring__lit ${clickedRing && 'disabled'}`} src={images.lit} />
      <img className={`memory-ring__title ${clickedRing && 'disabled'}`} src={images.title} />
      <img
        className='memory-ring__shine'
        src={images.shine}
        style={wawesStyle} />
    </div>
  )
};

export { MemoryRing };
