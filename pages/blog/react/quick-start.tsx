import Head from 'next/head';
import Link from 'next/link';
import { userAgent } from 'next/server';
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

        <ContentBlock subHeading='Conditionally render by if statement or Ternary operator'>
          <p>
            You can use a usual javascript if statement to Conditionally include
            JSX and if you want compact code go for the ternary operator.
          </p>
          <p>
            but one more way mentioned in the doc is a logical && operator which
            can be result in shooting yourself in the foot. i highly recommend
            you to check this{' '}
            <a
              className='hover:text-red-'
              href='https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx'
              target='_blank'
              rel='noopener noreferrer'
            >
              Post
            </a>{' '}
            by kent C. Dodds
          </p>
        </ContentBlock>

        <ContentBlock subHeading='Rendering lists requires a key attribute'>
          <p>
            if you have an array of items you can use the map function to render
            all items. but for each item you need to pass a key which is used by
            React to identify if you remove, insert or reorder these items
          </p>
          <p>
            React recommends to use database ID as the key(because they are
            unique) and key must not change between rerenders so Don&apos;
            generate them everytime while rendering. In my opinion if you are
            just going to show all items without remove, insert or reorder
            things in the UI you don&apos;t have to worry much about the key
          </p>
        </ContentBlock>
        <ContentBlock subHeading='Do not call a event handler, leave that to React'>
          <p>
            they explain how you can handle an onClick event on a button with a
            event handler function. and the rule is you must pass the event
            handler function to the button&apos;s onClick attribute instead of
            calling it like handleClick()
          </p>
          <p>
            If you are a beginner you have another good take away from the
            example which is the naming convention. you start the function name
            with &quot;handle&quot; since its handing an event followed by the
            type of event &quot;click&quot;, it also make the code more readable
          </p>
        </ContentBlock>

        <ContentBlock subHeading='New Docs distinguish between Rules and Conventions'>
          <p>
            while explaining useState returns 2 things such as count and
            setCount they mentions it&apos;s just a naming convention and you
            can use any name you want(but better stick this convention to avoid
            any unnecessary confusions between your team members){' '}
          </p>
        </ContentBlock>

        <ContentBlock subHeading='components maintain their own state even if you use same component twice'>
          <p>
            let&apos;s say you have a MyButton component with a
            &quot;count&quot; state, if you declare the component two times and
            click on the first button 1 time and second button 2 times each will
            maintain their own state instead having a global state.
          </p>
        </ContentBlock>

        <ContentBlock subHeading='Sharing same state value between components'>
          <p>
            on the previous point we saw that each component is going to have
            their own state but what if you want 2 button components to have
            same state and update together? you can do this my lifting the
            &quot;count&quot; state up to a parent component and pass it as a
            prop to both buttons. now it will share and update together
          </p>
        </ContentBlock>

        <ContentBlock subHeading='Breaking UI into pieces called components'>
          <p>
            Depending on their background they explains how you can split the UI into smaller pieces but one good technique they mentions is single responsibility principle, so your component should ideally do only one thing.
          </p>
        </ContentBlock>
        <ContentBlock subHeading='Props vs State'>
          <p>
            Props and State are the 2 types of "model" data in React and They aren't same.
          </p>
        </ContentBlock>
      </Blog>
    </>
  );
}

export default Quick;
