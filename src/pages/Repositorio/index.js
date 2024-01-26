import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, ButtonActions, Container, Header, IssueList, PageActions } from './styles';
import api from '../../services/api';
import { FaArrowLeft } from 'react-icons/fa';

const Repositorio = () => {
    //É UM OBJETO PORQUE É UM ÚNICO REPOSITÓRIO
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]); //É UM ARRAY PORQUE TEM MAIS DE UM ISSUES
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);



    const { repositorioParams } = useParams();

    //Essa função é assíncrona e é responsável por buscar os dados do repositório na API com base nos parâmetros da URL. 
    //Ela faz duas requisições assíncronas usando Promise.all para buscar informações do repositório e issues.
    
       // O useCallback é um hook do React que é utilizado para memorizar funções, ou seja, para evitar que uma função seja recriada a 
      //  cada renderização do componente, a menos que suas dependências tenham mudado. 
      //  Isso pode ser útil em alguns casos específicos para otimizar o desempenho e evitar renderizações desnecessárias.
       // const loadData = useCallback(async () => {

       //Utiliza o useEffect para chamar a função loadData quando os parâmetros da URL mudam ou quando o componente é montado. 
    //O useEffect é uma maneira de lidar com efeitos colaterais em componentes funcionais do React.
       
     //FUNÇÃO PARA LER OS DADOS
       useEffect(() => {
       const load = (async () => {
        try {
        setLoading(true);
        //PEGA O PARÂMTRO QUE ESTÁ NA URL. ex.: angular/angular
       //passa para nomeRepo o parâmetro decodificado. ex. angular/angular
        const nomeRepo = decodeURIComponent(repositorioParams);
       // console.log("Nome do parâmetro" ,nomeRepo); //angular/angular

        //FAZER DUAS REQUISIÇÕES COM BASE NO PARÂMETRO
        //SE FOSSE SOMENTE UMA API SERIA ASSIM:
           // const response = await api.get(`/repos/${nomeRepo}`);

           //EXECUTA 2 APIS AO MESMO TEMPO
            const [repositorioData, issuesData] = await Promise.all([
            api.get(`/repos/${nomeRepo}`), //angular/angular
            api.get(`/repos/${nomeRepo}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5 //VAI VIR 5 PÁGINAS
                }
            }) //angular/angular/issues
        ]);
        //passar isso para uma useState
      //  console.log("REPOSITÓRIO DATA" ,repositorioData.data); //OBJETO - DATA ARMAZENA OS DADOS
      //  console.log("ISSUES DATA" ,issuesData.data); //ARRAY
      
      //PASSA OS DADOS PARA O USESTATE 
        setRepositorio(repositorioData.data);
        setIssues(issuesData.data);
        } catch (error) {
        setError('Erro ao carregar dados:');
        console.log('Erro ao carregar dados:', error)
        } finally {
            setLoading(false);
        }
    }); //FECHA A FUNÇÃO LOAD
        load();
        }, [repositorioParams]);

        /////////////

        //FUNÇÃO PARA PAGINAÇÃO
        useEffect(() => {
            const loadIssue = (async () => {
            const nomeRepo = decodeURIComponent(repositorioParams);
            const response = await api.get(`/repos/${nomeRepo}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5, 
                    page
                }
            });
            setIssues(response.data);
        })
        loadIssue();
        }, [repositorioParams, page]);
        ///////////////////////////////////

        //BOTAO PARA VOLTAR E PRÓXIMO
        const handleAction = (action) => {
            setPage(action === 'voltar' ? page - 1 : page + 1);
       }
       ///////////////////////////////
        if (loading) {
            return <p>Carregando...</p>;
        }
        if (error) {
            return <p>{error}</p>;
        }   
   ////////////////////////////////

    return(
        <Container>
            <BackButton to="/" >
                <FaArrowLeft background="#ff0000" size={30}/>
            </BackButton>
           <Header>
                <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
           </Header>
           <IssueList>
            { issues.map(issue => (
                  <li key={String(issue.user.id)}>
                    <img src={issue.user.avatar_url} alt={issue.user.login} />
                    <div>
                        <strong>
                            <a href={issue.html_url}>{issue.title}</a>
                        
                            {issue.labels.map(label => (
                                <span key={label.id}>{label.name}</span>
                            ))}
                        </strong>
                    <p>{ issue.user.login }</p>
                    </div>
                </li>
            ))}
           </IssueList>
           <PageActions>
                     <button onClick={() => handleAction('voltar')}>Voltar</button>    
                     <button onClick={() => handleAction('proxima')}>Próxima</button>   
           </PageActions>

        </Container>
    )
}
export default Repositorio;
