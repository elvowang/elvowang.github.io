import Head from 'next/head';
import GlobalStyle from '../src/components/GlobalStyle';
import Container, { Banner, Content } from '../src/components/Container';
import Introduction from '../src/components/Introduction';
import profile from '../src/data/profile';

const IndexPage = () => {
    return (
        <Container>
            <Head>
                <title>{profile.name}</title>
                <meta name="description" content={profile.description} />
                <meta name="referrer" content="no-referrer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <GlobalStyle />
            <>
                <Banner />
                <Content>
                    <Introduction />
                </Content>
            </>
        </Container>
    )
}

export default IndexPage;
