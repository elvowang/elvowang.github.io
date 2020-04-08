import styled from 'styled-components';

const StyledBanner = styled.div`
    background: #6aa9bb;
    background-image: url(/data/image_banner.jpeg);
    background-position: 50% 0%;
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat;
    height: 150px;

    ${({ theme }) =>theme.breakpoints.xs`
        height: 250px;
    `}

    ${({ theme }) =>theme.breakpoints.md`
        background-position: 50% -10%;
        height: 300px;
    `}
`;

const Banner = () => <StyledBanner />;

export default Banner;
