import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useParams, Link } from 'react-router-dom';
import { ObjectContext } from '../contexts/ObjectContext';
import { Language } from './Language';
import { Visual } from './Visual';
import { Popup } from './Popup';

function Frame({ source, handleBlackout }) {
  const { languageContext } = useContext(LanguageContext);
  let { subject } = useParams();
  let frameSource = source[subject];
  const [title, setTitle] = useState(frameSource.title.rus);
  const [text, setText] = useState('обратно');
  const [isFocused, setIsFocused] = useState(false);
  const [focus, setFocus] = useState({
    image: false,
    video: false,
    format: false,
    text: false,
  });

  function getCloser(object) {
    setFocus(object);
  };

  useEffect(() => {
    handleBlackout(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (languageContext === 'rus') {
      setText('обратно');
      setTitle(frameSource.title.rus);
    } else if (languageContext === 'eng') {
      setText('back');
      setTitle(frameSource.title.eng);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageContext]);

  useEffect(() => {
    if (!isFocused) {
      setFocus({
        image: false,
        video: false,
        format: false,
        text: false,
      });
    };
  }, [isFocused]);

  return (
    <ObjectContext.Provider value={{ isFocused, setIsFocused }}>
      <div className="root">
        {/* корень */}
        {
          focus.text &&
          <Language />
        }
        <header className={`header ${isFocused && 'header__title_disappeared'}`}>
          <h1 className="header__title">{title}</h1>
        </header>
        {/* контртитул */}
        <Visual
          frameSource={frameSource}
          getCloser={getCloser}
          popupisFocused={isFocused} />
        {/* разворот */}
        <footer className={`footer ${isFocused && 'footer__link_disappeared'}`}>
          <Link to='/' className='footer__link'>{text}</Link>
        </footer>
        {/* нижний колонтитул */}
        <Popup focusedOn={focus} />
        {/* попап */}
      </div >
    </ObjectContext.Provider>
  );
};

export { Frame };
