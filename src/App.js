import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions";
import { getTodo } from "./selector";

function App() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector(getTodo);

  const handleClick = ({ target }) => {
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={(e) => handleClick(e)}>Felvétel</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
