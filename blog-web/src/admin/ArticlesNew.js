import { useState } from "react";
import { CategoriesSelector } from "./categSelector";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
export function ArticleNew() {
  const [text, setText] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");

  function submit() {
    console.log({ text, categoryId });
    axios
      .post("http://localhost:8000/articles", {
        title, //title:title
        categoryId,
        text,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("success");
        }
      });
  }
  return (
    <>
      <h1 className="mb-4"> Шинэ мэдээ</h1>
      <CategoriesSelector
        value={categoryId}
        onChange={(val) => setCategoryId(val)}
      />
      <input
        className="form-control mt-4 mb-4"
        placeholder="Мэдээний гарчиг"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />
      {/* <div>{text}</div> */}
      <button className="btn btn-primary" onClick={submit}>
        {" "}
        Хадгалах
      </button>
      {/* <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
    </>
  );
}
