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

export default Container;
