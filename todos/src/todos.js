import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// const initialTodos = [" washing", " cleaning", " vacuuming"];
// const a = ["kjahdkf"]; // huuchin butets ni jiriin massiv dotor string bsan
// const a1 = [{ text: "d;lkfak", id: 123, done: true }]; // shine butets ni
function Todos() {
  const [text, setText] = useState("");
  const [initialTodos, setTodos] = useState([]);
  const [error, setError] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }
  function addTodo() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      const newTodo = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      const newTodos = [newTodo, ...initialTodos];
      setTodos(newTodos);
      setText("");
      setError("");
    }
  }
  function handleDelete(bairlal) {
    if (window.confirm("устгах уу?")) {
      const newTodos = [...initialTodos];
      newTodos.splice(bairlal, 1); // delete item from array using index
      setTodos(newTodos);
      // setText("");
      // setError("");
    }
  }
  function handleDoneChange(id, e) {
    const newTodos = [...initialTodos];
    let index;
    for (let i = 0; i < initialTodos.length; i++) {
      if (id === initialTodos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  return (
    <div>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
      ></input>
      <button onClick={addTodo}> Нэмэх</button>
      <ul>
        {initialTodos.map((item, index) => (
          <li
            key={item.id}
            style={{ textDecoration: item.done ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              onChange={(e) => handleDoneChange(item.id, e)}
            />
            {item.text}{" "}
            <button onClick={() => handleDelete(index)}> Устгах</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
