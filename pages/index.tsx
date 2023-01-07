import Head from 'next/head';
import Footer from '../components/common/footer';
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

      <AppLayout className='font-lex py-0'>
        <div className='w-full flex flex-col justify-center items-center flex-1 bg-blue-'>
          <h1 className='flex flex-col font-bold'>
            <span className='text-4xl lg:text-6xl'>Hi,</span>
            <span className='text-4xl lg:text-6xl'>
              {' '}
              I&apos;M
              <span className=''> NIVETHAN </span>
            </span>
            <span className='text-2xl font-medium capitalize text-right lg:text-xl'>
              software engineer
            </span>
          </h1>
        </div>
      </AppLayout>
    </>
  );
}
