import axios from 'axios';

const livrosAPI = axios.create({baseURL: 'http://192.168.2.105:8000/'});

async function getLivros(){
    const response = await livrosAPI.get('/livros');
    return response.data;
}

async function postLivros(livro){
  livro = JSON.parse(livro);
  console.log(livro);
  await livrosAPI.post('/livros',livro);
}

export {
  getLivros,
  postLivros
}