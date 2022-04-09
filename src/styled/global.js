import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-titulo: ##4D4D4D;
        --color-text: #9F9F9F;
        --color-text-2: #FFFFFF;
        --color-highlighted-text: #FBB900;
    }

    *{
        margin:0;
        padding:0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

`

