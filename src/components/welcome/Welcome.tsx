import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';
import EducationAndSkills from './EducationAndSkills.tsx';
import Experience from './Experience.tsx';
import Stack from './Stack.tsx';
import Carousel from './Carousel.tsx';
import Portfolio from '../portfolio/Portfolio.tsx';
import ContactMe from '../contactme/ContactMe.tsx';

function Welcome() {
  const carouselItems = [
    <div title="Github" className="pr-5 inline-block">
      <div className="inline-block" style={{ width: '300px', height: '300px' }}>
        <a target="_blank" href="https://github.com/rxMATTEO" rel="noreferrer">
          <img alt="Github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className=" block w-full h-full" />
        </a>
      </div>
    </div>,
    <div className="pr-5 inline-block">
      <div title="Codewars" className="inline-block" style={{ width: '300px', height: '300px' }}>
        <a target="_blank" href="https://www.codewars.com/users/rxMATTE0" rel="noreferrer">
          <img alt="Codewars" src="https://i.imgur.com/2LTDqtO.png" className="block w-full h-full" />
        </a>
      </div>
    </div>,
    <div title="Edabit" className="pr-5 inline-block">
      <div className="inline-block" style={{ width: '300px', height: '300px' }}>
        <a target="_blank" href="https://edabit.com/user/rFTvjXGGawjFDKqNK" rel="noreferrer">
          <img alt="Edabit" src="https://s3.amazonaws.com/edabit-images/monster003.png" className="block w-full h-full" />
        </a>
      </div>
    </div>,
    <div title="Заблокированный github" className="pr-5 inline-block">
      <div className="inline-block" style={{ width: '300px', height: '300px' }}>
        <a target="_blank" href="https://github.com/volodin-artem" rel="noreferrer">
          <img alt="Blocked Github" src="https://cacm.acm.org/system/assets/0003/7196/050720_Github-Sad-Face1.large.jpg?1588864475&1588864475" className="block w-full h-full" />
        </a>
      </div>
    </div>,
  ];
  return (
    <div className="xl:w-2/3 px-5 mx-auto">
      <AboutMe />
      <Divider />
      <Experience />
      <Divider />
      <Stack />
      <Divider />
      <EducationAndSkills />
      <Divider />
      <Carousel
        items={carouselItems}
        offsetPerStep={650}
        displayPerPage={1}
      />
      <Divider />
      <Portfolio />
      <Divider />
      <ContactMe />
    </div>
  );
}

export default Welcome;
