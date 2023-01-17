import Head from 'next/head';
import Blog from '../../../components/common/blog';
import ContentBlock from '../../../components/common/content-block';
import { quick as data } from '../../../data/react-docs';

function Quick() {
  const blog = {};
  return (
    <>
      <Head>
        <title> React Quick</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Blog data={data}>
        <ContentBlock subHeading='For JavaScript related references docs recommends MDN and javascript.info'>
          <p className=''>
            MDN is my go to place for JavaScript & CSS related references,
            javascript.info was new to me and i also recommend to check their
            work
          </p>
        </ContentBlock>

        <ContentBlock subHeading='Prefer JSX/TSX over HTML'>
          <p>
            JSX is stricter than HTML for example you must return only one
            parent in your React component or you need to use a JSX Fragment
          </p>
        </ContentBlock>

        <ContentBlock subHeading='React has no advise on adding CSS to a component except the attribute naming'>
          <p>
            you can&apos;t use class attribute like HTML since class is a
            reserved keyword in JavaScript so you need use the className
            attribute to add CSS, and they also mentions style attribute when
            your styles depend on JavaScript variables except these points React
            has nothing to say about how you should add css for a component
          </p>
        </ContentBlock>

        <ContentBlock subHeading='use curly braces to escape into JavaScript'>
          <p>
            to display a variable within JSX or to pass a variable as a prop we
            need to use curly braces instead of quotes.
          </p>
        </ContentBlock>
      </Blog>
    </>
  );
}

export default Quick;
