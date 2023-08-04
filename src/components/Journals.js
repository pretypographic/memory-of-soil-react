import { useContext } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';

function Journals({ frameSource, getCloser }) {
  const { setIsFocused } = useContext(ObjectContext);

  function handlePressingText(event) {
    let index = event.currentTarget.getAttribute('index');
    setIsFocused(true);
    getCloser({
      image: false,
      video: false,
      format: false,
      text: frameSource.texts.rus[index],
    });
  }

  return (
    <section className="journals">
      {
        frameSource.texts && frameSource.texts.rus.map((text, index) => (
          <div
            className='journals__block'
            key={index}
            index={index}
            onMouseDown={handlePressingText}>
            <p className='journal'>{text}</p>
          </div>
        ))
      } {
        frameSource.audioArrey && frameSource.audioArrey.map((audio, index) => (
          <div
            className='journals__sound'
            key={index}
            index={index}>
            <audio className="audio" src={audio} controls loop />
          </div>
        ))
      }
    </section>
  )
};

export { Journals };
