import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 40vw;
  height: 65vh;
`;

const InputsContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  justify-content: center;
  padding: 15px;
`;

const ToDoInput = styled.input`
  padding: 10px;
  width: 75%;
  border-radius: 5px;
  font-size: 1.25em;
  background-color: #d1d1d1;
  color: #2e2e2e;
  outline: none;
  border: none;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #d8d7d7;
  }
`;

const ToDoButton = styled.button`
  font-size: 1.5em;
  padding: 10px;
  color: #2e2e2e;
  background-color: #25e100;
  transition: all 0.1s ease-out;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #137100;
    color: #ffffff;
    cursor: pointer;
  }

  &:active {
    background-color: #1e9b05;
  }
`;

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleItem = (toDoText, action) => {
    const newItems = items
      .map((item) => {
        if (item.task !== toDoText) {
          return item;
        }
        return action === "check"
          ? {
              ...item,
              completed: !item.completed,
            }
          : null;
      })
      .filter(Boolean);
    setItems(newItems);
  };

  useEffect(() => {
    setItems(JSON.parse(window.localStorage.getItem("toDoItems")) || []);
  }, []);

  useEffect(() => {
    if (items && items.length) {
      window.localStorage.setItem("toDoItems", JSON.stringify(items));
    }
  }, [items]);

  return (
    <ToDoListContainer>
      <InputsContainer
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
          setItems([
            ...items,
            {
              task: text,
              completed: false,
            },
          ]);
        }}
      >
        <ToDoInput
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ToDoButton type="submit">Submit</ToDoButton>
      </InputsContainer>
      {items &&
        items.map((item) => (
          <ToDoItem
            key={item.task}
            task={item.task}
            completed={item.completed}
            handleItem={handleItem}
          />
        ))}
    </ToDoListContainer>
  );
};

export default ToDoList;
