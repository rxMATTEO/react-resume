import { useState } from 'react';
import '../inputs/masonry.sass';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout.tsx';
import CardScaleImage from '../inputs/CardScaleImageProps.tsx';

function Portfolio() {
  const filters = {
    '*': 'Все', csharp: 'C#', js: 'JavaScript', ts: 'TypeScript',
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
              <button type="button" className="filter mr-5" onClick={() => onFilterKeyChange(key as Filters)}>{value}</button>
            ))
        }
      </InlineSelector>
      <IsotopeLayout
        filterKey={filterKey}
        items={(
          <div className="isotope mt-5 flex flex-col">
            <CardScaleImage<Filters> filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/track-my-exception" header="Track my exception" />
            <CardScaleImage<Filters> filter="ts" title="Vue, Nuxt 3, Prime Vue" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/translate-app" header="Synohunt" />
            <CardScaleImage<Filters> filter="js" title="React, Redux, Express" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/some-shop" header="Some shop" />
            <CardScaleImage<Filters> filter="js" title="Vanilla JS" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/gitmeteo-app" header="Gismeteo template" />
            <CardScaleImage<Filters> filter="csharp" title="WPF, MVVM, Entity framework, MS SQL" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/OfficeEquipmentManager-MVVM-" header="Office Equipment Manager" />
            <CardScaleImage<Filters> filter="csharp" title="Windows forms, ASP.NET, MS SQL" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/Product-Accounting-Helper" header="Product Accounting Helper" />
            <CardScaleImage<Filters> filter="csharp" title="Windows forms, ASP.NET, MS SQL" imageSrc="static/img/tme.png" href="https://github.com/volodin-artem/Marathon-WS" header="Марафон WorldSkills" />
          </div>
        )}
      />
    </div>
  );
}

export default Portfolio;
