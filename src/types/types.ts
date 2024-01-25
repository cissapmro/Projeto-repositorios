export interface BuscarRepositorio  {
    name: string;
    full_name: string;
    owner: {
      login: string;
      avatar_url: string;
      url: string;
    }
    description: string;
    }
export interface BuscarIssues {
    url: string;
    repository_url: string
    
};
