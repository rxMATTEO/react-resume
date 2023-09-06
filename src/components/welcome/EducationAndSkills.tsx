import CardWithLabel from '../inputs/CardWithLabel.tsx';

function EducationAndSkills() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10" id="skills">Образование и навыки</p>
      <div className="flex flex-col lg:flex-row mx-auto place-content-between">
        <div className="education lg:w-1/3">
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
        </div>
        <div className="lg:w-1/2 skills relative right-0">
          <h1>Мои навыки</h1>
          <p className="text-lightgrey mt-5">
            Я люблю изучать новые технологии, поэтому владею Vue и React. Пишу backend на Nitro и Express.
          </p>
          <p className="my-5">
            На данный момент работаем над созданием веб-приложения для проверки существующих проектов на уязвимости по базе уязвимостей БДУ.
          </p>
          <p>
            В свободное время пишу open source веб приложения.
            Одно из последних - интерактивная игра по нахождению синонимов для слов, на разных языках -
            <a href="https://www.synohunt.ru" target="_blank" className="text-purple" rel="noreferrer"> Synohunt. </a>
            Прохожу испытания на

            <a href="https://www.codewars.com/users/rxMATTE0" target="_blank" className="text-purple" rel="noreferrer"> Codewars</a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default EducationAndSkills;
