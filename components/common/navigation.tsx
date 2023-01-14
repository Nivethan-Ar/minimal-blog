import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='place-self-center'>
      <ul className='fixed font top-1/2 -translate-y-1/2 -translate-x-1/2 flex uppercase flex-col gap-y-12'>
        <li className='hover:underline underline-offset-8'>
          <Link href={'/'}>home</Link>
        </li>
        <li className='hover:underline underline-offset-8'>
          <Link href={'/about'}>about</Link>
        </li>
        <li className='hover:underline underline-offset-8'>
          <Link href={'/blog'}>blog</Link>
        </li>
      </ul>
    </nav>
  );
}
