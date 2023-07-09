import {
  ReactElement, JSX, useEffect, useRef, useState,
} from 'react';
import './carousel.sass';
import SwiperBullet from './SwiperBullet.tsx';

type propTypes = {
  items: ReactElement[];
  offsetPerStep: number,
  displayPerPage: number
}
// TODO Разобраься с React.fc. Нужно чтобы SwiperBullet был отдельным типом чтобы я не мог в массив засунуть любой JSX элемент
// разобраться с тем что не подсвечиваюся ts ошибки веронятно tsconfig
// почитать доки по ts опять и react ts
function Carousel(props: propTypes) {
  const { items, offsetPerStep, displayPerPage } = props;
  const [offset, setOffset] = useState(0);
  const maxPages = useRef(items.length / displayPerPage);
  const [selectedIndex, setIndex] = useState(0);
  const [bullets, setBullets] = useState([] as JSX.Element[]);

  const onBulletClick = (index: number) => { setIndex(index); setOffset(index * 300); };

  useEffect(() => {
    const newBullets: JSX.Element[] = [];
    for (let i = 0; i < maxPages.current; i++) {
      newBullets.push(<SwiperBullet selectedIndex={selectedIndex} index={i} onclick={onBulletClick} />);
    }
    setBullets(newBullets);
  }, [selectedIndex]);
  return (
    <div>
      <div className="overflow-hidden" style={{ width: `${displayPerPage * offsetPerStep}px` }}>
        <div className="inline-block relative transition-all ease-in-out duration-500" style={{ width: '9999999px', left: -offset }}>
          {items}
        </div>
      </div>
      <div className="mx-auto flex flex-row place-content-center mt-5">
        {bullets}
      </div>
    </div>
  );
}

export default Carousel;
