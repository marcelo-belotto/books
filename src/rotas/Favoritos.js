import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavoritos, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.jpg'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favoritos() {
  const [favoritos,setFavoritos] = useState([]);
  
  useEffect(()=> {
    fetchFavoritos()
  },[]);
    
  async function fetchFavoritos(){
  const favoritosAPI = await getFavoritos();
  setFavoritos(favoritosAPI);
  }

  async function excluiFavorito(id){
    await deleteFavoritos(id);
    await fetchFavoritos();
    alert(`Livro removido dos Favoritos!`);
  }

  return (
    <AppContainer>
    <div>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {
          favoritos.length !== 0 ? favoritos.map(favorito => (
            <Resultado onClick={() => excluiFavorito(favorito.id)}>
              <img src={livroImg} alt=''/>
              <p>{favorito.nome}</p>
            </Resultado>
          )) : null
        }
      </ResultadoContainer>
    </div>
  </AppContainer>
  );
}

export default Favoritos;