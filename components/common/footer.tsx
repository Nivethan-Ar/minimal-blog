import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex items-center justify-center tracking-wider gap-x-2 py-4 text-xs font-main text-white/50 bg-orange-'>
      &copy; {`${new Date().getFullYear()}`} This page is made with
      <FaHeart className='animate- text-sm text-white/80' /> by
      <span className='text-white/80 font-semibold'>Nivethan</span>
    </footer>
  );
}

export default Footer;
