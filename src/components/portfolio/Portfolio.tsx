import { useEffect, useState } from 'react';
import '../inputs/masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout.tsx';
import CardScaleImage from '../inputs/CardScaleImageProps.tsx';

function Portfolio() {
  const filters = {
    '*': 'Все', csharp: 'C#', js: 'JavaScript', ts: 'TypeScript', other: 'Другие технологии',
  };
  type Filters = keyof typeof filters;
  const [filterKey, setFilterKey] = useState('*' as Filters);

  function onFilterKeyChange(key: Filters) {
    setFilterKey(key);
  }

  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <InlineSelector containerClassName="filters">
        {
            Object.entries(filters).map(([key, value]) => (
              <div className="filter mr-5" onClick={() => onFilterKeyChange(key as Filters)}>{value}</div>
            ))
        }
      </InlineSelector>
      <IsotopeLayout
        filterKey={filterKey}
        items={(
          <div className="isotope mt-5 flex flex-col">
            <CardScaleImage<Filters> filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
            <CardScaleImage<Filters> filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
            <CardScaleImage<Filters> filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
          </div>
        )}
      />
    </div>
  );
}

export default Portfolio;
