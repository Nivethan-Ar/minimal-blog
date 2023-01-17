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
        <ContentBlock subHeading='React is a UI library & not a framework'>
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

        <ContentBlock subHeading='Next.js is recommended for Production Use'>
          <p>
            For a product ready app the docs suggest Next.js as a way to go.
            Other recommendations are Remix, Gatsby & Razzle
          </p>
        </ContentBlock>

        <ContentBlock subHeading='VS Code gets more focus as a recommended code editor'>
          <p>
            I think there is no big suprises here, personally i also use VS Code
            to pretty much everything and only other editor i love to master is
            Neovim(which is missing in this list) and it&apos;s totally fine if
            you use any of their recommended editors like Webstorm, Sublime Text
            or Vim, just pick your favorite weapon and be very good at it.
          </p>
        </ContentBlock>
        <ContentBlock subHeading='ESLint as the default choice for linter'>
          <p>
            Code linters highlight problems in your code during development.
            ESLint is the only thing mentioned on the docs for linting
          </p>
        </ContentBlock>
        <ContentBlock subHeading='Use Prettier for code formatting instead of ESLint'>
          <p>
            The opinionated nature of Prettier helps us remove the conversations
            like &quot;use semicolon at the end or not&quot; or as mentioned in
            the docs &quot;using tabs vs spaces&quot; and ESLint configurations
            often feels overwhelming. They also recommends to turn on the
            &quot;format on save&quot; option on VS Code or in your favorite
            editor
          </p>
        </ContentBlock>
        <ContentBlock subHeading='React Developer Tools for both React & React Native'>
          <p>
            In order to debug a React App you can install the React Developer
            Tools browser extension which is available on Chrome, Firebox &
            Edge. if you use any chromium based browsers like Brave or Vivaldi
            it will also work fine. for debug on Safari you need to install
            react-devtools npm package globally
          </p>
        </ContentBlock>
      </Blog>
    </>
  );
}

export default Installation;
