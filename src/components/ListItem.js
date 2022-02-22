import React, { useState } from "react";

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handeOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      handleEditTodos(todo, id);
    }
  };

  const selections = [
    ["Coming", false],
    ["Running", false],
    [ "Done", false],
  ];


  if (onEdit) {
    return (
      <div>
        <li>
          <input
            type="text"
            id="editValue"
            value={editValue}
            name="editValue"
            onChange={(e) => setEditValue(e.target.value.toLowerCase())}
          />

          <button onClick={() => handleSave(id)}>Save</button>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              checked={todo.complete}
              onChange={() => checkComplete(id)}
            />
            {todo.name}
          </label>


          <select name="progress" id="progress">
            {selections.map((option, index) => (
             
              <option key={index} id={index} value={option[1]} >
                {option[0]}
              </option> 
            ))}
            
          </select>

          <button disabled={todo.complete} onClick={handeOnEdit}>
            Edit
          </button>
        </li>
      </div>
    );
  }
}
