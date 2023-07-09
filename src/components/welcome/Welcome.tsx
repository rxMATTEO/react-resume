import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';
import EducationAndSkills from './EducationAndSkills.tsx';
import Experience from './Experience.tsx';

function Welcome() {
  return (
    <div className="w-2/3 mx-auto">
      <AboutMe />
      <Divider />
      <EducationAndSkills />
      <Divider />
      <Experience />
    </div>
  );
}

export default Welcome;
