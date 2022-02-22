import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvide";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => (todo.complete = !checkAll));

    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return  todo.complete === false;
               
    });
    setTodos(newTodos);
    setCheckAll(false);
  };
  return (
    <div>
      {todos.length === 0 ? (
        <h2> Congratulations! Nothing to do</h2>
      ) : (
        <div className="row1">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={checkAll}
            />
            All
          </label>
          <p>You have {todos.length} to do</p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
