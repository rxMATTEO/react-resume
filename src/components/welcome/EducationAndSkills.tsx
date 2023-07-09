import CardWithLabel from '../inputs/CardWithLabel.tsx';

function EducationAndSkills() {
  return (
    <div className="flex flex-row mx-auto place-content-between">
      <div className="education">
        <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Образование и навыки</p>
        <CardWithLabel header="Random" label="2017-2021" mainText="Text" />
      </div>
    </div>
  );
}

export default EducationAndSkills;
