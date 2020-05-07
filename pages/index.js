import Layout from '../components/MyLayout';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Head from 'next/head';

const Index = props => {
  return (
    <>
      <Head>
        <title key="title">Sujyoth Karkera</title>
        <meta key="og:title" property="og:title" content="Sujyoth Karkera" />
        <meta key="og:image" property='og:image' content="/images/home.png" />
        <meta key='og:description' property='og:description' content="A website to showcase my projects." />
        <meta key='og:url' property='og:url' content="https://sujyoth.now.sh" />
      </Head>
      <Layout>
        <ProjectsCarousel />
      </Layout>
    </>
  );
}

export default Index;