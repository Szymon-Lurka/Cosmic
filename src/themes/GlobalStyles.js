import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::after,*::before {
    box-sizing:border-box;
    margin:0;
    padding:0;
}
html {
    font-size: 62.5%;
}
body {
    font-size: 1.6rem;
    font-family:'Montserrat',sans-serif;
}
`;

export default GlobalStyles;
