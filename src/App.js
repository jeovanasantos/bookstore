import Header from './componentes/header';
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #363636;
  
`;

function App() {
  return (
    <AppContainer>
      <Header></Header>
    </AppContainer>
  );
}

export default App;
