import {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import './carousel.sass';
import SwiperBullet from './SwiperBullet.tsx';

type propTypes = {
  items: ReactElement[];
  offsetPerStep: number,
  displayPerPage: number
}

function Carousel(props: propTypes) {
  const { items, offsetPerStep, displayPerPage } = props;
  const [offset, setOffset] = useState(0);
  const maxPages = useRef(items.length / displayPerPage);
  const [selectedIndex, setIndex] = useState(0);
  const [bullets, setBullets] = useState([]);

  const onBulletClick = (index) => { setIndex(index); setOffset(index * 300); };

  useEffect(() => {
    const newBullets = [];
    for (let i = 0; i < maxPages.current; i++) {
      newBullets.push(<SwiperBullet selectedIndex={selectedIndex} index={i} onclick={onBulletClick} />);
    }
    setBullets(newBullets);
  }, [selectedIndex]);
  return (
    <div>
      <div className="overflow-hidden" style={{ width: `${displayPerPage * offsetPerStep}px` }}>
        <div className="inline-block relative" style={{ width: '9999999px', left: -offset }}>
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
