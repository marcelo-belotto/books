import Input from '../Input';
import styled from 'styled-components';
import { getLivros, postLivros } from '../../servicos/livros';

const CadastroContainer = styled.section`
  background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Botao = styled.button`
    margin-top: 1.5rem;
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-radius: 0.5rem;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`;

function Cadastro(){
    let textoDigitado;

    async function insereLivro(nomelivro){
        if (nomelivro !== ''){
            let index = await getLivros();
            index = Object.keys(index).length + 1;
            let livro = `{"id": ${index},"nome":"${nomelivro}"}`;
            await postLivros(livro);
            alert(`${nomelivro} adicionado a Estante!`);
        }else{
            alert("Digite um nome!")
        }
        
    }

    return(
        <CadastroContainer>
          <Titulo>Cadastro de Livro</Titulo>
          <Subtitulo>Insira novos Livros em nossa Estante</Subtitulo>
          <Input 
          placeholder='Digite o novo livro'
          onBlur={evento => {
            textoDigitado = evento.target.value;
          }}
          />
            <Botao onClick={() => insereLivro(textoDigitado)}>CADASTRAR</Botao>
        </CadastroContainer>
            
      )
}

export default Cadastro;