import './button.sass';
import { ReactElement } from 'react';

type ButtonProps = {
  text: string,
  onclick?: () => any,
  color?: string,
  icon?: ReactElement
}
function Home({
  text, onclick, color, icon,
}: ButtonProps) {
  return (
    <div>
      <button className={`button ${color}`} onClick={onclick?.()}>
        <div className="flex place-items-center">
          <div>{icon}</div>
          <span className="ml-2 bg-re button-text align-middle">{text}</span>
        </div>
      </button>
    </div>
  );
}

Home.defaultProps = {
  onclick: () => undefined,
  color: '',
  icon: null,
};

export default Home;
