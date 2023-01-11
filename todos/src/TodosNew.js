import { useState } from "react";
import { TodosError } from "./TodosError";
import { v4 as uuidv4 } from "uuid";
export function TodoNew({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  function handleTextChange(e) {
    setText(e.target.value);
  }
  function handleSave() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      onSave(text);
      setText("");
      setError("");
    }
  }

  return (
    <>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
      ></input>
      <button onClick={handleSave}> Нэмэх</button>
      <TodosError error={error} />
    </>
  );
}
