import { useContext } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Popup({ focusedOn }) {
  const { isFocused, setIsFocused } = useContext(ObjectContext);

  function stepBack(event) {
    if (!event.target.classList.contains('popup__video')) {
      setIsFocused(false);
    };
  };

  return (
    <section
      className={`popup ${isFocused
        ? 'popup_condition_opened'
        : 'popup_condition_closed'}`}
      onMouseDown={stepBack}>
      {
        focusedOn.video && <video controls className={`popup__video ${focusedOn.format}`}>
          <source
            src={focusedOn.video}
            type='video/mp4'
            id='source' />
          Ваш браузер не поддерживает встроенные видео :(
        </video>
      } {/* <!-- медиа --> */} {
        focusedOn.image && <div
          className='popup__image'
          style={focusedOn.image} />
      } {/* <!-- изображение --> */}
      <p className='popup__text'>{focusedOn.text}</p>
      {/* <!-- текст --> */}
    </section>
    // {/* <!-- попап --> */ }
  );
};

export { Popup };
