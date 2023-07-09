import CardWithLabel from '../inputs/CardWithLabel.tsx';

function EducationAndSkills() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Образование и навыки</p>
      <div className="flex flex-row mx-auto place-content-between">
        <div className="education w-1/3">
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
          <CardWithLabel header="Graphic Designer" label="2017-2021" mainText="International Design Institute" />
        </div>
        <div className="skills w-2/3" />
      </div>
    </>
  );
}

export default EducationAndSkills;
