import CardWithLabel from '../inputs/CardWithLabel.tsx';

function EducationAndSkills() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10" id="skills">Образование и навыки</p>
      <div className="flex flex-col lg:flex-row mx-auto place-content-between">
        <div className="education lg:w-1/3">
          <CardWithLabel
            header="Разработка, сопровождение и обеспечение безопасности информационных систем"
            label="2023-2028"
            mainText="Высшее образование"
          />
          <CardWithLabel header="Cпециалист по информационным системам и программированию" label="2017-2021" mainText="Среднее профессиональное образование" />
        </div>
        <div className="lg:w-1/2 skills relative right-0">
          <p className=" text-lightgrey">
            Во время учебы занимал призовые места в чемпионатах
            <a href="/static/img/3L9vtLdAxXQ.jpg" target="_blank" rel="noreferrer" className="text-purple"> WorldSkills </a>
            по специализации - разработка настольных приложений для бизнеса.
          </p>
          <p>Учился проектировать, внедрять и сопровождать информационные системы.</p>
          <p className="mt-3">Разрабатывал различные модели для собственных приложений. Из них: UML, IDEF-0, ER, Use-case и многие другие.</p>
          <p>Также проектировал и создавал базы данных, используя Microsoft SQL.</p>
          <p className="mt-3">Поступил в университет "Синергия". Обучаюсь на очной форме образования.</p>
          <div className="flex flex-col lg:flex-row mt-5">
            <div className="flex flex-row items-center mr-5">
              <span className="text-[50px] mr-2 font-bold">{'>10'}</span>
              <span>
                PET
                <br />
                проектов
              </span>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-[50px] font-bold mr-2">{'>3'}</span>
              <span>
                лет
                <br />
                коммерческого
                опыта
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationAndSkills;
