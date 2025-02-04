import Pesquisa from '../components/Pesquisa';
import styled from 'styled-components';
import UltimosLancamentos from '../components/ultimosLancamentos';

const AppContainer = styled.div`
  width:100vw;
  height: 100vh;
`;
//background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%, #326589);
function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;