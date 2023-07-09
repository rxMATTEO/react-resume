import './cardwithlabel.sass';

type propsTypes = {
  header: string,
  label: string,
  mainText: string,
}

function CardWithLabel(props: propsTypes) {
  const { header, label, mainText } = props;
  return (
    <div className="bg-gray pt-3 pb-5 pr-5 card">
      <span className="text-left align-top bg-purple p-0.5 text-sm label relative -ml-1">{label}</span>
      <div className="ml-5 mt-3">
        <p className="text-white">{header}</p>
        <p className="mt-2">{mainText}</p>
      </div>
    </div>
  );
}
// todo cool animation on hover mb?
export default CardWithLabel;
