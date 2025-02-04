import Pesquisa from '../components/Pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
  width:100vw;
  height: 100vh;  
  background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%, #326589);
`;

function Categorias() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Categorias;