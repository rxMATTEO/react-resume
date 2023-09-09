function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto place-content-between max-lg:items-center" id="about">
      <div className="image lg:w-1/2 lg:mr-10 lg:order-1 order-2">
        <img src="/static/img/vue.png" />
      </div>
      <div className="about lg:w-1/2 lg:order-1 order-1">
        <p className="text-5xl font-light uppercase tracking-[5px]">Обо мне</p>
        <p className="text-lightgrey mt-7">
          Меня зовут
          <strong> Артем</strong>
          , мне
          <span> 22 года</span>
          . Над разработкой программного обеспечения и веб приложений работаю 4 года.
          <p>
            <br />
            Начинал разрабатывать приложения для десктопа на .NET, впоследствии перешел на fullstack разработку на JavaScript. Первым frontend фреймворком был
            {' '}
            <span className="text-blue-300 font-bold">React</span>
            , в последнее время чаще использую
            {' '}
            <span className="text-green-400 font-bold">Vue</span>
            .
            <br />
            <p>
              Люблю использовать
              {' '}
              <span className="font-bold text-blue-200">Utility-First CSS</span>
              {' '}
              и
              <span className="font-bold text-pink-300"> SASS</span>
              .
            </p>
            Пишу backend на Nitro и Express при участии Prisma ORM.
          </p>
        </p>
        <p className="mt-5">
          В свободное время пишу
          <strong className=""> open source </strong>
          fullstack веб приложения.
          Одно из последних - интерактивная игра по нахождению синонимов для слов, на разных языках -
          <a href="https://www.synohunt.ru" target="_blank" className="text-purple" rel="noreferrer"> Synohunt. </a>
        </p>
        <p>
          Часто прохожу испытания на
          <a href="https://www.codewars.com/users/rxMATTE0" target="_blank" className="text-purple" rel="noreferrer"> Codewars.</a>
        </p>
        <br />
        <p>Заблокировали основной Github из-за места работы, в связи с чем утеряна куча репозиториев, из них малая часть мигрировала на новый.</p>

      </div>
    </div>
  );
}
// todo figure out flex shit
export default AboutMe;
