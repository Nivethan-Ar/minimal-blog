import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className='place-self-center relative'>
      <ul className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-8 [&>li]:cursor-pointer [&>li]:bg-[#555555b5]'>
        <li className='rounded-full p-3'>
          <a
            href='https://www.linkedin.com/in/nivethan-me'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn className='text-lg' />
          </a>
        </li>

        <li className='rounded-full p-3'>
          <a
            href='https://github.com/Nivethan-Ar'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-lg' />
          </a>
        </li>

        <li className='rounded-full p-3'>
          <a href='mailto:nivethan.me@gmail.com'>
            <FiMail className='text-lg' />
          </a>
        </li>
      </ul>
    </div>
  );
}
