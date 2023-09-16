import CardWithImage from '../inputs/CardWithImage.tsx';

function Experience() {
  return (
    <div id="exp">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Опыт работы</p>
      {/* todo place to comp or sass style */}
      <CardWithImage
        hoverable
        header="Инженер-программист"
        label="FULL TIME"
        mainText="
        Занимаюсь разработкой безопасных веб-приложений.
        На текущий момент работаю над созданием веб-приложения для проверки существующих проектов на уязвимости по базе уязвимостей БДУ.
        Использую Vue и React для frontend, в зависимости от задачи и проекта
       , Express и Prisma для backend. Мотивирую коллег использовать TypeScript.
        Разработали собственный UI-kit на SASS, HTML и Vue. Взаимодействую с дизайнером, dev-ops и тестерами.
        Обычно работаю по графику 6/1 или 7/0."
        middleLabel={(
          <p>
            <a href="https://niitp.ru/" target="_blank" className="text-purple" rel="noreferrer">АО НИИ ТП </a>
            (входим в состав РКС) | Office | Февраль 2023 - Настоящее время
          </p>
)}
        imgPath="data:image/jpeg;base64,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"
      />
      <CardWithImage
        hoverable
        header="Fullstack разработчик"
        label="PART-TIME"
        mainText="Совмещал учебу и работу над различными проектами на фриланс биржах. Чаще всего - одностраничные сайты на VanillaJS и SASS.
        Чуть реже переписывал старый JS на ES6, исправлял баги, верстку и стили. Настраивал Wordpress плагины и другие CMS.
        Еще реже помогал переезжать с доменов и хостингов, совершенствовать SEO, настраивать аналитику."
        middleLabel="KWORK / Freelancer.com | Remote | Январь 2021 - Февраль 2023"
        imgPath="https://www.f-cdn.com/assets/img/facebook/default-04d56222.jpg"
      />
    </div>
  );
}

export default Experience;
