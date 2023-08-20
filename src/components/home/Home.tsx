import './home.sass';
import Button from '../inputs/Button.tsx';

function Home() {
  return (
    <div className="home" id="home">
      <h6 className="label">Привет, меня зовут</h6>
      <h1 className="label">Артем Володин</h1>
      <h6 className="label">Я fullstack разработчик на JavaScript и TypeScript</h6>
      <Button text="Скачать резюме .pdf" />
    </div>
  );
}

export default Home;
