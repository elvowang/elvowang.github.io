import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 0;
    margin: 0;
    text-align: center;
`;

const Container = (props) => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
);

const StyledBanner = styled.div`
    background: ${({ theme }) => theme.colors.inactive};
    height: 200px;
`;

export const Banner = () => (
    <StyledBanner />
);

const StyledContent = styled.div`
    padding: ${({ theme }) => theme.paddings.large};
    max-width: 1024px;
    margin: auto;
    text-align: left;
`;

export const Content = (props) => (
    <StyledContent>{props.children}</StyledContent>
);

export default Container;
