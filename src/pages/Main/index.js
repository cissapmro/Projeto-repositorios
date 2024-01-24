import React, { useCallback, useEffect, useState } from 'react';
import { Container, DeleteButton, Form, List, SubmitButton } from './styles';
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';
import api from '../../services/api';

const Main = () => {

const [novoRepositorio, setNovoRepositorio] = useState(''); //nome do novo repositório adicionado.
const [repositorios, setRepositorios] = useState([]); //lista de repositórios
const [loading, setLoading] = useState(false); //controlar o loading
const [alert, setAlert] = useState(null);

//Buscar
useEffect(() => {
    const repoStorage = localStorage.getItem('item');
    if(repoStorage) {
        setRepositorios(JSON.parse(repoStorage)); //passa para array
    }
}, []);

//salvar as alterações - atualiza a página 
useEffect(() => {
    localStorage.setItem('item', JSON.stringify(repositorios)) //passa para string
}, [repositorios]);


//useCallback é útil quando você precisa passar uma função para um componente filho, 
//mas não quer que essa função seja recriada desnecessariamente a cada renderização do componente pai.
const handleSubmit = useCallback((e) => {
    e.preventDefault(); //Previne o comportamento padrão do formulário (recarregar a página).
    setAlert(null);

    //função responsável por fazer a requisição
    const submit = async () => {
        setLoading(true); //quando clicar no botão de submit vai ficar true
        setAlert(null);
        try {

            //verifica se o campo está vazio
            if(novoRepositorio === ''){
                throw new Error('Você precisa preencher o campo!')
            }

            const response = await api.get(`repos/${novoRepositorio}`);

            //verifica se já existe aquele repositório
            const hasRepo = (repositorios.find(item => item.nome === novoRepositorio));
            if(hasRepo) {
                throw new Error('Este repositório já existe');
            }

           // console.log('Response', response);
            //pega os dados da api propriedade full_name
            const data = {
                nome: response.data.full_name,
                
            }
            console.log('Data', data);
            //preencheu o array com os dados
            setRepositorios([...repositorios, data]);
            setNovoRepositorio('');
        } catch(error) {
            setAlert(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    submit();
}, [novoRepositorio, repositorios]); //quando forem atualizados, vai chamar o useCallback

//Ao acessar o campo
const handleInputChange = (e) => {
setNovoRepositorio(e.target.value);
setAlert(null);
}

const handleDelete = useCallback((item) => {
    //retorna tudo para a const procura menos o que foi selecionado.
    const procura = repositorios.filter(r => r.nome !== item);
    setRepositorios(procura);
}, [repositorios]);

    return(
        <>
           <Container>
                <h1>
                    <FaGithub size={25} />
                    Meus Repositórios</h1>
                  {/*}  props transitórias prefixadas com $, 
                  para evitar avisos no console sobre props desconhecidas..*/}
            <Form onSubmit={handleSubmit} $error={alert ? 'true' : 'false'}> {/*Isso permite que o componente Form saiba se um alerta deve ser exibido ou não.*/}
                <input type="text" 
                placeholder="Digite o repositório" 
                value={novoRepositorio}
               // onChange={(e) => setNovoRepositorio((e).target.value)}
               onChange={handleInputChange}
                />
              
                <SubmitButton 
                loading={loading ? 1 : 0}>  {/*Passando uma props*/}
                {loading ? (
                    <FaSpinner color="fff" size={14} />
                ) : 
                <FaPlus color="#fff" size={14} />
                }
                </SubmitButton>
            </Form>  
            <List>
                {repositorios.map(item => (
                    <li key={item.nome}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(item.nome)}>
                                <FaTrash size={14} />
                            </DeleteButton>
                            {item.nome}</span>
                        <a href="https://www.google.com"> 
                            <FaBars size={14} />
                    </a>
                    </li>
                ))}
            </List>  
           </Container>
        </>
    )
}
export default Main;