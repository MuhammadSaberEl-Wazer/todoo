import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvide = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todStore"));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todStore", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
