import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    html, body {
        width: 100%;
        font-size: ${({ theme }) => theme.sizes.small};
    }
`;