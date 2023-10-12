import { useContext, useState, useEffect } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Popup({ focusedOn }) {
  const { isFocused, setIsFocused } = useContext(ObjectContext);
  const [text, setText] = useState([]);


  function stepBack(event) {
    if (!event.target.classList.contains('popup__video')) {
      setIsFocused(false);
    };
  };

  useEffect(() => {
    if (focusedOn.text && focusedOn.text.includes('\n')) {
      console.log(focusedOn.text);
      const lines = focusedOn.text.split('\n');
      console.log(lines);
      return setText(lines);
    }
    setText([focusedOn.text])
  }, [focusedOn]);

  return (
    <section
      className={`popup ${isFocused
        ? 'popup_condition_opened'
        : 'popup_condition_closed'}`}
      onMouseDown={stepBack}>
      <button className='popup__close-button' />
      {
        focusedOn.video &&
        <video controls className={`popup__video ${focusedOn.format}`}>
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
      } {/* <!-- изображение --> */} {
        text.length > 0 && text.map((line, index) => (
          <p key={index} className='popup__text'>{line}</p>
        ))
      } {/* <!-- текст --> */}

    </section>
    // {/* <!-- попап --> */ }
  );
};

export { Popup };
