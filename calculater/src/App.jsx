import style from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
function App() {
  return (
    <div className={style.calculater}>
      <div className="buttonscontainer">
        <Display></Display>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
