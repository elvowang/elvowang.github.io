import { css } from 'styled-components';

const respondTo = (breakpoint) => (...args) => css`
    @media (min-width: ${breakpoint}) {
        ${css(...args)}
    }
`;

export default {
    colors: {
        primary: '#00bcd4',
        inactive: '#e3e3e3',
        white: '#ffffff',
        black: '#00454e',
    },
    paddings: {
        small: '10px',
        medium: '20px',
        large: '30px',
    },
    sizes: {
        small: '18px',
        medium: '24px',
        large: '32px',
    },
    breakpoints: {
        xs: respondTo('480px'),
        sm: respondTo('768px'),
        md: respondTo('1024px'),
        lg: respondTo('1200px')
    }
};
