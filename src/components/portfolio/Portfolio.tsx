import { useEffect, useRef, useState } from 'react';
import './masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout';

type Filters = '*' | 'csharp' | 'js' | 'ts'

function Portfolio() {
  const [filterKey, setFilterKey] = useState('*' as Filters);

  function onFilterKeyChange(key: Filters) {
    setFilterKey(key);
  }

  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <InlineSelector containerClassName="filters">
        <div className="filter mr-5" onClick={() => onFilterKeyChange('*')}>Все</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('js')}>JavaScript</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('ts')}>TypeScript</div>
        <div className="filter mr-5" onClick={() => onFilterKeyChange('csharp')}>C#</div>
      </InlineSelector>
      <IsotopeLayout
        filterKey={filterKey}
        items={(
          <div className="isotope mt-5">
            <a className="h-64 filterable w-1/3 js" href="https://github.com/volodin-artem/track-my-exception" target="_blank" rel="noreferrer">
              <div className="p-6 content shadow-ambient bg-fade">
                <div className="h-full z-10 relative">
                  <div className="thumbnail">
                    <img src="public/static/img/tme.png" className="img" alt="shit" />
                  </div>
                  <div className="h-1/3 pt-5">
                    <p className="font-normal text-sm uppercase text-purple">React, Redux, Express</p>
                    <p className="font-bold text-xl">Track my exception</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="h-64 filterable w-1/3 js">
              <div className="p-6 content shadow-ambient bg-fade">
                <div className="h-full z-10 relative">
                  <div className="thumbnail">
                    <img src="public/static/img/tme.png" className="img" alt="shit" />
                  </div>
                  <div className="h-1/3 pt-5">
                    <p className="font-normal text-sm uppercase text-purple">React, Redux</p>
                    <p className="font-bold text-xl">Track my exception</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 filterable w-1/3 js">
              <div className="p-6 content shadow-ambient bg-fade">
                <div className="h-full z-10 relative">
                  <div className="thumbnail">
                    <img src="public/static/img/tme.png" className="img" alt="shit" />
                  </div>
                  <div className="h-1/3 pt-5">
                    <p className="font-normal text-sm uppercase text-purple">React, Redux</p>
                    <p className="font-bold text-xl">Track my exception</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
)}
      />
    </div>
  );
}

export default Portfolio;
