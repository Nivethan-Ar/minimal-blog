import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className='place-self-center relative'>
      <ul className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-8 [&>li]:cursor-pointer [&>a>li]:bg-[#555555b5]'>
        <a
          href='https://www.linkedin.com/in/nivethan-me'
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <li className='rounded-full p-3'>
            <FaLinkedinIn className='text-lg text-white/80 group-hover:text-red-600' />
          </li>
        </a>

        <a
          href='https://github.com/Nivethan-Ar'
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <li className='rounded-full p-3'>
            <FaGithub className='text-lg text-white/80 group-hover:text-red-600' />
          </li>
        </a>

        <a className='group' href='mailto:nivethan.me@gmail.com'>
          <li className='rounded-full p-3'>
            <FiMail className='text-lg text-white/80 group-hover:text-red-600' />
          </li>
        </a>
      </ul>
    </div>
  );
}
