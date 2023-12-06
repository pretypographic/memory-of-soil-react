import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { instruction } from '../../utils/source';

function Instruction({ instructionIsOpen }) {
  const { languageContext } = useContext(LanguageContext);
  const [translation, setTranslation] = useState(instruction.rus);

  useEffect(() => {
    if (languageContext === 'rus') {
      setTranslation(instruction.rus);
    } else if (languageContext === 'eng') {
      setTranslation(instruction.eng);
    }
  }, [languageContext]);

  return (
    <footer className={`instruction ${instructionIsOpen ? 'instruction_seen' : 'disabled'}`}>
      <article className='instruction__walk'>
        <div className='instruction__column'>
          <h2 className='heading'>{translation.column.motivation.heading}</h2>
          {
            translation.column.motivation.text.map((p, i) => (
              <p className='text' key={0 + i}>{p}</p>
            ))
          }
        </div>
        <div className='instruction__column'>
          <h2 className='heading' >{translation.column.methods.heading}</h2>
          {
            translation.column.methods.text.map((p, i) => (
              <p className='text' key={1 + i}>{p}</p>
            ))
          }
        </div>
        <div className='instruction__column'>
          <h2 className='heading'>{translation.column.inspiration.heading}</h2>
          {
            translation.column.inspiration.text.map((p, i) => (
              <p className='text' key={2 + i}>{p}</p>
            ))
          }
        </div>
      </article>
      <div className='instruction__names'>
        {
          translation.names.map(({ contributions }, i) => (
            <p className='text' key={3 + i}>{contributions}</p>
          ))
        } {
          translation.names.map(({ name }, i) => (
            <p className='text instruction__name' key={4 + i}>{name}</p>
          ))
        }
      </div>
    </footer>
  )
}

export { Instruction }
