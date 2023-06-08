import styled from "styled-components";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <ToDoList />
    </AppContainer>
  );
}

export default App;
