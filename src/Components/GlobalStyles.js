import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap')
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }

    p, span, h3, h2, ul {
        padding: 0;
        margin: 0;
    }

    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        font-family: 'Nanum Gothic', sans-serif;
    }
`;

export default globalStyles;
