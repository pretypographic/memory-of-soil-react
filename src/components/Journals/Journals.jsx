import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ObjectContext } from '../../contexts/ObjectContext';

function Journals({ frameSource, getCloser }) {
  const { languageContext } = useContext(LanguageContext);
  const { viewingIsFocused, setViewingIsFocused } = useContext(ObjectContext);
  const [index, setIndex] = useState(null);
  const [text, setText] = useState(frameSource.texts.eng)

  function handleMouseTouch(event) {
    event.currentTarget.classList.add('jurnals_touched');
  };

  function handleMouseOff(event) {
    event.currentTarget.classList.remove('jurnals_touched');
  };

  function handlePressingText(event) {
    setIndex(event.currentTarget.getAttribute('index'));
    setViewingIsFocused(true);
  };

  useEffect(() => {
    const journals = [...document.querySelectorAll('.journal')];
    journals.forEach((journal, index) => {
      if ((index + 1) % 2 === 0) {
        journal.style.animationDirection = 'alternate-reverse';
      }
    });
  }, []);

  useEffect(() => {
    if (languageContext === 'rus') {
      setText(frameSource.texts.rus);
    } else if (languageContext === 'eng') {
      setText(frameSource.texts.eng);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageContext]);

  useEffect(() => {
    getCloser({
      image: false,
      video: false,
      format: false,
      text: text[index],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, index])

  useEffect(() => {
    if (viewingIsFocused === false) {
      setIndex(null);
    }
  }, [viewingIsFocused])

  return (
    <section
      className="journals"
      onMouseOver={handleMouseTouch}
      onMouseOut={handleMouseOff}>
      {
        frameSource.texts && text.map((text, index) => (
          <div
            className='journals__block'
            key={index}
            index={index}
            onMouseDown={handlePressingText}>
            <p className={`journal ${frameSource.texts.format}`}>{text}</p>
          </div>
        ))
      }
      {/* <div className='journals__sound'>
        {
          frameSource.audioArrey && frameSource.audioArrey.map((audio, index) => (
          ))
        }
      </div> */}
    </section>
  )
};

export { Journals };
