import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { AwesomeButton } from "react-awesome-button";
export function AddNews() {
  const [text, setText] = useState();
  const { Uploader } = require("uploader");
  const uploader = Uploader({
    apiKey: "free",
  });
  function UploadFile() {
    // const [image, setImage] = useState([]);
    return uploader
      .open({ multi: true })
      .then((files) => {
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          console.log(files.map((f) => f.fileUrl));
        }
        // setImage(files);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="d-flex  flex-column container mt-5 gap-3">
      <div>
        <Card border="primary">
          <Card.Header>Ангилалын нэр</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card border="primary">
          <Card.Header>Нийтлэлийн зураг</Card.Header>
          <Card.Body>
            <AwesomeButton onPress={UploadFile} type="primary">
              Зураг Оруулах
            </AwesomeButton>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card border="primary">
          <Card.Header>Мэдээлэл</Card.Header>
          <Card.Body>
            {/* <Card.Title>Primary Card Title</Card.Title> */}
            <CKEditor
              editor={ClassicEditor}
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
                // console.log({ event, editor, data });
              }}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
