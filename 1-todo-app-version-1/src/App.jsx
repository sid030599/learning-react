import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";

function App() {
  let todoname = ["one", "two"];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item-container">
        <TodoItem2 items={todoname}></TodoItem2>
        <TodoItem1></TodoItem1>
      </div>
    </center>
  );
}

export default App;
