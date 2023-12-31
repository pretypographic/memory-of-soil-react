import { useContext, useState, useEffect } from 'react';
import { ObjectContext } from '../../contexts/ObjectContext';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Viewing({ focusedOn }) {
  const { viewingIsFocused, setViewingIsFocused } = useContext(ObjectContext);
  const [text, setText] = useState([]);


  function stepBack(event) {
    if (!event.target.classList.contains('viewing__video')) {
      setViewingIsFocused(false);
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
    <div
      className={`viewing ${viewingIsFocused
        ? 'viewing_condition_opened'
        : 'viewing_condition_closed'}`}
      onMouseDown={stepBack}>
      <button className='viewing__close-button' />
      {
        focusedOn.video &&
        <video controls className={`viewing__video ${focusedOn.format}`}>
          <source
            src={focusedOn.video}
            type='video/mp4'
            id='source' />
          Ваш браузер не поддерживает встроенные видео :(
        </video>
      } {/* <!-- медиа --> */} {
        focusedOn.image && <div
          className='viewing__image'
          style={focusedOn.image} />
      } {/* <!-- изображение --> */} {
        text.length > 0 && text.map((line, index) => (
          <p key={index} className='viewing__text'>{line}</p>
        ))
      } {/* <!-- текст --> */}

    </div>
    // {/* <!-- попап --> */ }
  );
};

export { Viewing };
