import { css, keyframes, styled } from 'styled-components';

export const Container = styled.div`
background: #ffffff;
max-width: 700px;
border-radius: 4px;
padding: 30px;
margin: 80px auto;
box-shadow: 0, 0, 20px rgba(0,0,0, 0.2);

h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

svg {
    margin-right: 10px;
    }
}

`;

export const Form = styled.form`
 margin-top: 30px;
 display: flex;
 flex-direction: row;

 input {
    flex: 1;
    border: 2px solid ${props => (props.$error === 'true' ? '#ff0000' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px; 
 }

`;

//Animação do botão
const animar = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
  background: #0D2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
justify-content: center;
align-items: center;

&[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

${props => props.loading && 
css`
 svg {
    animation: ${animar} 2s linear infinite;
 }
`
}
`;

export const List = styled.ul`
 list-style: none;
 margin-top: 20px;

li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0; 

    & + li {
        border-top: 1px solid red;
    }

    a {
        color: orange;
        text-decoration: none; 
    }

}

`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
background: transparent;
border: 0;
color: orange;
padding: 8px 7px;
outline: 0; //exclui a borda de contorno do elemento
border-radius: 5px;
`;
