import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  subHeading: string;
}

function ContentBlock(props: Props) {
  const { children, subHeading } = props;

  return (
    <div className='relative'>
      <li className={`text-xl mb-2 font-lex`}>{subHeading}</li>

      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>{children}</div>
      </div>
    </div>
  );
}
export default ContentBlock;
