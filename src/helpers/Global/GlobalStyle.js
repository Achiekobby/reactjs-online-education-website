import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Segoe UI",sans-serif;
}

html{
    &::-webkit-scrollbar{
        width: 1rem;
    }
    &::-webkit-scrollbar-track{
        background: #FFF;
    }
    &::-webkit-scrollbar-thumb{
        background: #5d55ff;
        border-radius: 5px;
    }
}
body{
    background: #F4F4F4;
    overflow-x: hidden;
}
`;

export default GlobalStyle