export function TodosList({
  initialTodos,
  editingText,
  cancelEditing,
  handleEditingText,
  updateEditingText,
  handleDoneChange,
  editTodoInline,
  handleDelete,
}) {
  return (
    <>
      <ul>
        {initialTodos.map((item, index) => {
          return (
            <li
              key={item.id}
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {editingText[item.id] !== undefined ? (
                <>
                  <NormalItem
                    editingText={editingText}
                    item={item}
                    handleEditingText={handleEditingText}
                    cancelEditing={cancelEditing}
                    updateEditingText={updateEditingText}
                    index={index}
                  />
                </>
              ) : (
                <>
                  <EditingItem
                    handleDoneChange={handleDoneChange}
                    item={item}
                    editTodoInline={editTodoInline}
                    index={index}
                    handleDelete={handleDelete}
                  />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function NormalItem({
  editingText,
  item,
  handleEditingText,
  cancelEditing,
  updateEditingText,
  index,
}) {
  return (
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
  );
}

function EditingItem({
  handleDoneChange,
  item,
  editTodoInline,
  index,
  handleDelete,
}) {
  return (
    <>
      <input type="checkbox" onChange={(e) => handleDoneChange(item.id, e)} />
      {item.text}

      {!item.done && (
        //zasah with prompt
        // <button onClick={() => editTodoWithPrompt(item.id)}>Засах</button>

        // <button onClick={() => editTodoWithCreateInput(index)}>
        //   {" "}
        //   Засах
        // </button>
        <button onClick={() => editTodoInline(item.id, index)}> Засах</button>
      )}
      <button onClick={() => handleDelete(index)}> Устгах</button>
    </>
  );
}
