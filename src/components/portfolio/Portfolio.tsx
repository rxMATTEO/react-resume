import { useState } from 'react';
import '../inputs/masonry.sass';
import { IoLogoReact, IoLogoVue } from 'react-icons/io5';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout.tsx';
import CardScaleImage, { CardScaleImageProps } from '../inputs/CardScaleImageProps.tsx';

function Portfolio() {
  const filters = {
    '*': 'Все', vue: 'Vue', react: 'React', csharp: 'C#',
  };
  type Filter = keyof typeof filters;
  const [filterKey, setFilterKey] = useState('*' as Filter);

  function onFilterKeyChange(key: Filter) {
    setFilterKey(key);
  }

  const projects: CardScaleImageProps<Filter>[] = [
    {
      filter: 'vue',
      title: 'Nuxt, Vue, Tailwind',
      imageSrc: 'static/img/tme.png',
      href: 'https://github.com/rxMATTEO/synohunt',
      header: 'Synohunt',
      logo: (
        <div className="text-green-400">
          <IoLogoVue />
        </div>
      ),
    },
    {
      filter: 'react',
      title: 'Nuxt, Vue, Tailwind',
      imageSrc: 'static/img/tme.png',
      href: 'https://github.com/volodin-artem/track-my-exception',
      header: 'Track my exception',
      logo: (
        <div className="text-blue-400">
          <IoLogoReact />
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto" id="portfolio">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <InlineSelector containerClassName="filters">
        {
            Object.entries(filters).map(([key, value]) => (
              <button type="button" className="filter mr-5" onClick={() => onFilterKeyChange(key as Filter)}>{value}</button>
            ))
        }
      </InlineSelector>
      <IsotopeLayout
        filterKey={filterKey}
        items={(
          <div className="isotope mt-5 flex flex-col">
            {
              projects.map((project) => (<CardScaleImage {...project} />))
            }
          </div>
        )}
      />
    </div>
  );
}

export default Portfolio;
