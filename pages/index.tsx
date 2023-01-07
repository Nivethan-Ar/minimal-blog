import Head from 'next/head';
import Navigation from '../components/common/navigation';
import SocialLinks from '../components/common/social-links';
import AppLayout from '../components/layouts/AppLayout';
import { FaHeart } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout className='font-lex !py-0 flex flex-col gap-y- justify-center items-stretch bg-red- h-full '>
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

        <footer className='flex items-center justify-center tracking-wider gap-x-2 py-4 text-xs font-main text-white/50 bg-orange-'>
          &copy; {`${new Date().getFullYear()}`} This page is made with
          <FaHeart className='animate- text-sm text-white/80' /> by
          <span className='text-white/80 font-semibold'>Nivethan</span>
        </footer>
      </AppLayout>
    </>
  );
}
