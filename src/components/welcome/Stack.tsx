import CardWithImage from '../inputs/CardWithImage.tsx';

function Stack() {
  return (
    <>
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мой стэк</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-3 gap-5">
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
        <CardWithImage header="Web design" label="" mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita, inventore non nulla repellat voluptas. Asperiores debitis deleniti doloremque ea error molestias omnis quisquam ratione, reprehenderit veniam. Architecto, explicabo, neque!" middleLabel="" imgPath="" />
      </div>
    </>
  );
}

export default Stack;
