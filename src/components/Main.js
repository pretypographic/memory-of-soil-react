import { useContext, useState, useEffect } from 'react';
import { RingContext } from '../contexts/RingContext';

import { Button } from './Button';
import { MemoryRing } from './MemoryRing';
import { MemoryWave } from './MemoryWave';
import { Footer } from './Footer';

import { images } from '../utils/images';

function Main({ setContext, animation }) {
  const clickedRing = useContext(RingContext);
  const [wawesStyle, setWawesStyle] = useState(Array.from({ length: 15 }, () => ({ animation: '' })));

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
    person: {
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
  }

  function clearMemory() {
    const updatedWawesStyle = wawesStyle.map((wave, index) => {
      const updatedAnimation = 'none';
      return { ...wave, animation: updatedAnimation };
    });
    setWawesStyle(updatedWawesStyle);
  }

  function blastMemory() {
    let step = 0;
    const updatedWawesStyle = wawesStyle.map((wave, index) => {
      const updatedAnimation = animation(0.5, 0.1, step, 2, 'backwards');
      step += 0.05;
      return { ...wave, animation: updatedAnimation };
    });
    setWawesStyle(updatedWawesStyle);
  }

  function shineMemory(ri) {
    if (!clickedRing) {
      let step = 0.1;
      const updatedWawesStyle = wawesStyle.map((wawe, i) => {
        if (i === ri) {
          const updatedAnimation = animation(1, 0, 0, 'infinite', 'forwards');
          return { ...wawe, animation: updatedAnimation };
        } else if (i > ri) {
          const updatedAnimation = animation(1, 0, step, 'infinite', 'forwards');
          step += 0.1;
          return { ...wawe, animation: updatedAnimation };
        } else {
          return wawe;
        }
      });
      setWawesStyle(updatedWawesStyle);
    }
  }

  function collapseMemory() {
    setContext(true);
    let step = 0;
    const updatedWawesStyle = wawesStyle.map((wave, index) => {
      const updatedAnimation = animation(0.5, 0.1, step, 2, 'backwards');
      step += 0.1;
      return { ...wave, animation: updatedAnimation };
    });
    setWawesStyle(updatedWawesStyle);
  }

  function handleMouseTouchesRing(event, name) {
    if (event.currentTarget.getAttribute('data-name') === name) {
      const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);
      shineMemory(index);
    }
  }

  function handleSelfPossession(event, name) {
    clearMemory();
  }

  useEffect(() => {
    blastMemory();
    setTimeout(() => { clearMemory() }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='memory-rings' >
      <Button />

      <MemoryRing
        link='/memory'
        name='memory'
        style={ringsStyle.memory}
        wawesStyle={wawesStyle[8]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.memory}
        ri={8}
      />
      <MemoryRing
        link='/illusion'
        name='illusion'
        style={ringsStyle.illusion}
        wawesStyle={wawesStyle[7]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.illusion}
        ri={7}
      />
      <MemoryRing
        link='/revelations'
        name='revelations'
        style={ringsStyle.revelations}
        wawesStyle={wawesStyle[6]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.revelations}
        ri={6}
      />
      <MemoryRing
        link='/monument'
        name='monument'
        style={ringsStyle.monument}
        wawesStyle={wawesStyle[5]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.monument}
        ri={5}
      />
      <MemoryRing
        link='/war'
        name='war'
        style={ringsStyle.war}
        wawesStyle={wawesStyle[4]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.war}
        ri={4}
      />
      <MemoryRing
        link='/person'
        name='person'
        style={ringsStyle.person}
        wawesStyle={wawesStyle[3]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.person}
        ri={3}
      />
      <MemoryRing
        link='/conflict'
        name='conflict'
        style={ringsStyle.conflict}
        wawesStyle={wawesStyle[2]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.conflict}
        ri={2}
      />
      <MemoryRing
        link='/movement'
        name='movement'
        style={ringsStyle.movement}
        wawesStyle={wawesStyle[1]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.movement}
        ri={1}
      />
      <MemoryRing
        link='/time'
        name='time'
        style={ringsStyle.time}
        wawesStyle={wawesStyle[0]}
        handlePressRing={collapseMemory}
        handleMouseTouchesRing={handleMouseTouchesRing}
        handleSelfPossession={handleSelfPossession}
        images={images.rings.time}
        ri={0}
      />

      <MemoryWave wawesStyle={wawesStyle} />

      <Footer />
    </main>
  )
};

export { Main };
