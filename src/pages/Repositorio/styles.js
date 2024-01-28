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
export const IssueList = styled.ul`
    margin-top: 30px;
    background-color: pink;
    padding-top: 30px;
    list-style: none;
    border-top: 1px solid orange;

    li {
        display: flex;
        padding: 15px 10px;
        justify-content: center;
        align-items: center;

        & + li {
            margin-top: 12px;
        }
    }
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #fff;
        display: flex;
    }

    div {
        background-color: #fff;
        flex: 1;
        margin-left: 12px;
        padding: 10px;
        border-radius: 5px;

        p {
            color: orange;

        }
    }

    strong {
        font-size: 14px;

        a {
            text-decoration: none;
            color: #222;
            transform: 0.3s;

            &:hover {
                color: #0071db;
            }
        }

        span {
            color: orange;
            background: #00c1c4;
            padding: 5px 7px;
            border-radius: 5px;
            margin-left: 10px;
            font-size: 12px;
        }
    }

    p {
        margin-top: 10px;
        font-size: 12px;
    }
`;

export const PageActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
     margin-top: 10px;
     border: none;
     background-color: #00c1c4;
     color: #fff;
     padding: 10px 15px;
     border-radius: 5px;

     &:disabled {
        cursor: not-allowed;
        background: red;
        opacity: 0.5;
     }

    }

`;

export const Filtrar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    button {
        margin-top: 15px;
        border: none;
        background-color: #00c1c4;
        color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
        margin-left: 10px;
        outline: 0;

        &:nth-child(${props => props.marcar + 1}) {
            background: red;
        }
    }
`;


