import styled from 'styled-components';

const StyledContent = styled.div`
    padding: ${({ theme }) => theme.paddings.large};
    max-width: 1024px;
    margin: auto;
    text-align: left;
`;

const Content = (props) => <StyledContent>{props.children}</StyledContent>;

export default Content;
