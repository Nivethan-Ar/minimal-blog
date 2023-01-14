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
      <main className='font- text-white bg-[#212121] min-h-screen grid grid-cols-[_2.5fr,_5fr,_2.5fr] grid-rows-1'>
        <SocialLinks />

        <section
          className={`${className} flex flex-col pt-20 text-justify font-main font-normal border-gray-800`}
        >
          <div className='flex-1'>{children}</div>
          <Footer />
        </section>
        <Navigation />
      </main>
    </>
  );
}

export default AppLayout;
