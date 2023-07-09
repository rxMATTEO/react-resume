import CardWithImage from '../inputs/CardWithImage.tsx';

function Experience() {
  return (
    <div>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Образование и навыки</p>
      {/* todo place to comp or sass style */}
      <CardWithImage
        header="Front-end Developer"
        label="FULL TIME"
        mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, aperiam, cumque deleniti dolor doloremque ea earum error ex expedita facilis modi molestias perspiciatis placeat quibusdam recusandae repudiandae tempore veritatis?"
        middleLabel="WeLab | Remote | Jan 2019 - Present"
        imgPath=""
      />
      <CardWithImage
        header="Front-end Developer"
        label="FULL TIME"
        mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, aperiam, cumque deleniti dolor doloremque ea earum error ex expedita facilis modi molestias perspiciatis placeat quibusdam recusandae repudiandae tempore veritatis?"
        middleLabel="WeLab | Remote | Jan 2019 - Present"
        imgPath=""
      />
      <CardWithImage
        header="Front-end Developer"
        label="FULL TIME"
        mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, aperiam, cumque deleniti dolor doloremque ea earum error ex expedita facilis modi molestias perspiciatis placeat quibusdam recusandae repudiandae tempore veritatis?"
        middleLabel="WeLab | Remote | Jan 2019 - Present"
        imgPath=""
      />
    </div>
  );
}

export default Experience;
