import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';
import EducationAndSkills from './EducationAndSkills.tsx';
import Experience from './Experience.tsx';
import Stack from './Stack.tsx';
import Carousel from './Carousel.tsx';

function Welcome() {
  return (
    <div className="w-2/3 mx-auto">
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
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'red' }} />,
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'black' }} />,
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'white' }} />,
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'yellow' }} />,
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'blue' }} />,
          <div className="inline-block mr-5" style={{ width: '300px', height: '300px', backgroundColor: 'orange' }} />,
        ]}
        offsetPerStep={300}
        displayPerPage={2}
      />
    </div>
  );
}

export default Welcome;
