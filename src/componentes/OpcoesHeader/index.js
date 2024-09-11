import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  list-style: none;
`;

const textoOpcoes = ["Categorias", "Estante", "Favoritos"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <Link to={`/${texto}`}><p>{texto}</p></Link>
        </Opcao>
      ))}
    </Opcoes>
  );
}
export default OpcoesHeader;
