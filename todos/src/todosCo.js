import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// const initialTodos = [" washing", " cleaning", " vacuuming"];
// const a = ["kjahdkf"]; // huuchin butets ni jiriin massiv dotor string bsan
// const a1 = [{ text: "d;lkfak", id: 123, done: true }]; // shine butets ni
function Todos() {
  const [text, setText] = useState("");
  const [initialTodos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(); // saving a index
  const [editingText, setEditingTexts] = useState({});

  function handleTextChange(e) {
    setText(e.target.value);
  }
  function addTodo() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      if (editing === undefined) {
        const newTodo = {
          text: text,
          done: false,
          id: uuidv4(),
        };

        const newTodos = [newTodo, ...initialTodos];
        setTodos(newTodos);
      } else {
        const newTodos = [...initialTodos];
        newTodos[editing].text = text;
        setTodos(newTodos);
        setEditing(undefined);
      }
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

  // edit todo with input
  function editTodoWithCreateInput(index) {
    setEditing(index);
    setText(initialTodos[index].text);
  }
  function editTodoWithPrompt(id) {
    const newTodos = [...initialTodos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    const editedText = prompt("Todo zahas", initialTodos[index].text);
    newTodos[index].text = editedText;
    setTodos(newTodos);
  }
  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingText };
    newEditingTexts[id] = initialTodos[index].text;
    setEditingTexts(newEditingTexts);
  }

  function handleEditingText(id, e) {
    const newEditingTexts = { ...editingText };
    newEditingTexts[id] = e.target.value;
    setEditingTexts(newEditingTexts);
  }

  function updateEditingText(index, id) {
    const newTodos = [...initialTodos];
    newTodos[index].text = editingText[id];
    setTodos(newTodos);
    cancelEditing(id);
  }

  function cancelEditing(id) {
    const newEditingTexts = { ...editingText };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  // edit todo with prompt

  return (
    <div>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
      ></input>
      <button onClick={addTodo}> Нэмэх</button>
      <ul>
        {initialTodos.map((item, index) => {
          return (
            <li
              key={item.id}
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {editingText[item.id] !== undefined ? (
                <>
                  <input
                    value={editingText[item.id]}
                    onChange={(e) => handleEditingText(item.id, e)}
                  ></input>
                  <button onClick={() => cancelEditing(item.id)}> Болих</button>
                  <button onClick={() => updateEditingText(index, item.id)}>
                    Хадгалах
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    onChange={(e) => handleDoneChange(item.id, e)}
                  />
                  {item.text}

                  {!item.done && (
                    //zasah with prompt
                    // <button onClick={() => editTodoWithPrompt(item.id)}>Засах</button>

                    // <button onClick={() => editTodoWithCreateInput(index)}>
                    //   {" "}
                    //   Засах
                    // </button>
                    <button onClick={() => editTodoInline(item.id, index)}>
                      {" "}
                      Засах
                    </button>
                  )}
                  <button onClick={() => handleDelete(index)}> Устгах</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
