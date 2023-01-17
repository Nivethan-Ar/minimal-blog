import Head from 'next/head';
import AppLayout from '../components/layouts/AppLayout';
import Image from 'next/image';

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
        <div className='w-full text-justify flex-1 h-full flex flex-col items-start justify-center gap-y-6 2xl:max-w-2xl 2xl:ml-auto 2xl:mr-auto'>
          <h1 className='text-2xl uppercase font-bold mb-2 font-lex'>about</h1>
          <h3>Hey there!</h3>
          <p>
            Welcome to my personal blog! My name is Nivethan and I am a
            full-stack software engineer with over 1 year of experience in the
            IT industry. I specialize in technologies such as Node.js, React,
            Next.js, and Nest.js, I have a strong background in web development.
            I am passionate about all new technologies and I&apos;m always try
            to find better ways to solve a software related problem.
          </p>
          <p>
            In this blog, you will find articles on a variety of topics related
            to software development, such as new technologies, best practices,
            and tips on how to improve your skills. I will be sharing my
            experience working with different technologies and discussing the
            challenges and solutions I have encountered. My goal is to provide
            valuable insights on the latest trends and technologies in the
            industry and to help others develop their skills as software
            developers.
          </p>
          <p>
            As a software engineer, I believe that continuous learning and
            sharing knowledge with others is the key to success. This is why I
            have decided to create this blog, to share my knowledge and to learn
            from others. I would like to invite you to join me on this journey
            and to be a part of a community of like-minded individuals who are
            passionate about technology and software development. Thank you for
            visiting!
          </p>

          {/* <h4 className='self-end text-xl font-bold font-lex uppercase'>A.NivethaN</h4> */}
          <Image
            className='self-end mt-8'
            src='/images/nivethan-white.png'
            alt='author name'
            width={130}
            height={100}
          />
        </div>
      </AppLayout>
    </>
  );
}

export default About;
