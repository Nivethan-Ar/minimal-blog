import { ReactNode, useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import BlogNavigation from '../specific/blog/blog-navigation';
import { reactBlogData } from '../../data/react-docs';

interface Props {
  data: any;
  children: ReactNode;
}

function Blog(props: Props) {
  const { data, children } = props;
  const [postNumber, setPostNumber] = useState(reactBlogData.indexOf(data));
  console.log(postNumber);

  return (
    <AppLayout className='font-main font-normal border-gray-800 2xl:max-w-2xl 2xl:ml-auto 2xl:mr-auto'>
      <div className='flex flex-col gap-y-6 h-full'>
        <div>
          <p>Jan 6, 2023</p>
          <h1 className='mt-1 text-2xl font-main font-bold uppercase'>
            Section 1: {data.section}
          </h1>
        </div>
        <h2 className='text-lg capitalize font-medium font-sub  '>
          {data.title}
        </h2>

        <ol className='flex list-decimal list-inside flex-col gap-y-6 text-justify flex-1'>{children}</ol>
        <BlogNavigation postNumber={postNumber} setPostNumber={setPostNumber} />
      </div>
    </AppLayout>
  );
}

export default Blog;
