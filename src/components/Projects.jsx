import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StyledContainer = styled.div`
    input,
    input ~ div.content div.portfolioContent,
    input ~ div.content div.journeyContent,
    input ~ div.content div.storyContent {
        display: none;
    }
    input#portfolio:checked ~ div.content div.portfolioContent,
    input#journey:checked ~ div.content div.journeyContent,
    input#story:checked ~ div.content div.storyContent {
        display: block;
    }

    input#portfolio:checked ~ div.tabs label.portfolioTab,
    input#journey:checked ~ div.tabs label.journeyTab,
    input#story:checked ~ div.tabs label.storyTab {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const StyledTabs = styled.div`
    margin: ${({ theme }) => theme.paddings.large} 0;
    padding-bottom: ${({ theme }) => theme.paddings.large};
    border-bottom: 1px solid ${({ theme }) => theme.colors.inactive};

    label {
        display: inline-block;
        width: 33.3%;
        text-align: center;
        font-size: ${({ theme }) => theme.sizes.small};
        cursor: pointer;
    }
`;

const StyledContent = styled.div`
    .year {
        padding-bottom: ${({ theme }) => theme.paddings.large};
    }

    .item {
        display: inline-block;
        width: 300px;
        height: 300px;
        overflow: hidden;
        position: relative;
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.paddings.medium};

        &:hover {
            .title,
            .desc,
            &:before {
                display: block;
            }
        }

        &:before {
            content: '';
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
        }

        .title {
            font-size: ${({ theme }) => theme.sizes.medium};
            padding-bottom: ${({ theme }) => theme.paddings.medium};
            margin-bottom: ${({ theme }) => theme.paddings.medium};
            border-bottom: 1px solid ${({ theme }) => theme.colors.white};
            display: none;
        }

        .desc {
            display: none;
        }

        img {
            position: absolute;
            height: 100%;
            top: 0;
            right: 50%;
            z-index: -2;
            transform: translateX(50%);
        }
    }
`;

const fetchProjects = () => fetch('/data/projects.json').then(res => res.json());

const Content = ({ items }) => {
    if (!items || items.length === 0) {
        return 'Comming soon';
    }

    const groupItems = items.reduce((group, item) => {
        const year = new Date(item.time).getFullYear();
        group[year] = group[year] ? group[year].concat(item) : [item];
        return group;
    }, {});

    return Object.entries(groupItems).map(([year, group]) => (
        <StyledContent key={year}>
            <div className="year">{year}</div>
            <>{group.map(item => (
                <div className="item" key={item.title}>
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.description}</div>
                    <img src={item.cover} alt={item.title}/>
                </div>
            ))}</>
        </StyledContent>
    ))
};

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    if (!projects) {
        return null;
    }

    return (
        <StyledContainer>
            <input id="portfolio" type="radio" name="projectType" value="portfolio" defaultChecked />
            <input id="journey" type="radio" name="projectType" value="journey" />
            <input id="story" type="radio" name="projectType" value="story" />
            <StyledTabs className="tabs">
                <label className="portfolioTab" htmlFor="portfolio">My portfolio</label>
                <label className="journeyTab" htmlFor="journey">My journey</label>
                <label className="storyTab" htmlFor="story">My story</label>
            </StyledTabs>
            <div className="content">
                <div className="portfolioContent"><Content items={projects.portfolio}/></div>
                <div className="journeyContent"><Content items={projects.journey}/></div>
                <div className="storyContent"><Content items={projects.story}/></div>
            </div>
        </StyledContainer>
    );
};

export default Projects;