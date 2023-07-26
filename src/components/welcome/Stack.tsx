import CardWithImage from '../inputs/CardWithImage.tsx';

function Stack() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мой стэк</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-3 gap-5">
        <CardWithImage header="JavaScript/Typescript" label="" mainText="Тесты на Jest, стили на Tailwind" middleLabel="" imgPath="" />
        <CardWithImage header="HTML/CSS" label="" mainText="Адаптивная верстка, flex, grid, mobile first, препроцессор SASS, bootstrap 5" middleLabel="" imgPath="" />
        <CardWithImage header="React" label="" mainText="Redux (старый и toolkit), React Query, Router" middleLabel="" imgPath="" />
        <CardWithImage header="Vue" label="" mainText="Nuxt 3, Vue router, pinia, Prime vue, Prime flex" middleLabel="" imgPath="" />
        <CardWithImage header="Node.JS" label="" mainText="Express, Sequelize, Prisma" middleLabel="" imgPath="" />
        <CardWithImage header="Сборщики" label="" mainText="Webpack, vite" middleLabel="" imgPath="" />
        <CardWithImage header="Контроль версий" label="" mainText="Git, gitlab" middleLabel="" imgPath="" />
        <CardWithImage header="Прочее" label="" mainText={'IDE: PHPstorm. \nЛинтеры: ESlint, prettier'} middleLabel="" imgPath="" />
      </div>
    </>
  );
}

export default Stack;
