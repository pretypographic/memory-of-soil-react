import { useContext, useState, useEffect } from 'react';
import { RingContext } from '../contexts/RingContext';
import { MemoryRing } from './MemoryRing';
import { MemoryWave } from './MemoryWave';
import { images } from '../utils/images';

function Main({ generateAnimationStyles, clearAnimationStyles, handleBlackout }) {
  const { ringContext, setRingContext } = useContext(RingContext);
  const [wawesStyle, setWawesStyle] = useState(Array.from({ length: 15 }, () => ({})));

  const ringsStyle = {
    memory: {
      width: '99vh',
      height: '99vh',
      top: '0vh'
    },
    illusion: {
      width: '86vh',
      height: '86vh',
      top: '6.5vh'
    },
    revelations: {
      width: '75vh',
      height: '75vh',
      top: '12vh'
    },
    monument: {
      width: '70vh',
      height: '70vh',
      top: '14.5vh'
    },
    war: {
      width: '63vh',
      height: '63vh',
      top: '18vh'
    },
    human: {
      width: '49vh',
      height: '49vh',
      top: '25vh'
    },
    conflict: {
      width: '36vh',
      height: '36vh',
      top: '31.5vh'
    },
    movement: {
      width: '27vh',
      height: '27vh',
      top: '36vh'
    },
    time: {
      width: '15vh',
      height: '15vh',
      top: '42vh'
    },
  };

  function clearMemory() {
    const updatedWawesStyle = wawesStyle.map(wave => clearAnimationStyles(wave));
    setWawesStyle(updatedWawesStyle);
  };

  function blastMemory() {
    let step = 0;
    const updatedWawesStyle = wawesStyle.map((wave) => {
      const updatedAnimation = generateAnimationStyles(1, 0.1, step, 1, 'forwards');
      step += 0.05;
      return { ...wave, ...updatedAnimation };
    });
    setWawesStyle(updatedWawesStyle);
  };

  function shineMemory(ri) {
    if (!ringContext) {
      let step = 0.1;
      const updatedWawesStyle = wawesStyle.map((wawe, i) => {
        if (i === ri) {
          const updatedAnimation = generateAnimationStyles(2, 0, 0, 'infinite', 'forwards');
          return { ...wawe, ...updatedAnimation };
        } else if (i > 8) {
          const updatedAnimation = generateAnimationStyles(2, 0, step, 'infinite', 'forwards');
          step += 0.1;
          return { ...wawe, ...updatedAnimation };
        } else {
          const updatedAnimation = clearAnimationStyles({ ...wawe });
          return { ...wawe, ...updatedAnimation };
        }
      });
      setWawesStyle(updatedWawesStyle);
    };
  };

  function collapseMemory() {
    if (!ringContext) {
      const promise = new Promise((resolve) => {
        setRingContext(true);
        resolve();
      });

      const performCollapse = async () => {
        await promise;

        let step = 1.4;
        const updatedWawesStyle = wawesStyle.map((wave) => {
          const updatedAnimation = generateAnimationStyles(1, 0.1, step, 1, 'forwards');
          step -= 0.1;
          return { ...wave, ...updatedAnimation };
        });
        setWawesStyle(updatedWawesStyle);
      };

      handleBlackout(true);
      performCollapse();
    }
  }

  function handleMouseTouchesRing(event, name) {
    if (event.currentTarget.getAttribute('data-name') === name && !ringContext) {
      const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
      shineMemory(index);
    };
  };

  function handleSelfPossession() {
    if (!ringContext) {
      clearMemory();
    };
  };

  useEffect(() => {
    setTimeout(() => { setRingContext(false) }, 2500);
    blastMemory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='memory-rings' >
      <MemoryRing
        link='/memory'
        name='memory'
        style={ringsStyle.memory}
        wawesStyle={wawesStyle[8]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.memory}
        ri={8} />
      <MemoryRing
        link='/illusion'
        name='illusion'
        style={ringsStyle.illusion}
        wawesStyle={wawesStyle[7]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.illusion}
        ri={7} />
      <MemoryRing
        link='/revelations'
        name='revelations'
        style={ringsStyle.revelations}
        wawesStyle={wawesStyle[6]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.revelations}
        ri={6} />
      <MemoryRing
        link='/monument'
        name='monument'
        style={ringsStyle.monument}
        wawesStyle={wawesStyle[5]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.monument}
        ri={5} />
      <MemoryRing
        link='/war'
        name='war'
        style={ringsStyle.war}
        wawesStyle={wawesStyle[4]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.war}
        ri={4} />
      <MemoryRing
        link='/human'
        name='human'
        style={ringsStyle.human}
        wawesStyle={wawesStyle[3]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.human}
        ri={3} />
      <MemoryRing
        link='/conflict'
        name='conflict'
        style={ringsStyle.conflict}
        wawesStyle={wawesStyle[2]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.conflict}
        ri={2} />
      <MemoryRing
        link='/movement'
        name='movement'
        style={ringsStyle.movement}
        wawesStyle={wawesStyle[1]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.movement}
        ri={1} />
      <MemoryRing
        link='/time'
        name='time'
        style={ringsStyle.time}
        wawesStyle={wawesStyle[0]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.time}
        ri={0} />
      <MemoryWave wawesStyle={wawesStyle} />
    </div>
  )
};

export { Main };
