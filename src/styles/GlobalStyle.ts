import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        overflow-y: scroll;
    }
    ol, ul, li{
        list-style: none;
    }
    button {
        border: 0;
        margin:0;
        padding:0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;
