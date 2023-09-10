import './home.sass';
import Button from '../inputs/Button.tsx';

function Home() {
  return (
    <div className="max-md:text-center md:pl-5 md:flex-row max-md:py-10 flex-col home items-center place-content-between" id="home">
      <div>
        <h6 className="label">Привет, меня зовут</h6>
        <h1 className="label">Артем Володин</h1>
        <h6 className="label">Я fullstack разработчик на TypeScript и JavaScript</h6>
        <a href="/resumeraw.pdf" target="_blank">
          <Button
            text="Скачать резюме .pdf"
          />
        </a>
      </div>
      <div>
        <img src="/static/img/js.png" alt="js" />
      </div>
    </div>
  );
}

export default Home;
