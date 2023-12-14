/* eslint-disable jsx-a11y/alt-text */
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { LanguageContext } from '../../contexts/LanguageContext';
import { RingContext } from '../../contexts/RingContext';

function MemoryRing({ link, name, style, wawesStyle, handlePressRing, handleMouseTouchesRing, handleSelfPossession, images, ri }) {
  const { languageContext } = useContext(LanguageContext);
  const { ringContext } = useContext(RingContext);
  const navigate = useNavigate();
  const timeoutRef = useRef();

  function handlePressing(event) {
    event.stopPropagation();
    handlePressRing();
    if (!ringContext) {
      timeoutRef.current = setTimeout(() => {
        navigate(link, { replace: true });
      }, 3000);
    };
  }

  function handleMouseTouch(event) {
    event.stopPropagation();
    handleMouseTouchesRing(event, name);
  }

  function handleMouseOff(event) {
    event.stopPropagation();
    handleSelfPossession();
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      };
    }
  }, [])

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
      {
        languageContext === 'rus'
          ? <img className={`memory-ring__title ${ringContext && 'disabled'}`} src={images.title.rus} />
          : <></>
      }      {
        languageContext === 'eng'
          ? <img className={`memory-ring__title ${ringContext && 'disabled'}`} src={images.title.eng} />
          : <></>
      }
      <img
        className='memory-ring__shine'
        src={images.shine}
        style={wawesStyle} />
    </div>
  )
};

export { MemoryRing };
