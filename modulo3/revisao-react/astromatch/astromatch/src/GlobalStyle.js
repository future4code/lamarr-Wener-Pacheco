import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --ligth-yellow: #ffffe0;
    --cyan: #00ffff;
    --grey11: #1c1c1c;
    --dark: #000000;
    --navy: #000080;
    --snow-white: #f9fefc;
}

h1{
    font-family: 'satisfy', cursive;
    color: var(--cyan);
}

h2, h3{
    font-family:'roboto', sans-serif;
    color: var(--dark);
}

body{
    font-family: 'open-sans', sans-serif;
    background: var(--navy);
    color: var(--snow-white);
}

*{
    margin:0;
    padding:0;
    border: border-box;
}

`