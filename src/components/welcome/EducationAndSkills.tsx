import CardWithLabel from '../inputs/CardWithLabel.tsx';

function EducationAndSkills() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Образование и навыки</p>
      <div className="flex flex-col lg:flex-row mx-auto place-content-between">
        <div className="education lg:w-1/3">
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
        </div>
        <div className="lg:w-1/2 skills relative right-0">
          <h1>Мои навыки</h1>
          <p className="text-lightgrey mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, consequuntur iure iusto porro reiciendis sint temporibus! Accusamus commodi doloribus in molestiae, molestias nesciunt porro provident, quos sequi voluptatem voluptates.
          </p>
        </div>
      </div>
    </>
  );
}

export default EducationAndSkills;
