import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function viewText(e) {
    setText(e.target.value);
  }
  function onSave() {
    if (text === "") {
      setText("utgaa oruulna uu!");
    } else {
      const addedList = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      const List1 = [addedList, ...list];
      setList(List1);
      setText("");
      // console.log(List1);
    }
  }
  function checkBox(id, e) {
    const List = [...list];
    console.log(e);
  }
  return (
    <>
      <input onChange={viewText} value={text}></input>
      <button onClick={onSave}> Нэмэх</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <input
                type={"checkbox"}
                onChange={(e) => checkBox(item.id, e)}
              ></input>
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}
