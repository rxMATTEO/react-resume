import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';

function Portfolio() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    isotope.current = new Isotope('.isotope', {
      itemSelector: '.filterable',
      containerStyle: {
        position: 'relative',
      },
      initLayout: true,
      originLeft: true,
      originTop: true,
      resize: true,
      resizeContainer: true,
      transitionDuration: '0.4s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)',
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)',
      },
      layoutMode: 'masonry',
      isJQueryFiltering: true,
      sortAscending: true,
      percentPosition: true,
      masonry: {
        columnWidth: '.filterable',
      },
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false,
      },
      fitRows: {},
      vertical: {
        horizontalAlignment: 0,
      },
      filter: '*',
    });
  }, []);

  useEffect(() => {
    isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
  }, [isotope, filterKey]);

  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <InlineSelector containerClassName="filters">
        <div className="filter mr-5">Все</div>
        <div className="filter mr-5">Языки</div>
        <div className="filter mr-5">Frontend</div>
        <div className="filter mr-5">Backend</div>
      </InlineSelector>
      <div className="isotope mt-5">
        <div className="h-64 filterable"><div className="bg-purple h-full">1</div></div>
        <div className="h-36 filterable node"><div className="bg-purple h-full">node</div></div>
        <div className="h-96 filterable node"><div className="bg-purple h-full">node</div></div>
        <div onClick={() => setFilterKey('react')} className="h-96 filterable react"><div className="bg-purple h-full">react</div></div>
        <div onClick={() => setFilterKey('react')} className="h-36 filterable react"><div className="bg-purple h-full">react</div></div>
        <div className="h-24 filterable"><div className="bg-purple h-full">1</div></div>
      </div>
    </div>
  );
}

export default Portfolio;
