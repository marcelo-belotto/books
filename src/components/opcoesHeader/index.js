import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;
  cursor: pointer;
`;

const textoOpcoes = ['CADASTRAR LIVRO','CATEGORIAS','FAVORITOS'];

function OpcoesHeader(){
  return (
    <Opcoes>
          {
            textoOpcoes.map( texto =>(
              <Link to={`/${texto.toLowerCase().replace(' ','')}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Opcao><p>{texto}</p></Opcao>
              </Link>
            ))
          }
        </Opcoes>
  )
}

export default OpcoesHeader