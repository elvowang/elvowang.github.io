import Head from 'next/head';
import Container from '../components/Container';
import Banner from '../components/Banner';
import Content from '../components/Content';
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import profile from '../../public/data/profile';

const IndexPage = () => {
    return (
        <Container>
            <Head>
                <title>{profile.name}</title>
                <meta name="description" content={profile.description} />
                <meta name="referrer" content="no-referrer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <script dangerouslySetInnerHTML={{ __html: `
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-133566840-4', 'auto');
                    ga('send', 'pageview');
                `}} />
            </Head>
            <GlobalStyle />
            <>
                <Banner />
                <Content>
                    <Introduction />
                    <Projects />
                </Content>
            </>
        </Container>
    )
}

export default IndexPage;
