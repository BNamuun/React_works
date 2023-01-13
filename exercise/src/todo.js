import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [savedindex, saveIndex] = useState();

  function viewText(e) {
    setText(e.target.value);
  }
  function onSave() {
    if (text === "") {
      setText("utgaa oruulna uu!");
    } else {
      if (savedindex === undefined) {
        const addedList = {
          text: text,
          done: false,
          id: uuidv4(),
        };
        const List1 = [addedList, ...list];
        setList(List1);
      } else {
        const List = [...list];
        List[savedindex].text = text;
        setList(List);
        saveIndex(undefined);
      }
      setText("");
      // console.log(List1);
    }
  }

  function DeleteBtn(index) {
    if (window.confirm("delete this item?")) {
      const List = [...list];
      // console.log(List);
      List.splice(index, 1);
      setList(List);
    }
  }

  function Editbtn(index) {
    // const List = [...list];
    setText(list[index].text);
    saveIndex(index);
  }
  function linethrough(id, e) {
    const List1 = [...list];
    let ind;

    // console.log({ List1, id });
    for (let i = 0; i < List1.length; i++) {
      if (List1[i].id === id) {
        ind = i;
        break;
      }
    }

    // console.log({ ind });

    List1[ind].done = !List1[ind].done;
    setList(List1);
  }

  // console.log({ list });

  return (
    <>
      <input onChange={viewText} value={text}></input>
      <button onClick={onSave}> Нэмэх</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              <input
                type={"checkbox"}
                onChange={(e) => linethrough(item.id, e)}
                checked={list.done}
              ></input>
              {item.text}
              <button onClick={() => Editbtn(index)}>Засах</button>
              <button onClick={() => DeleteBtn(index)}>Устгах</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
