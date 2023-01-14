import Head from 'next/head';
import Blog from '../../../components/common/blog';
import ContentBlock from '../../../components/common/content-block';
import { installation as data } from '../../../data/react-docs';

function Installation() {
  return (
    <>
      <Head>
        <title> React Installation</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Blog data={data}>
        <ContentBlock subHeading='1. React is a UI library & not a framework'>
          <p className=''>
            react docs starting with a clarification that what react is doing is
            breaking ui code into pieces called components and not routing and
            data management which is done by a framework for example nextjs
          </p>
        </ContentBlock>

        <ContentBlock subHeading='New docs still recommends Create React App(CRA) for learning'>
          <p>
            They mentions the limitations of CRA, like providing a bad
            performance, slower loading time, slower builds. i&apos;m sure why
            you need CRA even for learning on 2023 instead of a tool like vite
            but fortunatily the new docs also mentions alternatives like vite
            and parcel
          </p>
        </ContentBlock>

      </Blog>
    </>
  );
}

export default Installation;
