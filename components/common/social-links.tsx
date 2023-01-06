import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className='place-self-center relative'>
      <ul className='fixed top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-8 [&>li>div]:bg-[#555555b5]'>
        <li className=''>
          <div className='rounded-full p-3 '>
            <FaLinkedinIn className='text-lg' />
          </div>
        </li>
        <li>
          <div className='rounded-full p-3 '>
            <FaGithub className='text-lg' />
          </div>
        </li>
        <li>
          <div className='rounded-full p-3 '>
            <FiMail className='text-lg' />
          </div>
        </li>
      </ul>
    </div>
  );
}
