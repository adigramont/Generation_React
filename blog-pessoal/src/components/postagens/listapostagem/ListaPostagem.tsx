import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';


function ListaPostagem() {
  
  const[posts, setPosts] = useState<Postagem[]>([])
  const[token, setToken] = useLocalStorage('token');
  let history = useNavigate();
  
  useEffect(() => {
    if(token == ''){
      alert("Você precisa estar logado")
      history('/login')
    }
  }, [token])
  
  async function getPost(){
    await busca("/postagens", setPosts, {
      headers:{

        'Authorization': token
      }
   
    })
    
  
  
  
    useEffect(() => {
    getPost()
  }, [posts.length])
  
  return (
  <>
  {
    posts.map(post =>(

<>
<Box mx={1}>
<Button variant="contained" className="marginLeft" size="small" color='primary' >
|
atualizar
</Button>
</Box>
</Link>
<Link to="" className="text-decorator-none">
<Box mx={1}>
<Button variant="contained" size="small" color="secondary" ></Button>


<Button>
<Card variant="outlined">
<CardContent>
<Typography color="textSecondary" gutterBottom>
Postagens
</Typography>
<Typography variant="h5" component="h2">
Título
</Typography>
<Typography variant="body2" component="p">

Texto da Postagem
</Typography>
<Typography variant="body2" component="p">
Tema
</Typography>
</CardContent>
<CardActions>
<Box display="flex" justifyContent="center" mb={1.5}>
<Link to="" className="text-decorator-none" >
<Box mx={1}>
<Button variant="contained" className="marginLeft" size='small' color="prim
atualizar
</Button>
</Box>
</Link>
<Link to="" className="text-decorator-none">
<Box mx={1}>
<Button variant="contained" size='small' color="secondary">
deletar
</Button>
</Box>
</Link>
</Box>
</CardActions>
</Card>
</Box>
</>
))}
</>
)
}
export default ListaPostagem;
