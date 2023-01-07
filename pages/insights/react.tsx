import Head from 'next/head';
import { useState } from 'react';
import AppLayout from '../../components/layouts/AppLayout';
import { data } from '../../data/react-docs';

function React() {
  const [postCount] = useState(0);
  const blog = data[postCount];

  return (
    <>
      <Head>
        <title> React Insights</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout classNames='font-main font-normal border-gray-800'>
        <div className='flex flex-col gap-y-6'>
          <div>
            <p>Jan 6, 2023</p>
            <h1 className='mt-1 text-2xl font-main font-bold uppercase'>
              Section 1: {blog.section}
            </h1>
          </div>
          <h2 className='text-lg capitalize font-medium font-sub  '>
            {blog.title}
          </h2>

          <div className='flex flex-col gap-y-6 text-justify'>
            {blog.body.map((block, i) => (
              <div key={i} className='relative'>
                <h3 className={`text-xl mb-2 font-lex`}>{`${
                  i + 1 + '. ' + block.subHeading
                }`}</h3>
                <div className='flex flex-col gap-y-4'>
                  {block.paragraphs.map((paragraph, i) => (
                    <div key={i} className='flex flex-col gap-y-2'>
                      <p className='' dangerouslySetInnerHTML={paragraph} />
                      <code className=''>{paragraph.code}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
}

export default React;
