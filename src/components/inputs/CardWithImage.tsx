import { ReactElement } from 'react';

type propsTypes = {
  header: string,
  label: string,
  mainText: string | ReactElement,
  middleLabel: string | ReactElement,
  imgPath: string,
  hoverable?: boolean,
}

function isString(prop: string | ReactElement): prop is string {
  return Object.getPrototypeOf(prop) === String.prototype;
}

function CardWithImage(props: propsTypes) {
  const {
    header, label, middleLabel, mainText, imgPath, hoverable,
  } = props;

  return (
    <div className={`bg-gray px-5 py-10 flex flex-row card relative ${!hoverable ? 'hover:bg-purple transition-all ease-in-out duration-500' : ''}`}>
      <div className="img basis-1/5">
        <img src={imgPath} alt="companyLogo" />
      </div>
      <div className="basis-4/5 ml-5">
        <h1 className="text-white">{header}</h1>
        <p className="lg:absolute right-10 top-5 bg-purple text-sm p-1 inline-block" style={{ visibility: label ? 'visible' : 'hidden' }}>{label}</p>
        <p className="text-sm my-2">{middleLabel}</p>
        <p>
          {
            isString(mainText) ? mainText?.split('/n').map((i) => (
              <p key={i}>{i}</p>
            )) : mainText
        }
        </p>
      </div>
    </div>
  );
}

CardWithImage.defaultProps = {
  hoverable: false,
};
export default CardWithImage;
