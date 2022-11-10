import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    button{
      outline: none;
      border: none;
      border-radius: 5px;
    }

    a{
      text-decoration: none;
    }

    li{
      list-style-type: none;
    }
`;

export default GlobalStyle;