import styled from 'styled-components';
import profile from '../data/profile';

const StyledAvatar = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 200px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: inline-block;
`;

const StyledInfoContrainer = styled.div`
    display: inline-block;
    width: calc(100% - 200px - 120px);
    vertical-align: top;
    margin: 0 ${({ theme }) => theme.paddings.large};
    padding: ${({ theme }) => theme.paddings.large};
    position: relative;

    & > div {
        font-size: ${({ theme }) => theme.sizes.medium};
    }
`;

const StyledIntro = styled.div`
    margin: ${({ theme }) => theme.paddings.medium} 0;
    padding: ${({ theme }) => theme.paddings.medium} 0;
    border-top: solid 1px ${({ theme }) => theme.colors.inactive};
`;

const StyledExternalLinks = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
`;

const StyledLink = styled.a`
    display: block;
    cursor: pointer;
    overflow: hidden;
    margin: ${({ theme }) => theme.paddings.large};
    border-radius: 50%;
`;

const renderLink = ({ source, link }, index) => {
    let href = null;
    let target = null;
    let style = null;

    if (source === 'email') {
        href = `mailto:${link}?Subject=Hello%20Elvo`;
    } else {
        href = link;
        target = '_blank';
    }

    style = {
        background: `url(spritesheet.png) -5px -${index * 40 + 5}px`,
        width: '30px',
        height: '30px',
    };

    return (
        <StyledLink href={href} target={target}>
            <div style={style}>{' '}</div>
        </StyledLink>
    );
}

const Introduction = () => (
    <div>
        <StyledAvatar>
            {profile.avatar || 'W'}
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
