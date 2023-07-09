import './welcome.sass';
import Divider from '../inputs/Divider.tsx';
import AboutMe from './AboutMe.tsx';

function Welcome() {
  return (
    <div className="w-2/3 mx-auto">
      <AboutMe />
      <Divider />
    </div>
  );
}

export default Welcome;
