import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;
const Icone = styled.li`
  margin-right: 2.5rem;
  width: 1.6rem;
`;

const iconesOpcoes = [perfil,sacola];

function OpcoesIcones(){
  return(
    <Icones>
          {
            iconesOpcoes.map( icone =>(
              <Icone><img src={icone} alt='icone'></img></Icone>
            ))
          }
        </Icones>
  )
}

export default OpcoesIcones