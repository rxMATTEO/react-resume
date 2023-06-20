import "./button.sass";
type ButtonProps = {
  text: string,
  onclick?: () => any
};
function Home(props: ButtonProps) {
  return (
    <div>
    <button className="button" onClick={props.onclick?.()}>
      <span className="button-text">{props.text}</span>
    </button>
    </div>
  );
}

export default Home;
