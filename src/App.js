import React from "react";
import styled from "styled-components";
import "./App.css";
import ContentLeft from "./Components/ContentLeft/ContentLeft";
import ContentRight from "./Components/ContentRight/ContentRight";

function App() {
  return (
    <Main>
      <ContentLeft />
      <ContentRight />
    </Main>
  );
}

export default App;

const Main = styled.div`
margin: 50px auto;
max-width: 960px;
min-height: 400px;
background-color: white;
border-radius: 10px;
box-shadow: 3px 3px 0 0 #e1edff;
display: flex;
justify-content: space-between;
overflow: hidden;
padding: 30px 20px;
`;  