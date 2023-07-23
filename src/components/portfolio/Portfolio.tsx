import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';

type Filters = '*' | 'csharp' | 'js' | 'ts'

function Portfolio() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*' as Filters);

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

  function onFilterKeyChange(key: Filters) {
    setFilterKey(key);
  }

  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <InlineSelector containerClassName="filters">
        <div className="filter mr-5" onClick={() => onFilterKeyChange('*')}>Все</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('js')}>JS</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('ts')}>TS</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('csharp')}>C#</div>
      </InlineSelector>
      <div className="isotope mt-5">
        <div className="h-64 filterable w-1/3">
          <div className="p-5 content shadow-ambient bg-fade h-full">
            <div className="h-full z-10 relative">
              <div className="thumbnail">
                <img src="public/static/img/tme.png" className="img" alt="shit" />
              </div>
              <div className="h-1/3" />
            </div>
          </div>
        </div>
        <div className="h-64 filterable w-1/3">
          <div className="p-5 content shadow-ambient bg-fade h-full">
            <div className="h-full z-10 relative">Track my exception</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
