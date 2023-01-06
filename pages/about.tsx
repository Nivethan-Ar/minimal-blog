import Head from 'next/head';
import AppLayout from '../components/layouts/AppLayout';

function About() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>About</AppLayout>
    </>
  );
}

export default About;
