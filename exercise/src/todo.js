import { useState } from "react";
const list = ["nom", "shh", "kjd"];
export function ToDo() {
  const [text, setText] = useState("");

  function onSave(e) {
    const InpVal = e.target.value;
    console.log(InpVal);
  }
  function viewText() {
    setText(text);
  }
  return (
    <>
      <input onChange={onSave} value={text}></input>
      <button onClick={viewText}> Нэмэх</button>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
