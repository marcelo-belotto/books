import { Link } from 'react-router-dom';
import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import OpcoesIcones from '../opcoesIcones';
import estilizador from 'styled-components';

const HeaderContainer = estilizador.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`;

function Header(){
  return(
    <HeaderContainer>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}> 
          <Logo/>
        </Link>
        <OpcoesHeader/>
        <OpcoesIcones/>
      </HeaderContainer>
  )
}

export default Header;