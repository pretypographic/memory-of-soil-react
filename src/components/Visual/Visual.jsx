import { useContext, useEffect } from 'react';
import { ObjectContext } from '../../contexts/ObjectContext';
import { Journals } from '../Journals/Journals';

function Visual({ frameSource, getCloser }) {
  const { viewingIsFocused, setViewingIsFocused } = useContext(ObjectContext);

  function handleMouseTouch(event) {
    event.currentTarget.classList.add('visual__block_touched')
  };

  function handleMouseOff(event) {
    event.currentTarget.classList.remove('visual__block_touched');
  };

  function handlePressingVideo(event, data) {
    !viewingIsFocused
      ? event.currentTarget.classList.add('visual__block_open')
      : event.currentTarget.classList.remove('visual__block_open');
    setViewingIsFocused(true);
    getCloser({
      image: false,
      video: data.video,
      format: data.format,
      text: false,
    });
  };

  function handlePressingImage(event) {
    let index = event.currentTarget.getAttribute('index');
    !viewingIsFocused
      ? event.currentTarget.classList.add('visual__block_open')
      : event.currentTarget.classList.remove('visual__block_open');
    setViewingIsFocused(true);
    getCloser({
      image: frameSource.images[index],
      video: false,
      format: false,
      text: false,
    });
  };

  useEffect(() => {
    if (!viewingIsFocused) {
      const visualBlocks = document.querySelectorAll('.visual__block');
      visualBlocks.forEach((block) => {
        block.classList.remove('visual__block_open');
        // block.firstElementChild.classList.remove('visual__image_in-color');
      });
    }
  }, [viewingIsFocused]);

  return (
    <main className='visual'>
      {
        frameSource.video && frameSource.video.map((video, index) => (
          <section
            className='visual__block'
            key={index}
            index={index}
            onMouseOver={handleMouseTouch}
            onMouseOut={handleMouseOff}
            onMouseDown={(event) => {
              handlePressingVideo(event, video);
            }}>
            <div className='visual__image' style={video.image} />
          </section>
        ))
      } {
        frameSource.images && frameSource.images.map((image, index) => (
          <section
            className='visual__block'
            key={index}
            index={index}
            onMouseOver={handleMouseTouch}
            onMouseOut={handleMouseOff}
            onMouseDown={handlePressingImage}>
            <div className='visual__image' style={image} />
          </section>
        ))
      }
      {/* <!-- визуальная часть --> */}
      <Journals frameSource={frameSource} getCloser={getCloser} />
      {/* <!-- журналы --> */}
    </main>
  )
};

export { Visual };
