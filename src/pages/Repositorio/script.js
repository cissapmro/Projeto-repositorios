import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
    color: #fff;
    max-width: 700px;
    background-color: #eee;
    border-radius: 4px;
    margin: 80px auto;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    font-family: Arial, Helvetica, sans-serif;

`;
export const Header = styled.header`
    display: flex;
    flex-direction: column; //em baixo do outro
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin:0 auto;
    padding: 5px 5px;
  
    img {
        border-radius: 20%;
        width: 150px;
        margin: 20px 0;
    }

    h1 {
        font-size: 30px;
        color: #0d2636;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;
export const BackButton = styled(Link)`
    outline: 0;
    border: 0;
    background: transparent;
`;
export const IssueList = styled.div`


`;


