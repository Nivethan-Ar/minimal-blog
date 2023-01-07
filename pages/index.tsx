import Head from 'next/head';
import Navigation from '../components/common/navigation';
import SocialLinks from '../components/common/social-links';
import AppLayout from '../components/layouts/AppLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout className='flex bg-red-400'>
        <div></div>
      </AppLayout>
    </>
  );
}
