import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins",sans-serif;
}

html{
    
}
body{
    background: #F4F4F4;
    overflow-x: hidden;
}
`;

export default GlobalStyle