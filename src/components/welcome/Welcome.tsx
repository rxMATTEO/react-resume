import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';
import EducationAndSkills from './EducationAndSkills.tsx';

function Welcome() {
  return (
    <div className="w-2/3 mx-auto">
      <AboutMe />
      <Divider />
      <EducationAndSkills />
    </div>
  );
}

export default Welcome;
