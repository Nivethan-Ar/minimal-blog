export default function Navigation() {
  return (
    <nav className='place-self-center'>
      <ul className='fixed font top-1/2 -translate-y-1/2 -translate-x-1/2 flex uppercase flex-col gap-y-12'>
        <li className='hover:underline underline-offset-8'>home</li>
        <li className='hover:underline underline-offset-8'>about</li>
        <li className='hover:underline underline-offset-8'>insights</li>
      </ul>
    </nav>
  );
}
