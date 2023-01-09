import { useState } from "react";
import { CategoriesList } from "./CategoriesList";

export function Categor() {
  const [editing, SetEditing] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Ангилал</h1>
        <button className="btn btn-success" onClick={() => SetEditing(true)}>
          Шинэ
        </button>
      </div>
      <CategoriesList />
    </div>
  );
}
