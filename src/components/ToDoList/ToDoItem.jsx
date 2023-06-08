import styled from "styled-components";

const ToDoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 15px 10px 15px 20px;
  border-radius: 10px;
  background-color: #f4f4f4;
  color: #242424;
  font-size: 1.5em;

  transition: all 0.1s ease-out;

  &:hover {
    background-color: #ebe9e9;
  }
`;

const TextContainer = styled.div`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteContainer = styled.div`
  cursor: default;
  margin-left: auto;
  padding: 0px 15px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ToDoItem = ({ task, completed, handleItem }) => {
  return (
    <ToDoItemContainer>
      <input
        type="checkbox"
        value={completed}
        checked={completed}
        onChange={() => handleItem(task, "check")}
      />
      <TextContainer completed={completed}>{task}</TextContainer>
      <DeleteContainer onClick={() => handleItem(task, "delete")}>
        X
      </DeleteContainer>
    </ToDoItemContainer>
  );
};

export default ToDoItem;
