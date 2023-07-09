import './cardwithlabel.sass';

type propsTypes = {
  header: string,
  label: string,
  mainText: string,
}

function CardWithLabel(props: propsTypes) {
  const { header, label, mainText } = props;
  return (
    <div className="bg-gray w-2/5 pt-3 pb-5 pr-5">
      <span className="text-left align-top bg-purple p-0.5 text-sm card relative -ml-1">{label}</span>
      <div className="ml-5 mt-3">
        <p className="text-white">{header}</p>
        <p>{mainText}</p>
      </div>
    </div>
  );
}

export default CardWithLabel;
