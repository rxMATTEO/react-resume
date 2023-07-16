import './main.sass';
import Home from '../home/Home.tsx';
import Welcome from '../welcome/Welcome.tsx';

function Main() {
  return (
    <div className="main overflow-hidden sm:w-[90%] max-w-full">
      <Home />
      <Welcome />
    </div>
  );
}

export default Main;
