import logo from '../../imagens/logo.svg';
import styled from 'styled-components'

const Texto = styled.p``;
const Negrito = styled.span`
  font-weight: bold;
`;
const LogoContainer = styled.div`
  display: flex;
  font-size: 2rem;
`;
const LogoImagem = styled.img`
  margin-right: 1rem;
`;

function Logo(){
  return(
  <LogoContainer>
    <LogoImagem src={logo} alt="logo" />
    <Texto><Negrito>Books</Negrito></Texto>
  </LogoContainer>
)
}

export default Logo;