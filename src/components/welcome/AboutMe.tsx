function AboutMe() {
  return (
    <div className="flex flex-row mx-auto place-content-between">
      <div className="image w-1/2 mr-10">
        <img src="https://sergio-react.vercel.app/static/img/about-me.png" alt="me" />
      </div>
      <div className="about w-1/2" id="about">
        <p className="text-5xl font-light uppercase tracking-[5px]">Обо мне</p>
        <p className="mt-10 text-xl font-bold">Я JavaScript разработчик с 3-ех летним опытом.</p>
        <p className="mt-5 text-lightgrey">
          Занимаюсь разработкой web-приложений на TypeScript и JavaScript.
          Ранее разрабатывал десктопные приложение для мелкого бизнеса на платформе .NET.
          Проживаю в Московской области, Кубинка.
          На данный момент разрабатываю безопасные web приложения для Российских космических систем в большой команде.
        </p>
        <div className="flex flex-row mt-5">
          <div className="flex flex-row items-center mr-5">
            <span className="text-[50px] mr-2 font-bold">{'>30'}</span>
            <span>
              проектов
              <br />
              разработано
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[50px] font-bold mr-2">{'>30'}</span>
            <span>
              проектов
              <br />
              разработано
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
