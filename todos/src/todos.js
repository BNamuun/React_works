import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosList } from "./TodosList";
import { TodoNew } from "./TodosNew";
import axios from "axios";
// const initialTodos = [" washing", " cleaning", " vacuuming"];
// const a = ["kjahdkf"]; // huuchin butets ni jiriin massiv dotor string bsan
// const a1 = [{ text: "d;lkfak", id: 123, done: true }]; // shine butets ni
function Todos() {
  const [initialTodos, setTodos] = useState([]);
  // const [editing, setEditing] = useState(); // saving a index
  const [editingText, setEditingTexts] = useState({});

  function handleSave(text) {
    const newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...initialTodos];
    setTodos(newTodos);
  }
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        // console.log(data.map(item));
        data.map((dat) =>
          // cosnt DateVal =  DateTime.push((item)[0])
          console.log(dat.item)
        );
      } else {
        alert(`Error: ${status}`);
      }
    });
  });

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
  // function editTodoWithCreateInput(index) {
  //   setEditing(index);
  //   setText(initialTodos[index].text);
  // }
  // function editTodoWithPrompt(id) {
  //   const newTodos = [...initialTodos];
  //   const index = newTodos.findIndex((todo) => todo.id === id);
  //   const editedText = prompt("Todo zahas", initialTodos[index].text);
  //   newTodos[index].text = editedText;
  //   setTodos(newTodos);
  // }
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
      <TodoNew onSave={handleSave}></TodoNew>
      <TodosList
        initialTodos={initialTodos}
        editingText={editingText}
        cancelEditing={cancelEditing}
        handleEditingText={handleEditingText}
        updateEditingText={updateEditingText}
        handleDoneChange={handleDoneChange}
        editTodoInline={editTodoInline}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Todos;
