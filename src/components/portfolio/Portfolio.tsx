import { useState } from 'react';
import '../inputs/masonry.sass';
import { IoLogoReact, IoLogoVue } from 'react-icons/io5';
import { SiCsharp } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import InlineSelector from '../inputs/InlineSelector.tsx';
import IsotopeLayout from '../inputs/IsotopeLayout.tsx';
import CardScaleImage, { CardScaleImageProps } from '../inputs/CardScaleImageProps.tsx';

function Portfolio() {
  const filters = {
    '*': 'Все', vue: 'Vue', react: 'React', ts: 'TypeScript', csharp: 'C#',
  };
  type Filter = keyof typeof filters;
  const [filterKey, setFilterKey] = useState('*' as Filter);

  function onFilterKeyChange(key: Filter) {
    setFilterKey(key);
  }

  const projects: CardScaleImageProps<Filter>[] = [
    {
      filter: 'vue',
      title: 'Nuxt, Vue, Nitro, Tailwind, PrimeVue',
      imageSrc: 'static/img/synohunt.png',
      href: 'https://github.com/rxMATTEO/synohunt',
      header: 'Synohunt',
      logo: (
        <div className="text-green-400">
          <IoLogoVue />
        </div>
      ),
      description: `Интерактивная браузерная игра по нахождению синонимов для слов на различных языках.
      Имеет систему очков и монет, для покупок подсказок.`,
    },
    {
      filter: 'react',
      title: 'React, Redux, Express, Sequelize',
      imageSrc: 'static/img/tme.png',
      href: 'https://github.com/rxMATTEO/track-my-exception',
      header: 'Track my exception',
      logo: (
        <div className="text-blue-400">
          <IoLogoReact />
        </div>
      ),
      description: `Веб приложение для мониторинга исключений в JavaScript проектах.
      Собирает информацию об ошибках, исключениях и предупреждениях.`,
    },
    {
      filter: 'react',
      title: 'React, Redux, Express, SASS',
      imageSrc: 'static/img/ss.png',
      href: 'https://github.com/volodin-artem/some-shop',
      header: 'Some shop',
      logo: (
        <div className="text-blue-400">
          <IoLogoReact />
        </div>
      ),
      description: `Шаблон интернет-магазина электроники.
      Имеет систему категорий, отзывов, поиска, рейтингов и покупки товаров.`,
    },
    {
      filter: 'csharp',
      title: 'C#, MSSQL, WPF, Entity Framework',
      imageSrc: 'static/img/oem.png',
      href: 'https://github.com/volodin-artem/OfficeEquipmentManager-MVVM-',
      header: 'Office equipment manager',
      logo: (
        <div className="text-indigo-400">
          <SiCsharp />
        </div>
      ),
      description: `Десктопный помощник для организации учета оргтехники. 
      Имеет возможность генерации штрих-кодов, систему авторизации управления группами техники и вывод в таблицы Word.`,
    },
    {
      filter: 'csharp',
      title: 'C#, MSSQL, WinForms',
      imageSrc: 'static/img/pah.png',
      href: 'https://github.com/volodin-artem/Product-Accounting-Helper',
      header: 'Product Accounting Helper',
      logo: (
        <div className="text-indigo-400">
          <SiCsharp />
        </div>
      ),
      description: `Помощник учета товаров на предприятии. 
      Включает множество групп товаров, умеет печатать информацию об продукте и учитывать срок их хранения.`,
    },
    {
      filter: 'ts',
      title: 'TypeScript, Vanilla JS',
      imageSrc: 'static/img/codewars.png',
      href: 'https://github.com/rxMATTEO/Codewars-Solutions',
      header: 'Codewars solutions',
      logo: (
        <div className="text-blue-400">
          <BiLogoTypescript />
        </div>
      ),
      description: `Мои решения интересных алгоритмических испытаний на Codewars на TypeScript и JavaScript.
      Помогает улучшить навыки разработки и подходы к написанию кода.`,
    },
    {
      filter: 'ts',
      title: 'TypeScript',
      imageSrc: 'static/img/typech.png',
      href: 'https://github.com/rxMATTEO/Typescript-Challenges',
      header: 'Typescript challenges solutions',
      logo: (
        <div className="text-blue-400">
          <BiLogoTypescript />
        </div>
      ),
      description: 'Я считаю, что TypeScript больше, чем надстройка для JS, добавляющая типы, и я был обязан поделиться решением задач по TS, которые подготовил один из мейнтейнеров Nuxt, Vue и так далее',
    },
    {
      filter: 'react',
      title: 'React, TypeScript, Tailwind, SASS',
      imageSrc: 'static/img/resume.png',
      href: 'https://github.com/rxMATTEO/react-resume',
      header: 'Resume',
      logo: (
        <div className="text-blue-400">
          <IoLogoReact />
        </div>
      ),
      description: 'Текущее резюме с информацией обо мне. В некоторой части наследует предыдущее, написанное на Vanilla JS.',
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
              // it's spreading only props of a child element
              // eslint-disable-next-line react/jsx-props-no-spreading
              projects.map((project) => (<CardScaleImage {...project} />))
            }
          </div>
        )}
      />
    </div>
  );
}

export default Portfolio;
