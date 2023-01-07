import Head from 'next/head';
import AppLayout from '../components/layouts/AppLayout';

function About() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='React Insight and best practices' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout className='pb-0'>
        <div className='w-full flex-1 flex flex-col justify-center items-start gap-y-4'>
          <h1 className='text-2xl uppercase font-bold mb-2 font-lex'>about</h1>
          <h3>Hey there!</h3>
          <p>
            Welcome to my blog, I&apos;m a full stack software engineer with
            over 1 year of industrial experience, I am skilled in developing web
            and software applications from end to end. As an IT graduate, I have
            a strong foundation in computer science and a passion for solving
            complex problems using code.
          </p>
          <p>
            In my previous roles, I have worked on a variety of projects, from
            designing user interfaces to implementing back-end logic and
            databases. My goal is to continue growing as a full stack developer,
            and to use my skills and expertise to create value for clients and
            organizations.
          </p>

          <p>
            In my previous roles, I have worked on a variety of projects, from
            designing user interfaces to implementing back-end logic and
            databases. My goal is to continue growing as a full stack developer,
            and to use my skills and expertise to create value for clients and
            organizations.
          </p>
          <p>
            In my previous roles, I have worked on a variety of projects, from
            designing user interfaces to implementing back-end logic and
            databases. My goal is to continue growing as a full stack developer,
            and to use my skills and expertise to create value for clients and
            organizations.
          </p>

          <p>
            In my previous roles, I have worked on a variety of projects, from
            designing user interfaces to implementing back-end logic and
            databases. My goal is to continue growing as a full stack developer,
            and to use my skills and expertise to create value for clients and
            organizations.
          </p>
        </div>
      </AppLayout>
    </>
  );
}

export default About;
