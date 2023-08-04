import { useContext, useEffect } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';
import { Journals } from './Journals';

function Visual({ frameSource, getCloser }) {
  const { isFocused, setIsFocused } = useContext(ObjectContext);

  function handleMouseTouch(event) {
    event.currentTarget.classList.add('visual__block_touched')
  };

  function handleMouseOff(event) {
    event.currentTarget.classList.remove('visual__block_touched');
  };

  function handlePressingVideo(event, data) {
    !isFocused
      ? event.currentTarget.classList.add('visual__block_open')
      : event.currentTarget.classList.remove('visual__block_open');
    setIsFocused(true);
    getCloser({
      image: false,
      video: data.video,
      format: data.format,
      text: false,
    });
  };

  function handlePressingImage(event) {
    let index = event.currentTarget.getAttribute('index');
    !isFocused
      ? event.currentTarget.classList.add('visual__block_open')
      : event.currentTarget.classList.remove('visual__block_open');
    setIsFocused(true);
    getCloser({
      image: frameSource.images[index],
      video: false,
      format: false,
      text: false,
    });
  };

  useEffect(() => {
    if (!isFocused) {
      const visualBlocks = document.querySelectorAll('.visual__block');
      visualBlocks.forEach((block) => {
        block.classList.remove('visual__block_open');
        block.firstElementChild.classList.remove('visual__image__in-color');
      });
    }
  }, [isFocused]);

  return (
    <div className='main'>
      <section className='visual'>
        {
          frameSource.video && frameSource.video.map((video, index) => (
            <div
              className='visual__block'
              key={index}
              index={index}
              onMouseEnter={handleMouseTouch}
              onMouseLeave={handleMouseOff}
              onMouseDown={(event) => {
                handlePressingVideo(event, video);
              }}>
              <div className='visual__image' style={video.image} />
            </div>
          ))
        } {
          frameSource.images && frameSource.images.map((image, index) => (
            <div
              className='visual__block'
              key={index}
              index={index}
              onMouseEnter={handleMouseTouch}
              onMouseLeave={handleMouseOff}
              onMouseDown={handlePressingImage}>
              <div className='visual__image' style={image} />
            </div>
          ))
        }
        {/* <!-- визуальная часть --> */}
        <Journals frameSource={frameSource} getCloser={getCloser} />
        {/* <!-- журналы --> */}
      </section>
    </div>
  )
};

export { Visual };
