import Head from 'next/head';
import Navigation from '../../components/common/navigation';
import SocialLinks from '../../components/common/social-links';
import AppLayout from '../../components/layouts/AppLayout';

function React() {
  return (
    <>
      <Head>
        <title> React Insights</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section className='border-x- py-20 text-justify font-main font-normal border-gray-800'>
          <div className='flex flex-col'>
            <p>Jan 6, 2023</p>
            <h1 className='mt-1 mb-3 text-2xl font-main font-bold uppercase'>
              Section 1: About React
            </h1>
            <h2 className='text-xl mb-3 font-medium font-sub  '>
              Installation
            </h2>

            <p className='font-medium font-sub'>
              1. The docs use CodeSandbox for their interactive code examples.
            </p>
            <p>
              {' '}
              React has been designed from the start for gradual adoption. You
              can use as little or as much React as you need. Whether you want
              to get a taste of React, add some interactivity to an HTML page,
              or start a complex React-powered app, this section will help you
              get started.
            </p>
          </div>
        </section>
      </AppLayout>
    </>
  );
}

export default React;
