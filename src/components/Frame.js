import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


import React from 'react';
import { Popup } from './Popup';
import { Visual } from './Visual';

function Frame({ setContext, source }) {
  let { subject } = useParams();
  let frameSource = source[subject];

  useEffect(() => {
    setContext(false);
  }, [])

  return (
    <div className="root">
      {/* корень */}
      <header className="header">
        <h1 className="header__title">{subject}</h1>
      </header>
      {/* контртитул */}
      <Visual frameSource={frameSource} />
      {/* разворот */}
      <footer className='footer'>
        <Link to='/' className='footer__link'>обратно</Link>
      </footer>
      {/* нижний колонтитул */}
      <Popup />
      {/* попап */}
    </div >
  );
};

export { Frame };
