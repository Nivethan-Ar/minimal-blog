import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex items-center justify-center tracking-wider gap-x-2 mt-6 pb-4 text-xs font-main text-white/50 bg-orange-'>
      &copy; {`${new Date().getFullYear()}`} This page is made with
      <Link target={'_blank'} href={'https://github.com/Nivethan-Ar'}>
        <FaHeart className='animate- text-sm text-white/80 hover:text-red-600' />{' '}
      </Link>
      by
      <Link target={'_blank'} href={'https://www.linkedin.com/in/nivethan-me'}>
        <span className='text-white/80 font-semibold hover:text-red-600'>
          Nivethan
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
