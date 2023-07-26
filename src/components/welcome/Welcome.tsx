import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';
import EducationAndSkills from './EducationAndSkills.tsx';
import Experience from './Experience.tsx';
import Stack from './Stack.tsx';
import Carousel from './Carousel.tsx';
import Portfolio from '../portfolio/Portfolio';

function Welcome() {
  return (
    <div className="sm:w-2/3 pr-5 mx-auto">
      <AboutMe />
      <Divider />
      <EducationAndSkills />
      <Divider />
      <Experience />
      <Divider />
      <Stack />
      <Divider />
      <Carousel
        items={[
          <div className="pr-5 inline-block"><div className="inline-block" style={{ width: '300px', height: '300px', backgroundColor: 'red' }} /></div>,
          <div className="pr-5 inline-block"><div className="inline-block" style={{ width: '300px', height: '300px', backgroundColor: 'blue' }} /></div>,
          <div className="pr-5 inline-block"><div className="inline-block" style={{ width: '300px', height: '300px', backgroundColor: 'yellow' }} /></div>,
          <div className="pr-5 inline-block"><div className="inline-block" style={{ width: '300px', height: '300px', backgroundColor: 'green' }} /></div>,
          <div className="pr-5 inline-block"><div className="inline-block" style={{ width: '300px', height: '300px', backgroundColor: 'purple' }} /></div>,
        ]}
        offsetPerStep={600}
        displayPerPage={2}
      />
      <Divider />
      <Portfolio />
      <Divider />
    </div>
  );
}

export default Welcome;
