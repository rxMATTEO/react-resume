import CardWithImage from '../inputs/CardWithImage.tsx';

function Stack() {
  return (
    <div id="stack">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мой стэк</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-3 gap-5">
        <CardWithImage header="Typescript / JavaScript" label="" mainText="Typescript 5+/n Vanilla JS (DOM, BOM)/nПрактическое применение ООП и паттернов разработки MVVM & MVC/n Использую подходы DRY, KISS, SOLID в реальных проектах и на постоянной основе." middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-plain.svg" />
        <CardWithImage header="Vue / Nuxt" label="" mainText="Nuxt 3 (SSR, SSG)/n Vue 3 (TSX / JSX, рендер-функции, шаблоны, SPA, Composition / Options API)/nVue router/n Vue test/n Pinia/n PrimeVue" middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/vuejs/vuejs-original.svg" />
        <CardWithImage header="React" label="" mainText="Redux (старый и toolkit)/n React Query/n Router/n PrimeReact" middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg" />
        <CardWithImage header="HTML/CSS" label="" mainText="Адаптивная верстка в т.ч. по макетам Figma/n БЭМ/n Flex, Grid, Mobile first/n SASS, Tailwind CSS, PrimeFlex, Vanilla CSS 3/nEmmet" middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/sass/sass-original.svg" />
        <CardWithImage header="Node.JS" label="" mainText="Express/n Sequelize/n Prisma/n Nitro/n Rest API/nAxios" middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg" />
        <CardWithImage header="Сборщики" label="" mainText="Vite/n Webpack" middleLabel="" imgPath="https://camo.githubusercontent.com/a845cf08bc585efdc903b5b4734cbc0623967d16216446d8c9c2fa299edfde34/68747470733a2f2f766974656a732e72752f6c6f676f2e737667" />
        <CardWithImage header="Контроль версий / задач" label="" mainText="Git/n Gitlab/n Github" middleLabel="" imgPath="https://github.com/devicons/devicon/raw/master/icons/gitlab/gitlab-original.svg" />
        <CardWithImage
          header="Прочее"
          label=""
          mainText={(
            <div>
              IDE: PHPstorm 2023.2
              <p>Линтеры: ESlint, prettier</p>
              <p>OS: Debian 11 (GNU), Windows 10</p>
            </div>
)}
          middleLabel=""
          imgPath="https://camo.githubusercontent.com/5c6f6d20c5e35e76e8e663040ca89c35af5b670d05b3069507bc560fc59c76c2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f72752f7468756d622f632f63382f2544302539422544302542452544302542332544302542452544312538322544302542382544302542465f50687053746f726d2e7376672f3132303070782d2544302539422544302542452544302542332544302542452544312538322544302542382544302542465f50687053746f726d2e7376672e706e67"
        />
      </div>
    </div>
  );
}

export default Stack;
