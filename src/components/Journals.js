import { useContext, useEffect } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';

function Journals({ frameSource, getCloser }) {
  const { setIsFocused } = useContext(ObjectContext);

  function handleMouseTouch(event) {
    event.currentTarget.classList.add('jurnals_touched');
  };

  function handleMouseOff(event) {
    event.currentTarget.classList.remove('jurnals_touched');
  };

  function handlePressingText(event) {
    let index = event.currentTarget.getAttribute('index');
    setIsFocused(true);
    getCloser({
      image: false,
      video: false,
      format: false,
      text: frameSource.texts.rus[index],
    });
  };

  useEffect(() => {
    const journals = [...document.querySelectorAll('.journal')];
    journals.forEach((journal, index) => {
      if ((index + 1) % 2 === 0) {
        journal.style.animationDirection = 'alternate-reverse';
      }
    });
  }, []);

  return (
    <section
      className="journals"
      onMouseOver={handleMouseTouch}
      onMouseOut={handleMouseOff}>
      {
        frameSource.texts && frameSource.texts.rus.map((text, index) => (
          <div
            className='journals__block'
            key={index}
            index={index}
            onMouseDown={handlePressingText}>
            <p className={`journal ${frameSource.texts.format}`}>{text}</p>
          </div>
        ))
      }
      <div
        className='journals__sound'> {
          frameSource.audioArrey && frameSource.audioArrey.map((audio, index) => (
            <audio
              className="audio"
              key={index}
              src={audio}
              controls
              loop />
          ))
        }
      </div>
    </section>
  )
};

export { Journals };
