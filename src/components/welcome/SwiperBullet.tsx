import { JSX } from 'react';

export type SwiperBulletProps = {
  selectedIndex: number;
  index: number;
  onclick: (index: number) => void;
}

function SwiperBullet(props: SwiperBulletProps): JSX.Element {
  const { selectedIndex, index, onclick } = props;
  return <span onClick={() => onclick(index)} className={`swiper-bullet inline-block align-top w-3 h-3 mr-2 bg-transparent ${selectedIndex === index ? 'active' : ''}`} />;
}

export default SwiperBullet;
