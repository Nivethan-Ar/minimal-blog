import Head from 'next/head';
import AppLayout from '../../components/layouts/AppLayout';
import { PostCard } from '../../components/specific/blog/blog-card';

export default function Blog() {
  return (
    <>
      <Head>
        <title>My Recent Blogs</title>
        <meta name='description' content='My recent blogs about software' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout className='font-lex '>
        <div className='h-full'>
          <div className='grid grid-cols-1 gap-x-12 gap-y-12 '>
            <PostCard />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
