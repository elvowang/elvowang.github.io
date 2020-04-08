import styled from 'styled-components';
import profile from '../../public/data/profile';

const StyledAvatar = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 80px;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: inline-block;

    & > img {
        display: block;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: solid 1px ${({ theme }) => theme.colors.inactive};
    }

    ${({ theme }) => theme.breakpoints.sm`
        height: 200px;
        width: 200px;
        font-size: 200px;

        & > img {
            height: 200px;
            width: 200px;
        }
    `}
`;

const StyledInfoContrainer = styled.div`
    display: inline-block;
    width: calc(100% - 80px - 40px);
    vertical-align: top;
    margin: 0 ${({ theme }) => theme.paddings.small};
    padding: ${({ theme }) => theme.paddings.small};
    margin-bottom: ${({ theme }) => theme.paddings.large};

    & > div:first-child {
        font-size: ${({ theme }) => theme.sizes.medium};
    }

    ${({ theme }) => theme.breakpoints.sm`
        position: relative;
        width: calc(100% - 200px - 120px);
        margin: 0 ${theme.paddings.large};
        padding: ${theme.paddings.large};
    `}
`;

const StyledIntro = styled.div`
    margin: ${({ theme }) => theme.paddings.small} 0;
    padding: ${({ theme }) => theme.paddings.small} 0;
    padding-right: 10px;
    border-top: solid 1px ${({ theme }) => theme.colors.inactive};

    ${({ theme }) => theme.breakpoints.sm`
        margin: ${theme.paddings.medium} 0;
        padding: ${theme.paddings.medium} 0;
        padding-right: 90px;
    `}
`;

const StyledExternalLinks = styled.div`
    background: ${({ theme }) => theme.colors.white};
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;

    ${({ theme }) => theme.breakpoints.sm`
        top: 0;
        right: 0;
        left: auto;
        width: auto;
    `}
`;

const StyledLink = styled.a`
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    margin: 0 ${({ theme }) => theme.paddings.large};
    border-radius: 50%;

    ${({ theme }) => theme.breakpoints.sm`
        display: block;
        margin: ${theme.paddings.large};
    `}
`;

const StyledIcon = styled.div`
    background: url(data/image_spritesheet.png) -5px -${({ index }) => index * 40 + 5}px;
    width: 30px;
    height: 30px;
`;

const renderLink = ({ source, link }, index) => {
    const href = source === 'email' ? `mailto:${link}?Subject=Hello%20Elvo` : link;
    const target = source === 'email' ? null : '_blank';
    const onClick = () => ga('send', 'event', 'Github_Page', 'Click_Link', source);

    return (
        <StyledLink href={href} target={target} key={source}>
            <StyledIcon index={index} onClick={onClick}/>
        </StyledLink>
    );
}

const Introduction = () => (
    <div>
        <StyledAvatar>
            {profile.avatar ? (<img src={profile.avatar} />) : 'W'}
        </StyledAvatar>
        <StyledInfoContrainer>
            <div>{profile.name}</div>
            <StyledIntro>{profile.introduction}</StyledIntro>
            <StyledExternalLinks>
                {profile.externalLinks.map(renderLink)}
            </StyledExternalLinks>
        </StyledInfoContrainer>
    </div>
);

export default Introduction;
