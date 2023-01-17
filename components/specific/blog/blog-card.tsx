import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function PostCard() {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-y-2'>
      <h3 className='uppercase'>january 2023</h3>
      <div className='bg-[#181818] font-main rounded-md px-6 py-8 flex flex-col gap-y-4 '>
        <h2 className='text-2xl font-bold font-lex'>
          React best Practices from fresh new React docs
        </h2>
        <p className='text-base'>
          Let&apos;s extract important points from new React docs.
        </p>
        <Link className='w-fit' href={'blog/react'}>
          <button className='w-fit text-sm bg-gray-600 self-end px-4 py-1 rounded'>
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
