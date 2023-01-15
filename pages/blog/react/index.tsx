import Head from 'next/head';
import { useState } from 'react';
import AppLayout from '../../../components/layouts/AppLayout';
import BlogNavigation from '../../../components/specific/blog/blog-navigation';
import { reactBlogData } from '../../../data/react-docs';

function ReactNewDocsSeries() {
  const [postNumber, setPostNumber] = useState(0);
  const blog = reactBlogData[postNumber];

  return (
    <>
      <Head>
        <title> React Insights</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout className='font-main font-normal border-gray-800 overflow-'>
        <div className='flex flex-col justify-center items-start gap-y-6'>
          <p>Jan 6, 2023</p>

          <h1 className='text-2xl self-center uppercase font-bold mb-2 font-lex'>
            React best Practices from fresh new React docs
          </h1>

          <h2 className='text-lg capitalize font-medium font-sub  '>
            introduction
          </h2>

          <div className='flex-1 mb-8 flex flex-col gap-y-6'>
            <p>
              React is a popular JavaScript library known for its un-opinionated
              nature, which can be both a blessing and a curse for beginners. On
              one hand, it gives developers the freedom to structure their code
              in the way that makes the most sense for their specific use case.
              On the other hand, it can also make it difficult for beginners to
              know where to start and how to structure their code effectively.
              The new React documentation, which has been in the making for 2
              years, takes this into account by focusing on functional
              components, providing a clear and consistent approach to building
              React applications.
            </p>

            <p>
              In this blog post, we are going to explore the new React
              documentation, which has been recently released. The new docs
              include a focus on functional components, which can be a powerful
              tool for building UIs with React. I have gone through the new docs
              word by word and break down best practices for building UIs with
              React. Additionally, the use of functional components enables
              developers to take advantage of the latest React features such as
              hooks, which can help improve code reusability and performance.
            </p>
            <p>
              Whether you&apos;re a beginner or an experienced React developer,
              this blog post will be a valuable resource for building UIs with
              React. The new documentation provides clear and concise
              information on how to effectively use functional components to
              build powerful and efficient UIs. By going through the new docs
              word by word, I have been able to provide readers with a
              comprehensive breakdown of the best practices and latest features
              outlined in the new React documentation. So, whether you&apos;re
              looking to improve your existing React skills or just getting
              started with the library, this blog post will be an essential
              resource for building UIs with React.
            </p>
          </div>
        </div>

        <div>
          <BlogNavigation
            postNumber={postNumber}
            setPostNumber={setPostNumber}
          />
        </div>
      </AppLayout>
    </>
  );
}

export default ReactNewDocsSeries;
