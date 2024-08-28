import Header from './componentes/header';
import styled from "styled-components";
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
     background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  
`;

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Pesquisa/>
    <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
