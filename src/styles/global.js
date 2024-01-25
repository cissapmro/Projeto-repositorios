import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; 
}
body, html, #root {
    min-height: 100%; 
}
body {
    background: #0D2636;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;

body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
}    
button {
    cursor: pointer;
}
}
`;