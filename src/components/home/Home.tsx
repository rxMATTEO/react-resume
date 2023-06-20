import "./home.sass";
import Button from "../inputs/Button";
function Home() {
  return (
    <div className="home">
      <h6 className="label">Привет, меня зовут</h6>
      <h1 className="label">Артем Володин</h1>
      <h6 className="label">Я fullstack разработчик на JavaScript и TypeScript</h6>
      <Button text="Скачать резюме" />
    </div>
  );
}

export default Home;
