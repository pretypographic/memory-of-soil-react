import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ObjectContext } from '../../contexts/ObjectContext';
import { NavigationHeader } from "../NavigationHeader/NavigationHeader";
import { Visual } from '../Visual/Visual';
import { Viewing } from '../Viewing/Viewing';
import { Plug } from '../Plug/Plug';
import { Sound } from "../Sound/Sound";

function Frame({ source, executeBlackOut, blackout }) {
  const { languageContext } = useContext(LanguageContext);
  let { subject } = useParams();
  let frameSource = source[subject];
  const [title, setTitle] = useState(frameSource.title.rus);
  const [text, setText] = useState('обратно');
  const [viewingIsFocused, setViewingIsFocused] = useState(false);
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
    executeBlackOut(false);
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
    if (!viewingIsFocused) {
      setFocus({
        image: false,
        video: false,
        format: false,
        text: false,
      });
    };
  }, [viewingIsFocused]);

  return (
    <ObjectContext.Provider value={{ viewingIsFocused, setViewingIsFocused }}>
      <div className="frame">
        <NavigationHeader
          title={title}
          focus={focus} />
        <Visual
          frameSource={frameSource}
          getCloser={getCloser}
        />
        <Viewing
          focusedOn={focus} />
        <Plug
          blackout={blackout} />

        <Sound />
        <footer className={`footer ${viewingIsFocused && 'footer__link_disappeared'}`}>
          <Link to='/main' className='footer__link'>{text}</Link>
        </footer>
      </div >
    </ObjectContext.Provider>
  );
};

export { Frame };
