import Input from '../Input';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavoritos } from '../../servicos/favoritos';
import livroImg from '../../imagens/livro.jpg';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg,rgb(0, 0, 0) 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
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
const LivroContainer = styled.div`
color: black;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 20px;
/*cursor: pointer;*/
p {
    width: 200px;
}
img {
    width: 100px;
}
button{
    cursor: pointer;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
}
/*&:hover {
    border: 1px solid white;
}*/
`;

function Pesquisa(){
  const [livrosPesquisados,setLivrosPesquisados] = useState([]);
  const [livros,setLivros] = useState([]);

  async function fetchLivros(){
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function insereFavorito(id){
    await postFavoritos(id);
    alert(`Livro adicionado aos Favoritos!`);
  }

  useEffect(()=> {
    fetchLivros()
  },[]);
  
  return(
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
      placeholder='Escreva sua próxima leitura'
      onBlur={evento => {
        const textoDigitado = evento.target.value;
        const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
        setLivrosPesquisados(resultadoPesquisa);
      }}
      />
      <LivroContainer>
        {
          livrosPesquisados.map( livro => (
          <div>
            <img src={livroImg} alt='Imagem do Livro'/>
            <p>{livro.nome}</p>
            <button onClick={() => insereFavorito(livro.id)}>FAVORITAR</button>
          </div>)
          )
        }
      </LivroContainer>
    </PesquisaContainer>
  )
}

export default Pesquisa;