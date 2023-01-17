import { ReactNode } from 'react';
import Footer from '../common/footer';
import Navigation from '../common/navigation';
import SocialLinks from '../common/social-links';

type Props = {
  children: ReactNode;
  className?: string;
};

function AppLayout(props: Props) {
  const { children, className } = props;

  return (
    <>
      <main className='font- text-white bg-[#212121] min-h-screen grid grid-cols-1 grid-rows-1 lg:grid-cols-[_2.5fr,_5fr,_2.5fr] lg:grid-rows-1'>
        <SocialLinks />

        <section
          className={`${className} flex flex-col pt-20 text-j font-main font-normal px-6 lg:px-0`}
        >
          <div className='flex-1 mb-10'>{children}</div>
          <Footer />
        </section>
        <Navigation />
      </main>
    </>
  );
}

export default AppLayout;
