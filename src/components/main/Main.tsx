import './main.sass';
import Home from '../home/Home.tsx';
import Welcome from '../welcome/Welcome.tsx';

function Main() {
  return (
    <div className="main">
      <Home />
      <Welcome />
    </div>
  );
}

export default Main;
