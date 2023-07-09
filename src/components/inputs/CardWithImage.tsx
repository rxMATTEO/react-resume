type propsTypes = {
  header: string,
  label: string,
  mainText: string,
  middleLabel: string,
  imgPath: string,
}

function CardWithImage(props: propsTypes) {
  const {
    header, label, middleLabel, mainText, imgPath,
  } = props;

  return (
    <div className="bg-gray px-5 py-10 flex flex-row card relative">
      <div className="img basis-1/5">
        <img src={imgPath} alt="companyLogo" />
      </div>
      <div className="basis-4/5">
        <h1 className="text-white ">{header}</h1>
        <p className="absolute right-10 top-5 bg-purple text-sm p-1">{label}</p>
        <p className="text-sm my-2">{middleLabel}</p>
        <p className="w-2/3">{mainText}</p>
      </div>
    </div>
  );
}

export default CardWithImage;
