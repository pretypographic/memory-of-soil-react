import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { about } from '../utils/source';

function About({ isOpen }) {
  const { languageContext } = useContext(LanguageContext);
  const [translation, setTranslation] = useState(about.rus);

  useEffect(() => {
    if (languageContext === 'rus') {
      setTranslation(about.rus);
    } else if (languageContext === 'eng') {
      setTranslation(about.eng);
    }
  }, [languageContext]);

  return (
    <footer className={`about ${isOpen ? 'about_seen' : 'disabled'}`}>
      <div className='about__plate' />
      <article className='about__walk'>
        <div className='about__column'>
          <h2 className='heading'>{translation.column.motivation.heading}</h2>
          {
            translation.column.motivation.text.map((p, i) => (
              <p className='text' key={0 + i}>{p}</p>
            ))
          }
        </div>
        <div className='about__column'>
          <h2 className='heading' >{translation.column.methods.heading}</h2>
          {
            translation.column.methods.text.map((p, i) => (
              <p className='text' key={1 + i}>{p}</p>
            ))
          }
        </div>
        <div className='about__column'>
          <h2 className='heading'>{translation.column.inspiration.heading}</h2>
          {
            translation.column.inspiration.text.map((p, i) => (
              <p className='text' key={2 + i}>{p}</p>
            ))
          }
        </div>
      </article>
      <div className='about__names'>
        {
          translation.names.map(({ contributions }, i) => (
            <p className='text' key={3 + i}>{contributions}</p>
          ))
        }
        {
          translation.names.map(({ name }, i) => (
            <p className='text about__name' key={4 + i}>{name}</p>
          ))
        }
      </div>
    </footer>
  )
}

export { About }
