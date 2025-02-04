import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../titulo";
import styled from 'styled-components';
import CardRecomenda from '../../components/cardRecomenda';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
  margin-top: 12rem;
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos(){
  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor = '#EB9B00'
        tamanhoFonte = '36px'
      >Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => 
         <img src={livro.src} alt='Imagem da recomendação'/>
         )};
       </NovosLivrosContainer>
       <CardRecomenda 
        titulo='Talvez você se interesse por' 
        subtitulo='Angular 11'
        descricao='Construíndo uma aplicação integrada com a plataforma do Google'
        img={imagemLivro} />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos