import Cadastro from '../components/Cadastro';
import styled from 'styled-components';

const AppContainer = styled.div`
  width:100vw;
  height: 100vh;  
  background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%,rgb(22, 53, 75));
`;

function Cadastrar() {
  return (
    <AppContainer>
      <Cadastro/>
    </AppContainer>
  );
}

export default Cadastrar;