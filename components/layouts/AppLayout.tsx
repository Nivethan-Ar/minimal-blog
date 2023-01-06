import { ReactNode } from 'react';
import Navigation from '../common/navigation';
import SocialLinks from '../common/social-links';

type Props = {
  children: ReactNode;
};

function AppLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <main className='font- text-white bg-[#212121] min-h-screen grid grid-cols-[_2.5fr,_5fr,_2.5fr] grid-rows-1'>
        <SocialLinks />

        <section className='border-x- py-20 text-justify font-main font-normal border-gray-800'>
          {children}
        </section>
        <Navigation />
      </main>
    </>
  );
}

export default AppLayout;