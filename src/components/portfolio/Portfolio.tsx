import { useState } from 'react';
import '../inputs/masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout.tsx';
import CardScaleImage from '../inputs/CardScaleImageProps.tsx';

type Filters = '*' | 'csharp' | 'js' | 'ts' | 'vc'

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
        <div className="filter mr-5" onClick={() => onFilterKeyChange('vc')}>Контроль версий</div>
      </InlineSelector>
      <IsotopeLayout
        filterKey={filterKey}
        items={(
          <div className="isotope mt-5">
            <CardScaleImage filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
            <CardScaleImage filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
            <CardScaleImage filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
          </div>
)}
      />
    </div>
  );
}

export default Portfolio;
