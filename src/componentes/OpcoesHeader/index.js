import styled from "styled-components";

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

const textoOpcoes = ["Categorias", "Minha Estante", "Favorito"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}
export default OpcoesHeader;
